const express = require("express");
const router = express.Router();
const CommentModel = require("../models/comments");
const PostModel = require("../models/post");
const UserModel = require("../models/user");

router.get("/", async(req,res) => {
    const comments = await CommentModel.find({});
    res.status(200).json(comments);
});

router.get("/post/:postId", async(req,res) => {
    //Visi komentarai pagal post'ą
    try {
        const comments = await CommentModel.find({
            post: req.params.postId
        });
        res.status(200).json({ comments });
    } catch(err) {
        res.redirect("/?error=Post not found")
    }

});

router.get("/user/:userId", async(req,res) => {
    //Visi komentarai pagal user id
    try {
        const comments = await CommentModel.find({
            author: req.params.userId
        });
        res.status(200).json({ comments });
    } catch(err) {
        res.redirect("/?error=User not found")
    }
});

router.post("/:postId", async(req,res) => {
    //Naujo komentaro sukūrimas
    // const content = req.body.content;
    try {
        const {content} = req.body;
        const post = await PostModel.findOne({_id: req.params.postId});
        if(!req.session.user?.loggedIn) {
            res.redirect("/?error=You must login if you want to comment.");
        }

        //Validacija

        const newComment = new CommentModel({
            content, 
            author: req.session.user.id, 
            post: req.params.postId,
        });
        await newComment.save();

        //Komentarų skaičiaus inkrementas post'e turint dokumentą iš Database
        post.commentsCount++;
        post.lastComment = Date.now() + (1000*60*60*2); //+2 valandos pagal laiko zonos
        post.lastCommentBy = req.session.user.id;
        post.save();

        //Komentarų skaičiaus inkrementas user'yje neturint dokumento iš Database
        //1 parametras - filtras
        //2 parametras - laukeliai, kuriuos atnaujiname
        //$inc objektas - inkremento objektas, kuriame nurodome pridedamas prie laukelių reikšmes
        //.exec() - atnaujinimo užklausos išsiuntimas į DB
        UserModel.findOneAndUpdate(
            {_id: req.session.user.id}, 
            { $inc: {commentsCount: 1}}
            ).exec();

        res.redirect(`/post/${req.params.postId}?message=Comment added successfully`);
    } catch (err) {
        res.redirect("/?error=Post not found.");
    }


});

router.delete("/:id", async(req,res) => {
    //Komentaro ištrynimas
    //Gali ištrinti adminas arba arba komentaro autorius
});

router.put("/:id", async(req,res) => {
    //Komentaro atnaujinimas
});


module.exports = router;
const express = require('express');
const router = express.Router();
const PostModel = require('../models/post');

router.get('/', async(req, res) => {
    //Visų įrašų gavimas
    const allPosts = await PostModel.find({});
    res.status(200).json(allPosts);
});

router.get('/:id', async(req, res) => {
    //Vieno konkretaus įrašo gavimas
    const post = await PostModel.find({_id: req.params.id}); //Jei neatrandamas, reikšmė tampa undefined
    if(!post) {
        return res.status(404).json({message: "Post not found"});
    }
    res.status(200).json(post);
});

router.delete('/:id', async(req, res) => {
    const post = await PostModel.find({_id: req.params.id}); //Jei neatrandamas, reikšmė tampa undefined
    if(!post) {
        return res.status(404).json({message: "Post not found"});
    }
    //Jei autorius yra prisijungęs vartotojas ar prisijungęs vartotojas yra admin, tada leidžiame ištrinti įrašą
    if(post.author === req.session.user.id || req.session.user.admin) {
        await PostModel.findOneAndDelete({_id: req.params.id});
        return res.status(200).json({message: "Post was successfully deleted"})
    }
    return res.status(403).json({message: "You have no rights to delete this post"});

    //Įrašo ištrynimas

});

router.post('/', async(req, res) => {
    //Naujo įrašo sukūrimas
    const {title, content} = req.body;
    const author = req.session.user.id;

    //Validacija

    //Išsaugojimas db
    const newPost = new PostModel({
        title,
        content,
        author,
    });
    await newPost.save();
    res.redirect('/?message=New post was successfully created!');

});

router.put('/', async(req, res) => {
    //Įrašo atnaujinimas

});

router.get("/like/:postId", async (req, res) => {
	if (!req.session.user?.loggedIn) {
		return res.status(403).json({ message: "You should log in!" });
	}

	const post = await PostModel.findOne({ _id: req.params.postId });
	if (post.postLikedUsers.includes(req.session.user.id)) {
		return res.status(403).json({ message: "You already liked this post!" });
	}

	if (post.postDislikedUsers.includes(req.session.user.id)) {
		post.postDislikedUsers.splice(
			post.postDislikedUsers.findIndex(
				(dislikedUser) => req.session.user.id === dislikedUser
			),
			1
		);
		post.dislikesCount--;
	}

	console.log(req.session.user.id);
	post.postLikedUsers.push(req.session.user.id);
	post.likesCount++;
	await post.save();
	res.status(200).json({ message: "Successfully liked post" });
});;

router.get("/dislike/:postId", async (req, res) => {
	if (!req.session.user?.loggedIn) {
		return res.status(403).json({ message: "You should log in!" });
	}

	const post = await PostModel.findOne({ _id: req.params.postId });

	if (post.postDislikedUsers.includes(req.session.user.id)) {
		return res.status(403).json({ message: "You already disliked this post!" });
	}

	if (post.postLikedUsers.includes(req.session.user.id)) {
		post.postLikedUsers.splice(
			post.postLikedUsers.findIndex(
				(dislikedUser) => req.session.user.id === dislikedUser
			),
			1
		);
		post.likesCount--;
	}
	post.postDislikedUsers.push(req.session.user.id);
	post.dislikesCount++;
	await post.save();
	res.status(200).json({ message: "Successfully disliked post" });
});

module.exports = router;
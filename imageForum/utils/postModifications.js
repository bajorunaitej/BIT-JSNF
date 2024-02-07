const PostModel = require('../models/post');
const UserModel = require('../models/user');

async function getPostWithAuthors() {
    const posts = await PostModel.find({});

    const modiefiedPosts = await Promise.all( 
        posts.map( async(post) => {
            const userId = post.authorId;
            const user = await UserModel.findOne({_id: userId});
            const modifiedPost = post.toObject();
            modifiedPost.author = user.username;
            return modifiedPost;
	    })
    );
    return modiefiedPosts;

};

module.exports = { getPostWithAuthors };
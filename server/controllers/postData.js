// database
const PostDB = require('../models/BlogPost')

module.exports = async (req, res) => {
    const post = await PostDB.findById(req.params.id)
    res.render("post", {
        title: "Blog post data for more details about the blog.",
        post
    })
}
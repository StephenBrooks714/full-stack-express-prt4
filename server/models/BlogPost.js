const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectPostSchema = new Schema ({
    title: String,
    id: String,
    image: String,
    body: String,
    datePosted: {
        type: Date,
        default: new Date()
    }
})

const ProjectPost = mongoose.model('ProjectPost', ProjectPostSchema);
module.exports = ProjectPost;
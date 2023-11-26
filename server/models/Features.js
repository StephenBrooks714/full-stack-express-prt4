const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FeaturePostSchema = new Schema ({
    title: String,
    image: String,
    url: String,
    feature: Array,
    datePosted: {
        type: Date,
        default: new Date()
    }
})

const FeaturePost = mongoose.model('FeaturePost', FeaturePostSchema);
module.exports = FeaturePost;
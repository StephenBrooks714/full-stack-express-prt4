const StorePostDB = require('../models/BlogPost');
const path = require('path');

module.exports = (req, res) => {
    let image = req.files.image;
    image.mv(path.resolve(__dirname, '..', '..', 'public/uploads', image.name), async (error) => {
        await StorePostDB.create({
            ...req.body,
            image: '/uploads/' + image.name
        })
        res.redirect('/blogs')
    })
}
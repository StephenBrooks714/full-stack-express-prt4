const StoreProjectsDB = require('../models/Projects');
const path = require('path');

module.exports = (req, res) => {
    let image = req.files.image;
    image.mv(path.resolve(__dirname, '..', '..', 'public/uploads', image.name), async (error) => {
        await StoreProjectsDB.create({
            ...req.body,
            image: '/uploads/' + image.name
        })
        res.redirect('/projects')
    })
}
const deleteFeatureDB = require("../models/Features");

module.exports = async (req, res) => {
    await deleteFeatureDB.findByIdAndDelete(req.params.id)
    res.redirect('/newFeature');
}
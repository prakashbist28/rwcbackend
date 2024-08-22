const Comic = require('../models/comicModel');

exports.getAllComics = async (req, res) => {
    const comics = await Comic.find();
    res.json({ comics });
};

exports.getComicById = async (req, res) => {
    try {
        const { id } = req.params;
        const comic = await Comic.findById(id);

        if (!comic) {
            return res.status(404).json({ message: 'Comic not found' });
        }
        res.json({ comic });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

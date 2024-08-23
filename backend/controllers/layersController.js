
const Layer = require('../models/layerModel')

// Get all layers
const getLayers = async (req, res) => {
    try {
        const layers = await Layer.find();
        res.json(layers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single layer by name
const getLayerByName = async (req, res) => {
    const layerName = req.params.name
    try {
        const layer = await Layer.findOne({ layer:layerName });
        if (!layer) {
            return res.status(404).json({ message: 'Layer not found' });
        }
        res.json(layer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create New layer

// delete Layer

// Update the layer


module.exports = {
    getLayers,
    getLayerByName
}

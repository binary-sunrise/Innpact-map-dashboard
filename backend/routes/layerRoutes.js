const express = require('express');
const router = express.Router();

const { getLayers, getLayerByName } = require('../controllers/layersController');

// Get All layers
router.get('/', getLayers);

// get a Single layer
router.get('/:name', getLayerByName);

// Create New layer

// Delete a layer

// Update a layer

module.exports = router;

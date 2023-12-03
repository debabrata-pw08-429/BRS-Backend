// brewery.controller.js
const Brewery = require("../models/brewery.model");

// Controller to get all breweries
exports.getAllBreweries = async (req, res) => {
  try {
    const breweries = await Brewery.find();
    res.json(breweries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller to create a new brewery
exports.createBrewery = async (req, res) => {
  try {
    const newBrewery = await Brewery.create(req.body);
    res.status(201).json(newBrewery);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller to get a particular brewery by ID
exports.getBreweryById = async (req, res) => {
  const breweryId = req.params.id;

  try {
    const brewery = await Brewery.findById(breweryId).populate("reviews");
    if (!brewery) {
      return res.status(404).json({ message: "Brewery not found" });
    }

    res.json(brewery);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller to update a particular brewery by ID
exports.updateBreweryById = async (req, res) => {
  const breweryId = req.params.id;

  try {
    const updatedBrewery = await Brewery.findByIdAndUpdate(
      breweryId,
      req.body,
      { new: true }
    );

    if (!updatedBrewery) {
      return res.status(404).json({ message: "Brewery not found" });
    }

    res.json(updatedBrewery);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

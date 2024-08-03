// controllers/affiliateController.js
const Affiliate = require("../models/affiliate");

const createAffiliate = async (req, res) => {
  try {
    const newAffiliate = new Affiliate(req.body);
    await newAffiliate.save();
    res.status(201).json(newAffiliate);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { createAffiliate };

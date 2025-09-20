// controllers/shortUrlController.js
const ShortUrl = require('../models/ShortUrl');
const { nanoid } = require('nanoid');


exports.createShortUrl = async (req, res) => {
  try {
    const { url, validity = 30, shortcode } = req.body;

    if (!url) {
      return res.status(400).json({ error: 'URL is required' });
    }

    // Check if provided shortcode already exists
    let code = shortcode;
    if (code) {
      const existing = await ShortUrl.findOne({ shortcode: code });
      if (existing) {
        return res.status(400).json({ error: 'Shortcode already exists' });
      }
    } else {
      // Generate unique shortcode
      let isUnique = false;
      while (!isUnique) {
        code = nanoid(6);
        const existing = await ShortUrl.findOne({ shortcode: code });
        if (!existing) isUnique = true;
      }
    }

    // Calculate expiry date
    const expiryDate = new Date(Date.now() + validity * 60 * 1000);

    // Save to DB
    const shortUrl = new ShortUrl({
      shortcode: code,
      originalUrl: url,
      expiry: expiryDate
    });

    await shortUrl.save();

    res.status(201).json({
      shortLink: `http://localhost:5173/${code}`,
      expiry: expiryDate.toISOString()
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

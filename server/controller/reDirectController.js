const ShortUrl = require("../models/ShortUrl");
const Click = require("../models/ClickStat");

// Redirect Controller
exports.redirectToOriginal = async (req, res) => {
  try {
    const { shortcode } = req.params;

    // 1. Find short URL
    const shortUrl = await ShortUrl.findOne({ shortcode });

    if (!shortUrl) {
      return res.status(404).json({ error: "Shortcode not found" });
    }

    // 2. Check expiry
    if (new Date() > shortUrl.expiry) {
      return res.status(410).json({ error: "Short link expired" }); // 410 Gone
    }

    // 3. Increment click count
    shortUrl.clicks += 1;
    await shortUrl.save();

    // 4. Log the click
    const referrer = req.get("Referer") || "direct";
    const ip = req.ip || req.connection.remoteAddress;

    const click = new Click({
      shortcode,
      referrer,
      ip,
      location: "unknown", // You can later integrate GeoIP lookup here
    });

    await click.save();

    // 5. Redirect to original URL
    return res.status(200).json({
        success:true,
        data:shortUrl.originalUrl
    });

  } catch (err) {
    console.error("Redirect error:", err);
    res.status(500).json({ error: "Server error" });
  }
};

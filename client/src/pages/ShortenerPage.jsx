import React, { useState } from "react";
import { TextField, Button, Grid, Paper, Typography, Box } from "@mui/material";
import axios from "axios";
import dayjs from "dayjs";

const ShortenerPage = () => {
  const [urls, setUrls] = useState([{ url: "", validity: "", shortcode: "" }]);
  const [results, setResults] = useState([]);
  const [errors, setErrors] = useState([]);

  const handleChange = (index, field, value) => {
    const newUrls = [...urls];
    newUrls[index][field] = value;
    setUrls(newUrls);
  };

  const addRow = () => {
    if (urls.length < 5) setUrls([...urls, { url: "", validity: "", shortcode: "" }]);
  };

  const removeRow = (index) => {
    const newUrls = urls.filter((_, i) => i !== index);
    setUrls(newUrls);
  };

  const validateUrl = (value) => {
    try {
      new URL(value);
      return true;
    } catch {
      return false;
    }
  };

  const handleSubmit = async () => {
    const newErrors = [];
    const newResults = [];

    for (let i = 0; i < urls.length; i++) {
      const { url, validity, shortcode } = urls[i];
      if (!url || !validateUrl(url)) {
        newErrors.push(`Row ${i + 1}: Invalid URL`);
        continue;
      }

      const payload = { url };
      if (validity) payload.validity = Number(validity);
      if (shortcode) payload.shortcode = shortcode;

      try {
        const res = await axios.post("http://localhost:4000/shorturls", payload);
        newResults.push(res.data);
      } catch (err) {
        newErrors.push(`Row ${i + 1}: ${err.response?.data?.error || "Server error"}`);
      }
    }

    setErrors(newErrors);
    setResults(newResults);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        URL Shortener
      </Typography>

      {urls.map((item, index) => (
        <Paper key={index} sx={{ padding: 2, marginBottom: 2 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={5}>
              <TextField
                fullWidth
                label="Original URL"
                value={item.url}
                onChange={(e) => handleChange(index, "url", e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                fullWidth
                label="Validity (minutes)"
                type="number"
                value={item.validity}
                onChange={(e) => handleChange(index, "validity", e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                fullWidth
                label="Preferred Shortcode"
                value={item.shortcode}
                onChange={(e) => handleChange(index, "shortcode", e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={1}>
              {urls.length > 1 && (
                <Button variant="outlined" color="error" onClick={() => removeRow(index)}>
                  X
                </Button>
              )}
            </Grid>
          </Grid>
        </Paper>
      ))}

      {urls.length < 5 && (
        <Button variant="contained" onClick={addRow} sx={{ marginBottom: 2 }}>
          Add URL
        </Button>
      )}

      <br />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Shorten URLs
      </Button>

      <Box sx={{ marginTop: 4 }}>
        {errors.map((err, i) => (
          <Typography key={i} color="error">
            {err}
          </Typography>
        ))}

        {results.map((res, i) => (
          <Paper key={i} sx={{ padding: 2, marginBottom: 2 }}>
            <Typography>
              Short Link:{" "}
              <a href={res.shortLink} target="_blank" rel="noopener noreferrer">
                {res.shortLink}
              </a>
            </Typography>
            <Typography>
              Expiry: {dayjs(res.expiry).format("YYYY-MM-DD HH:mm:ss")}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default ShortenerPage;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Paper, Typography, Box } from "@mui/material";
import dayjs from "dayjs";

const StatsPage = () => {
  const [stats, setStats] = useState([]);

  const fetchStats = async () => {
    try {
      const res = await axios.get("http://localhost:4000/shorturls"); 
      setStats(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        URL Statistics
      </Typography>

      {stats.map((item, i) => (
        <Paper key={i} sx={{ padding: 2, marginBottom: 2 }}>
          <Typography>
            Short Link: <a href={item.shortLink}>{item.shortLink}</a>
          </Typography>
          <Typography>
            Original URL: <a href={item.originalUrl}>{item.originalUrl}</a>
          </Typography>
          <Typography>
            Created At: {dayjs(item.createdAt).format("YYYY-MM-DD HH:mm:ss")}
          </Typography>
          <Typography>
            Expiry: {dayjs(item.expiry).format("YYYY-MM-DD HH:mm:ss")}
          </Typography>
          <Typography>Total Clicks: {item.clicks}</Typography>
          {item.clickDetails?.length > 0 && (
            <Box sx={{ marginTop: 1 }}>
              <Typography variant="subtitle2">Click Details:</Typography>
              {item.clickDetails.map((c, idx) => (
                <Typography key={idx}>
                  {dayjs(c.timestamp).format("YYYY-MM-DD HH:mm:ss")} | Source:{" "}
                  {c.referrer} | IP: {c.ip}
                </Typography>
              ))}
            </Box>
          )}
        </Paper>
      ))}
    </Box>
  );
};

export default StatsPage;

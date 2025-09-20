const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const shortUrlRoutes = require('./routes/shortUrlRoutes');
const redirectRoutes = require('./routes/redirectRoutes'); 

const router = express.Router();
const cors = require('cors'); // import cors



const app = express();
const PORT = process.env.PORT || 4000;
const MONGODB_URL = process.env.MONGODB_URL;
app.use(cors({
  origin: 'http://localhost:5173', 
  methods: ['GET','POST'],
  credentials: true
}));

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/', shortUrlRoutes);
app.use('/shorturls',redirectRoutes)

// DB Connection
mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB error:', err));

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});


// const express = require('express');
// const mongoose = require('mongoose');
// require('dotenv').config();

// const shortUrlRoutes = require('./routes/shortUrlRoutes');
// const redirectRoutes = require('./routes/redirectRoutes');

// const app = express();
// const PORT = process.env.PORT || 4000;
// const MONGODB_URL = process.env.MONGODB_URL;

// // Middleware
// app.use(express.json());

// // Routes
// app.use('/', shortUrlRoutes);    // POST /shorturls
// app.use('/', redirectRoutes);    // GET /:shortcode

// // DB Connection
// mongoose.connect(MONGODB_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('✅ MongoDB connected'))
// .catch(err => console.error('❌ MongoDB error:', err));

// // Start server
// app.listen(PORT, () => {
//   console.log(`🚀 Server running at http://localhost:${PORT}`);
// });

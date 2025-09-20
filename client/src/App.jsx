// // // import React from "react";
// // // import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// // // import ShortenerPage from "./pages/ShortenerPage";
// // // import StatsPage from "./pages/StatsPage";
// // // import { AppBar, Toolbar, Typography, Button } from "@mui/material";

// // // function App() {
// // //   return (
// // //     <Router>
// // //       <AppBar position="static">
// // //         <Toolbar>
// // //           <Typography variant="h6" sx={{ flexGrow: 1 }}>
// // //             URL Shortener
// // //           </Typography>
// // //           <Button color="inherit" component={Link} to="/">
// // //             Shorten URLs
// // //           </Button>
// // //           <Button color="inherit" component={Link} to="/stats">
// // //             Statistics
// // //           </Button>
// // //         </Toolbar>
// // //       </AppBar>

// // //       <Routes>
// // //         <Route path="/" element={<ShortenerPage />} />
// // //         <Route path="/stats" element={<StatsPage />} />
// // //       </Routes>
// // //     </Router>
// // //   );
// // // }

// // // export default App;


// // import React from "react";
// // import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// // import ShortenerPage from "./pages/ShortenerPage";
// // import StatsPage from "./pages/StatsPage";
// // import { AppBar, Toolbar, Typography, Button, Container, Box, Paper } from "@mui/material";

// // function App() {
// //   return (
// //     <Router>
// //       {/* Top Navigation */}
// //       <AppBar position="static">
// //         <Toolbar>
// //           <Typography variant="h6" sx={{ flexGrow: 1 }}>
// //             URL Shortener
// //           </Typography>
// //           <Button color="inherit" component={Link} to="/">
// //             Shorten URLs
// //           </Button>
// //           <Button color="inherit" component={Link} to="/stats">
// //             Statistics
// //           </Button>
// //         </Toolbar>
// //       </AppBar>

// //       {/* Main content */}
// //       <Container maxWidth="md" sx={{ marginTop: 4 }}>
// //         <Box
// //           sx={{
// //             display: "flex",
// //             flexDirection: "column",
// //             alignItems: "center", // horizontal center
// //             justifyContent: "center", // vertical center if minHeight set
// //             minHeight: "80vh",
// //           }}
// //         >
// //           {/* Optional paper wrapper for better look */}
// //           <Paper
// //             sx={{
// //               width: "100%",
// //               padding: 4,
// //               boxShadow: 3,
// //               borderRadius: 2,
// //               backgroundColor: "#f5f5f5",
// //             }}
// //           >
// //             <Routes>
// //               <Route path="/" element={<ShortenerPage />} />
// //               <Route path="/stats" element={<StatsPage />} />
// //             </Routes>
// //           </Paper>
// //         </Box>
// //       </Container>
// //     </Router>
// //   );
// // }

// // export default App;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import ShortenerPage from "./pages/ShortenerPage";
// import StatsPage from "./pages/StatsPage";
// import { AppBar, Toolbar, Typography, Button, Box, Paper } from "@mui/material";

// function App() {
//   return (
//     <Router>
//       {/* Top Navigation */}
//       <AppBar position="static">
//         <Toolbar>
//           <Typography variant="h6" sx={{ flexGrow: 1 }}>
//             URL Shortener
//           </Typography>
//           <Button color="inherit" component={Link} to="/">
//             Shorten URLs
//           </Button>
//           <Button color="inherit" component={Link} to="/stats">
//             Statistics
//           </Button>
//         </Toolbar>
//       </AppBar>

//       {/* Full screen Box to center content */}
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "center", // horizontal center
//           alignItems: "center", // vertical center
//           height: "calc(100vh - 64px)", // full viewport height minus AppBar
//           backgroundColor: "#e0e0e0",
//           padding: 2,
//         }}
//       >
//         <Paper
//           sx={{
//             width: "100%",
//             maxWidth: 600,
//             padding: 4,
//             boxShadow: 3,
//             borderRadius: 2,
//             backgroundColor: "#f5f5f5",
//           }}
//         >
//           <Routes>
//             <Route path="/" element={<ShortenerPage />} />
//             <Route path="/stats" element={<StatsPage />} />
//           </Routes>
//         </Paper>
//       </Box>
//     </Router>
//   );
// }

// export default App;


import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ShortenerPage from "./pages/ShortenerPage";
import StatsPage from "./pages/StatsPage";
import { AppBar, Toolbar, Typography, Button, Box, Paper } from "@mui/material";

function App() {
  return (
    <Router>
      {/* Top Navigation */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            URL Shortener
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Shorten URLs
          </Button>
          <Button color="inherit" component={Link} to="/stats">
            Statistics
          </Button>
        </Toolbar>
      </AppBar>

      {/* Main content horizontally centered */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center", // horizontal center
          marginTop: 4,            // some space below AppBar
          padding: 2,
        }}
      >
        <Paper
          sx={{
            width: "100%",
            maxWidth: 600,       // controls the card width
            padding: 4,
            boxShadow: 3,
            borderRadius: 2,
            backgroundColor: "#f5f5f5",
          }}
        >
          <Routes>
            <Route path="/" element={<ShortenerPage />} />
            <Route path="/stats" element={<StatsPage />} />
          </Routes>
        </Paper>
      </Box>
    </Router>
  );
}

export default App;

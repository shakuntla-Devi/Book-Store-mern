// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";

// import { ConnectDB } from "./Database/ConnectDB.js";
// import booksRoute from "./routes/booksRoute.js";

// dotenv.config(); // load .env variables

// const app = express();

// // Middleware
// app.use(cors({
//   origin: ["https://book-store-mern-livid-nine.vercel.app"], // frontend Vercel URL
//   methods: ["GET","POST","PUT","DELETE"],
// }));
// app.use(express.json());

// // Routes
// app.get("/", (req, res) => {
//   res.status(200).send("Welcome to MERN Stack Tutorial");
// });

// app.use("/books", booksRoute);

// // Start server after DB connection
// const PORT = process.env.PORT || 5555;

// ConnectDB()
//   .then(() => {
//     app.listen(PORT, () => {
//       console.log(`Server running on port ${PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.error("Database connection failed:", err);
//   });


import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { ConnectDB } from "./Database/ConnectDB.js";
import booksRoute from "./routes/booksRoute.js";

dotenv.config(); // load .env variables

const app = express();

// Middleware
app.use(cors({
  // origin: ["https://book-store-mern-livid-nine.vercel.app"], // frontend Vercel URL
 origin:["https://book-store-mern-17dy.vercel.app"],
  methods: ["GET","POST","PUT","DELETE"],
}));
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.status(200).send("Welcome to MERN Stack Tutorial");
});

app.use("/books", booksRoute);

// Start server after DB connection
const PORT = process.env.PORT || 5555;

ConnectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
  });
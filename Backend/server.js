require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const resumeRouter = require("./routes/resumeRoutes");
const collegeRouter = require("./routes/collegeRoutes");
const companyRouter = require("./routes/companyRoutes");
const contactRouter = require("./routes/contactRoutes");
const affiliateRoutes = require("./routes/affiliateRoutes");



const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // Serve static files from uploads directory

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error.message);
  });

// Use the resume router
app.use("/api/resumes", resumeRouter);

// Use the College Form Router
app.use("/api/colleges", collegeRouter);

// Use the Company Form Router
app.use("/api/company", companyRouter);

//use the contact us Router
app.use("/api",contactRouter);

//use the affiliate router
app.use("/api", affiliateRoutes);

// Default route for the root URL
app.get("/", (req, res) => {
  res.send("Welcome to TalentConnect API");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

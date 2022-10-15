// Import dependencies
import "dotenv/config";
import express from "express";
import asyncHandler from "express-async-handler";
import fs from "fs";

//Initialize express app
const app = express();
app.use(express.json());

// Set PORT
const PORT = process.env.PORT;

// CREATE queries
app.post(
  "/add-ingredient",
  asyncHandler(async (req, res, next) => {
    const food = req.body.name;
    console.log(food);
    const addFood = await fs.promises.appendFile("./db.json", food);
    if (addFood) {
      res.status(201).send();
    } else {
      res.status(400).send();
    }
  })
);

// READ queries
app.get(
  "/get-ingredient",
  asyncHandler(async (req, res) => {
    console.log("GET works");
  })
);

app.use((error, req, res, next) => {
  console.log(`Unhandled error ${error}, URL=${req.originalURL}, 
  method=${req.method}`);
  res.send("500 -- Server Error");
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}...`);
});

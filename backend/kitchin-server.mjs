// Import dependencies
import "dotenv/config";
import express from "express";
import asyncHandler from "express-async-handler";
import fs from "fs";

// Init express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

const PORT = process.env.PORT;

// Pifilling
app.post('/pifilling', asyncHandler( async(req, res) =>{
  res.status(201).json({Message: "message received."})
}))




app.post(
  "/add-ingredient",
  asyncHandler(async (req, res, next) => {
    const food = req.body.name;
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

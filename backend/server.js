const express = require("express");
const userRouter = require("./routes/routes");
const cors = require("cors");
const mongoose = require("mongoose");
const mongodbConfig = require("./config/mongodb.config")

//`mongodb+srv://annakurylo:1124@cluster0.lmf7oz9.mongodb.net/?retryWrites=true&w=majority`
//mongodbConfig.url


const port = process.env.NODE_DOCKER_PORT || 4000;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", userRouter);

const start = async () => {
  try {
    await mongoose.connect(
      mongodbConfig.url,
      { useUnifiedTopology: true, useNewUrlParser: true }
    );
    app.listen(port, () =>
      console.log(`Server running on port ${port}, http://localhost:${port}`)
    );
  } catch (e) {
    console.log(e);
  }
};

start();

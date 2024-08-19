const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
require('dotenv').config()


const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

mongoose
    .connect(
        process.env.MONGODB_URI, 

    )
    .then(() => {
        console.log('mongodb connected');
    })

app.use("/user", require("./controller/routeUpload"));

app.listen(PORT, () => {
  console.log(`listening at port : ${PORT}`);
});

























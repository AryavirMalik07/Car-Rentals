const mongoose = require("mongoose");
const DB = process.env.MONGO_LINK;
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log("database connected");
  });

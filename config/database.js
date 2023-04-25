const mongoose = require('mongoose');
require('dotenv').config();

const MONGODB_URL =
  'mongodb+srv://employee-review:CA61uqRFTJrzh9k4@cluster0.caivldt.mongodb.net/employee-reviews?retryWrites=true&w=majority';

exports.connect = () => {
  mongoose
    .connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log('DB CONNECTED SUCCESSFULLY'))
    .catch((err) => {
      console.log('DB CONNECTION FAILED');
      console.log(err);
      process.exit(1);
    });
};

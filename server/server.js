const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const helmet = require('helmet');

const app = express();
const port = process.env.PORT || 5000;

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// const autoIncrement = require('mongoose-auto-increment');

const connection = mongoose.connect('mongodb://localhost/legendsdb', { useNewUrlParser: true });

// autoIncrement.initialize(connection);
mongoose.connection.on("open", function () {
  console.log("mongodb is connected!!");
});

require('./routes')(app);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

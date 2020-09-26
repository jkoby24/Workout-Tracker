const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// connects mongoose to mongoDB Database
mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB successfully connected'))
  .catch((err) => console.log(err));

// routes
require('./routes/api-routes')(app);
require('./routes/html-routes.js')(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

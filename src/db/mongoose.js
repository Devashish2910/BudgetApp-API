// load mongoose
const mongoose = require('mongoose');

// set Promises because mongoose not support the promises
mongoose.Promise = global.Promise;

// set database according to the environment
const environment = process.env.NODE_ENV;

if(environment === 'production') {
  const heroku ='mongodb://devashish2910:deva2910@ds163672.mlab.com:63672/budgetapp';
  mongoose.connect(heroku);
} else {
  const local = 'mongodb://localhost:27017/budgetappdb';
  mongoose.connect(local);
}

// export
module.exports = {mongoose};

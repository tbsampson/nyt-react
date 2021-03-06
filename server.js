const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// static
app.use(express.static("client/build"));
// Add routes
app.use(routes);

// mongoose promises
mongoose.Promise = global.Promise;
// Connect to DB
/*
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/nytreactsaved",
  {
    useMongoClient: true
  }
);
*/
var db = "mongodb://localhost/nytreactsaved";

if(process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect(db, function(err){ 
    if(err){
      console.log(err);
    } else {
      console.log (`mongoose connected to ${db}` )
      useNewUrlParser: true;
    }
  })
}



// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

const express = require('express');
const app = express();
const db = require('./config/mongoose')
const bodyParser = require('body-parser');
// setting the view engine to ejs
app.set('view engine','ejs');
// setting the views directory 
app.set('views',__dirname+'/views');

// using body parser to parse the req body data
app.use(bodyParser.urlencoded({
    extended: true
  }));

app.use('/',require('./routes'));

app.listen(9000,function(){
    console.log("Server is running ")
})
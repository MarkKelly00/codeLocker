const express = require('express')
const mongoose = require('mongoose')
const routes = require("./routes")
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended:true }));
app.use(express.json());

if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
}

app.use(routes)

mongoose.connect('mongodb://localhost/codelocker',  { useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true } );

app.listen(PORT, ()=>{
    // eslint-disable-next-line no-console
    console.log(`App listening on PORT http://localhost:${PORT}`)
});

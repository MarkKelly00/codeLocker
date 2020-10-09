const express = require('express')
const mongoose = require('mongoose')
const routes = require("./routes")



const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended:true }));
app.use(express.json());

if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
}

app.use(routes)

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/codelocker",  { useNewUrlParser: true, useUnifiedTopology: true } );

app.listen(PORT, ()=>{
    // eslint-disable-next-line no-console
    console.log(`App listening on PORT http://localhost:${PORT}`)
});

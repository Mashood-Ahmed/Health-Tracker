const express = require("express");
const path =  require("path");
const session = require("express-session");
const bodyParser = require("body-parser");

const conn = require("./server");

const app = express();
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use(session({
    secret: 'hello world',
    resave: true,
    saveUninitialized: false,
    maxAge: 60*60*60
}));

conn();

app.use(express.static(path.join(__dirname, 'views')));
app.set('view engine', 'ejs');

app.use("/", require("./routes/"));

app.listen(3000, ()=> {
    console.log('Session running on port 3000');
});
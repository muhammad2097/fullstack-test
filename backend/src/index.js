var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors());

const ENDPOINT = "https://jsonplaceholder.typicode.com/users";

// var app = express();

// use as middleware
app.use(cors());

// call the endpoint GET
app.get("/api/users", (req, res) => {
    console.log(res);

    fetch(ENDPOINT)
    .then(result => result.json())
    .then(result => {
        // console.log(res);
        return res.json(result);
    })
    .catch(error => {
        console.log("fetch error ... ");
    })
    // res.json();
})

app.get(`/api/search`, (req, res) => {
    console.log(res);

    // fetch(ENDPOINT)
    // .then(res => res.json())
    // .then(res => {
    //     // console.log(res);
    //     res.json();
    // })
    // .catch(error => {
    //     console.log("fetch error ... ");
    // })
    // res.json();
})

// start the server at 3000
app.listen(3000, () => {
    console.log("started at 3000...");
})
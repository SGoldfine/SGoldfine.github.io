const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});


app.get("/api/jets", (req, res) => {
    const jets = [];
    jets[0] = {
        name: "Garrett Wilson",
        position: "Position: Wide Receiver",
        yearsInLeague: "2 years in NFL",
        age: "23 years old",
        teams: [
            "Lake Travis Cavaliers",
            "Ohio State Buckeyes",
            "New York Jets"
        ],
        img: "images/garrett.png"
    };
    jets[1] = {
        name: "Breece Hall",
        position: "Position: Running Back",
        yearsInLeague: "2 years in NFL",
        age: "22 years old",
        teams: [
            "Wichita Northwest Grizzlies",
            "Iowa State Cyclones",
            "New York Jets"
        ],
        img: "images/breece.png"
    };
    jets[2] = {
        name: "Quincy Williams",
        position: "Position: Linebacker",
        yearsInLeague: "5 years in NFL",
        age: "27 years old",
        teams: [
            "Wenonah Dragons",
            "Murray State Racers",
            "Jacksonville Jaguars",
            "New York Jets"
        ],
        img: "images/quincy.png"
    };
    jets[3] = {
        name: "Sauce Gardner",
        position: "Position: Cornerback",
        yearsInLeague: "2 years in NFL",
        age: "23 years old",
        teams: [
            "Martin Luther King Jr. Crusaders",
            "Cincinnati Bearcats",
            "New York Jets"
        ],
        img: "images/sauce.png"
    };
    jets[4] = {
        name: "Aaron Rodgers",
        position: "Position: Quarterback",
        yearsInLeague: "19 years in NFL",
        age: "39 years old",
        teams: [
            "Pleasant Valley Vikings",
            "California Golden Bears",
            "Green Bay Packers",
            "New York Jets"
        ],
        img: "images/arod.png"
    };
    res.json(jets);
});

app.listen(3000, () => {
    console.log("listening");
});
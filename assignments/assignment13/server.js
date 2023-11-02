const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});


app.get("/api/jets", (req, res) => {
    const jets = [];
    jets[0] = {
        name: "Sauce Gardner",
        number: "Number: 1",
        position: "Position: Cornerback",
        yearsInLeague: "2 years in NFL",
        teams: [
            "team 1",
            "team 2",
            "team 3"
        ]
    };
    jets[1] = {
        name: "Breece Hall",
        number: "Number: 20",
        position: "Position: Running Back",
        yearsInLeague: "2 years in NFL"

    };
    jets[2] = {
        name: "Garrett Wilson",
        number: "Number: 17",
        position: "Position: Wide Receiver",
        yearsInLeague: "2 years in NFL"

    };
    jets[3] = {
        name: "Aaron Rodgers",
        number: "Number: 8",
        position: "Position: Quarterback",
        yearsInLeague: "19 years in NFL"

    };
    jets[4] = {
        name: "Quincy Williams",
        number: "Number: 56",
        position: "Position: Linebacker",
        yearsInLeague: "5 years in NFL"

    };
    res.json(jets);
});

app.listen(3000, () => {
    console.log("listening");
});
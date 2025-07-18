const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
    res.json(
        [
            {
                id: 1,
                name: "Mujhaid",
                salary: 60000
            },

            {
                id: 2,
                name: "Huzaifa",
                salary: 70000
            },

            {
                id: 3,
                name: "Abdul",
                salary: 80000
            },

            {
                id: 4,
                name: "Salim",
                salary: 90000
            },

            {
                id: 5,
                name: "Abdul",
                salary: 10000
            },
        ]
    )
});

app.listen(port, () => {
    console.log("This app runn port no: 5000")
})
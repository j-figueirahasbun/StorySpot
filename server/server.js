const express = require('express');
const cors = require('cors');
const controller = require('./controller/controller')

const app = express();
const port = 5000;

app.use(cors({
    origin: `http://localhost:3000`,
}));

app.use(controller);

app.get("/api/hello", (req, res) => {
    res.send('Hello World!');
})

app.listen (port, () => {
    console.log(`Server started on port ${port}`)
})
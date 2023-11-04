import express from 'express';
import cors from 'cors';

// create express app
const app = express();

// set up the cors middleware
app.use(cors());

// set up the express app to handle data parsing
app.use(express.json());

// TODO: Add API paths for the backend here

// Set up the default route
app.get('/', (req, res) => {
    res.status(200).send(
        `<h1 style="text-align: center; margin-top: 20px;">Welcome to the AeroGenie API!</h1>`
    )
})

// set up the port that the server will run on
const PORT = process.env.PORT || 3002;

// listen on the port
// listen for requests
app.listen(PORT, () => {
    console.log(`🚀 Server is listening on port http://localhost:${PORT}`)
})
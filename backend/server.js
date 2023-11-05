import express from 'express';
import cors from 'cors';
import flightoffersRouter from './routes/flight-offers.js'
import predictionsRouter from './routes/predictions.js'
import recommendationsRouter from './routes/travel-recommendations.js'
import amadeuTestRouter from './routes/amadeu-test-api.js'

// create express app
const app = express();

// set up the cors middleware
app.use(cors());

// set up the express app to handle data parsing
app.use(express.json());

// flighht offers api 
app.use('/flight-offers', flightoffersRouter)

// predictions api
app.use('/predictions', predictionsRouter)

// travel-recommendations api
app.use('/travel-recommendations', recommendationsRouter)

// amadeu-test-api
app.use('/test', amadeuTestRouter)

// Set up the default route
app.get('/', (req, res) => {
    res.status(200).send(
        `<h1 style="text-align: center; margin-top: 20px;">Welcome to the AeroGenie API!</h1>`
    )
})

// set up the port that the server will run on
const PORT = process.env.PORT || 3005;

// listen for requests
app.listen(PORT, () => {
    console.log(`🚀 Server is listening on port http://localhost:${PORT}`)
})
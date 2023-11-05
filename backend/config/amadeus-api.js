import Amadeus from 'amadeus';

const config = {
    clientId: process.env.AMADEUS_CLIENT_ID,
    clientSecret: process.env.AMADEUS_CLIENT_SECRET,
};

// TODO: using the amadeus client requires a paid subscription. 
// For the purpose of this challenge, we will use the Bearer token method instead to get the data we need from the Amadeus API test environment.

// export const amadeus = new Amadeus(config);
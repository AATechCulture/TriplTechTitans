import dotenv from 'dotenv';

// Load environment variables from .env file
// This allows us to use process.env.VARIABLE_NAME to access the values of the environment variables defined in the .env file
dotenv.config(
    {
        path: '../.env'
    }
);
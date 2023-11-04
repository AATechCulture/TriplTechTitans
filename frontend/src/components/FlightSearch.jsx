import { useState } from "react";
// import "./FlightSearch.css";
import { TextField, Button, Typography, Box } from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./FlightSearch.css";

const FlightSearch = ({ searchFlights }) => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);

  const onInputChange = (e) => {
    switch (e.target.id) {
      case "origin":
        setOrigin(e.target.value);
        break;
      case "destination":
        setDestination(e.target.value);
        break;
      default:
        break;
    }
  };

  const validateInputs = () => {
    return origin && destination && departureDate && returnDate;
  };

  const onSearchFlights = () => {
    if (validateInputs()) {
      searchFlights(
        origin,
        destination,
        departureDate.format("YYYY-MM-DD"),
        returnDate.format("YYYY-MM-DD")
      );
    }
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Search for Routes
      </Typography>
      <div className="fs-container">
        <TextField
          id="origin"
          label="Origin"
          variant="outlined"
          value={origin}
          onChange={onInputChange}
        />
        <TextField
          id="destination"
          label="Destination"
          variant="outlined"
          value={destination}
          onChange={onInputChange}
        />
        <DatePicker
          placeholderText="Departure date"
          selected={departureDate}
          onChange={setDepartureDate}
        />
        <DatePicker
          placeholderText="Return date"
          selected={returnDate}
          onChange={setReturnDate}
        />
        <Button variant="contained" color="primary" onClick={onSearchFlights}>
          {"Search"}
        </Button>
      </div>
    </Box>
  );
};

export default FlightSearch;

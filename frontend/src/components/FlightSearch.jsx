import { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Grid,
  InputAdornment,
} from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./FlightSearch.css";
import PropTypes from "prop-types";

const FlightSearch = ({ searchFlights }) => {
  // const formatDate = (dateString) => {
  //   const date = new Date(dateString);
  //   const year = date.getFullYear();
  //   const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed in JavaScript
  //   const day = String(date.getDate()).padStart(2, "0");

  //   return `${year}-${month}-${day}`;
  // };

  const [formData, setFormData] = useState({
    origin: "",
    destination: "",
    departureDate: "",
    returnDate: "",
    numAdults: 1,
  });

  const onInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const onDateChange = (date, field) => {
    setFormData({
      ...formData,
      [field]: date,
    });
  };

  const validateInputs = () => {
    return (
      formData.origin &&
      formData.destination &&
      formData.departureDate &&
      formData.numAdults > 0
    );
  };

  const onSearchFlights = () => {
    searchFlights();
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Search for Routes
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          justifyItems: "center",
        }}
      >
        <Grid item xs={12} sm={2}>
          <TextField
            fullWidth
            id="origin"
            label="Origin"
            variant="outlined"
            value={formData.origin}
            onChange={onInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            fullWidth
            id="destination"
            label="Destination"
            variant="outlined"
            value={formData.destination}
            onChange={onInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <DatePicker
            selected={formData.departureDate}
            onChange={(date) => onDateChange(date, "departureDate")}
            placeholderText="Departure date"
            className="date-picker"
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <DatePicker
            selected={formData.returnDate}
            onChange={(date) => onDateChange(date, "returnDate")}
            placeholderText="Return date"
            className="date-picker"
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            fullWidth
            type="number"
            id="numAdults"
            label="Number of Adults"
            variant="outlined"
            value={formData.numAdults}
            onChange={onInputChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">Adults</InputAdornment>
              ),
              inputProps: { min: 1 },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={onSearchFlights}
            disabled={!validateInputs()}
          >
            {"Search"}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

FlightSearch.propTypes = {
  searchFlights: PropTypes.func.isRequired,
  setGettingFlightRoutes: PropTypes.func.isRequired,
  gettingFlightRoutes: PropTypes.bool.isRequired,
};

export default FlightSearch;

import { useState } from "react";
import { Select, MenuItem, Button, Box } from "@mui/material";
import PropTypes from "prop-types";

const CardSubtitle = ({ duration }) => {
  const [preference, setPreference] = useState("");

  const handleChange = (event) => {
    setPreference(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <div>Duration: {duration}</div>
      <Select
        value={preference}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem value="" disabled>
          Disruption Preferences
        </MenuItem>
        <MenuItem value={10}>Rebook</MenuItem>
        <MenuItem value={20}>Refund</MenuItem>
        <MenuItem value={30}>Other</MenuItem>
      </Select>
      <Button variant="contained" color="primary">
        Book Flight
      </Button>
    </Box>
  );
};

CardSubtitle.propTypes = {
  duration: PropTypes.string.isRequired,
};

export default CardSubtitle;

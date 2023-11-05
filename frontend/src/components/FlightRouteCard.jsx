import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { Chrono } from "react-chrono";

const FlightRouteCard = ({ flightRoute }) => {
  const { itineraries } = flightRoute;
  const { segments } = itineraries[0];

  const items = segments.map((segment) => ({
    title: segment.departure.at.split("T")[0],
    cardTitle: `Flight from ${segment.departure.iataCode} to ${segment.arrival.iataCode}`,
    cardSubtitle: `Duration: ${segment.duration}`,
  }));

  return (
    <Box>
      <Typography
        variant="h6"
        sx={{
          mb: 5,
        }}
      >
        Disruption Index: {"50%"}
      </Typography>
      <Chrono
        cardHeight={100}
        mediaHeight={100}
        contentDetailsHeight={50}
        readMore={true}
        items={items}
        mode="HORIZONTAL"
        slideShow
      />
    </Box>
  );
};

FlightRouteCard.propTypes = {
  flightRoute: PropTypes.object.isRequired,
};

export default FlightRouteCard;

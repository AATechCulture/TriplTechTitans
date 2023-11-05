import { Box, Chip } from "@mui/material";
import PropTypes from "prop-types";
import { Chrono } from "react-chrono";
import { getDisruptionColor } from "../../utilities/get-disruption-color";
import { getDisruptionIndex } from "../../utilities/get-disruption-index";
import CardSubtitle from "./CardSubTitle";

const FlightRouteCard = ({ flightRoute }) => {
  const { itineraries } = flightRoute;
  const { segments } = itineraries[0];

  const disruptionIndex = getDisruptionIndex();
  const disruptionColor = getDisruptionColor(disruptionIndex);

  const items = segments.map((segment) => ({
    title: segment.departure.at.split("T")[0],
    cardTitle: `Flight from ${segment.departure.iataCode} to ${segment.arrival.iataCode}`,
    cardSubtitle: <CardSubtitle duration={segment.duration} />,
  }));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        backgroundColor: "#f5f5f5",
        borderRadius: "10px",
      }}
    >
      <Chip
        label={`Disruption Index: ${disruptionIndex.toFixed(2)}%`}
        sx={{
          backgroundColor: disruptionColor,
          marginBottom: "10px",
          color: "black",
        }}
      />
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

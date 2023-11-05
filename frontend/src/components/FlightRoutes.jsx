import FlightRouteCard from "./FlightRouteCard";
import PropTypes from "prop-types";
import { Box, Grid, Typography } from "@mui/material";

const FlightRoutes = ({ flightRoutes }) => {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 5, mt: 3 }}>
        Flight Routes
      </Typography>
      {flightRoutes && flightRoutes.length > 0 ? (
        <Grid container spacing={5}>
          {flightRoutes.map((flightRoute) => (
            <Grid item xs={12} sm={6} md={3} key={flightRoute.id}>
              <FlightRouteCard flightRoute={flightRoute} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="subtitle1">No flight routes found.</Typography>
      )}
    </Box>
  );
};

FlightRoutes.propTypes = {
  flightRoutes: PropTypes.array.isRequired,
};

export default FlightRoutes;

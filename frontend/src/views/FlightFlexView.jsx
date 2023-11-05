import { Box, Grid, Typography } from "@mui/material";

import { Container } from "@mui/material";
import Activities from "../components/Activities";
import TravelRecommendations from "../components/TravelRecommendations";

const FlightFlexView = () => {
  const activities = [];

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Flight Flex
      </Typography>
      <Box sx={{ mb: 5 }}>
        <Typography variant="h6" sx={{ mb: 5 }}>
          Disrupted Flights 🛫
        </Typography>
        <Grid container spacing={3}>
          {/* TODO: Add users disrupted flights */}
        </Grid>
      </Box>
      <Box sx={{ mb: 5 }}>
        <TravelRecommendations />
        <Activities activities={activities} />
      </Box>
    </Container>
  );
};

export default FlightFlexView;

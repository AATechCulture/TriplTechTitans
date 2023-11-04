import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import FlightSearch from "../components/FlightSearch";
import TravelRecommendations from "../components/TravelRecommendations";

const IndexView = () => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Hi, Welcome back 👋
      </Typography>
      <FlightSearch />
      <TravelRecommendations />
    </Container>
  );
};

export default IndexView;

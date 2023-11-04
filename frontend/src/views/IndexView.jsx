import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import FlightSearch from "../components/FlightSearch";

const IndexView = () => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Hi, Welcome back 👋
      </Typography>
      <FlightSearch />
    </Container>
  );
};

export default IndexView;

import { Typography, Container } from "@mui/material";
import FlightRoutes from "../components/FlightRoutes";

const MyRoutesView = () => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Your Flight Routes 🛫
      </Typography>
      <FlightRoutes />
    </Container>
  );
};

export default MyRoutesView;

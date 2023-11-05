import { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import FlightSearch from "../components/FlightSearch";
import TravelRecommendations from "../components/TravelRecommendations";
import FlightRoutes from "../components/FlightRoutes";
import TestFlightRouterAPI from "../services/amadeu-test-api.js";
import MyRoutesView from "./MyRoutesView.jsx";

const IndexView = () => {
  const [flightRoutes, setFlightRoutes] = useState([]);
  const [gettingFlightRoutes, setGettingFlightRoutes] = useState(false);
  const [searched, setSearched] = useState(false);

  const searchFlights = () => {
    setGettingFlightRoutes(true);
    setSearched(true);
    TestFlightRouterAPI.getFlightOffers({})
      .then((response) => {
        setFlightRoutes(response.data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setGettingFlightRoutes(false);
      });
  };

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Hi John, Welcome back 👋
      </Typography>
      <FlightSearch searchFlights={searchFlights} />
      {!gettingFlightRoutes && searched && <MyRoutesView />}
      <TravelRecommendations />
    </Container>
  );
};

export default IndexView;

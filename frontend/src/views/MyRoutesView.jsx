import { useEffect, useState } from "react";
import { Typography, Container } from "@mui/material";
import FlightRoutes from "../components/FlightRoutes";
import TestFlightRouterAPI from "../services/amadeu-test-api.js";

const MyRoutesView = () => {
  const [flightRoutes, setFlightRoutes] = useState([]);

  useEffect(() => {
    const fetchFlightRoutes = async () => {
      try {
        const response = await TestFlightRouterAPI.getFlightOffers();
        setFlightRoutes(response.data.slice(0, 5));
      } catch (error) {
        console.log(error);
      }
    };
    fetchFlightRoutes();
  }, []);

  return (
    <Container maxWidth="xl">
      <FlightRoutes flightRoutes={flightRoutes} />
    </Container>
  );
};

export default MyRoutesView;

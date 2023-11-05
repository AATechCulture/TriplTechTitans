import FlightRouteCard from "./FlightRouteCard";
import PropTypes from "prop-types";
import { Box, Grid } from "@mui/material";

const FlightRoutes = ({
  flightRoutes = [
    {
      type: "flight-offer",
      id: "1",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: "2023-12-02",
      lastTicketingDateTime: "2023-12-02",
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: "PT28H15M",
          segments: [
            {
              departure: {
                iataCode: "SYD",
                terminal: "1",
                at: "2023-12-02T10:45:00",
              },
              arrival: {
                iataCode: "SGN",
                terminal: "2",
                at: "2023-12-02T15:30:00",
              },
              carrierCode: "QH",
              number: "87",
              aircraft: {
                code: "787",
              },
              operating: {
                carrierCode: "QH",
              },
              duration: "PT8H45M",
              id: "33",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "SGN",
                terminal: "2",
                at: "2023-12-03T09:25:00",
              },
              arrival: {
                iataCode: "BKK",
                at: "2023-12-03T11:00:00",
              },
              carrierCode: "QH",
              number: "325",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "QH",
              },
              duration: "PT1H35M",
              id: "34",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "EUR",
        total: "179.14",
        base: "60.00",
        fees: [
          {
            amount: "0.00",
            type: "SUPPLIER",
          },
          {
            amount: "0.00",
            type: "TICKETING",
          },
        ],
        grandTotal: "179.14",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["QH"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "EUR",
            total: "179.14",
            base: "60.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "33",
              cabin: "ECONOMY",
              fareBasis: "RLEOOWC",
              class: "R",
              includedCheckedBags: {
                weight: 45,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "34",
              cabin: "ECONOMY",
              fareBasis: "RLEOOWC",
              class: "R",
              includedCheckedBags: {
                weight: 45,
                weightUnit: "KG",
              },
            },
          ],
        },
      ],
    },
    {
      type: "flight-offer",
      id: "1",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: "2023-12-02",
      lastTicketingDateTime: "2023-12-02",
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: "PT28H15M",
          segments: [
            {
              departure: {
                iataCode: "SYD",
                terminal: "1",
                at: "2023-12-02T10:45:00",
              },
              arrival: {
                iataCode: "SGN",
                terminal: "2",
                at: "2023-12-02T15:30:00",
              },
              carrierCode: "QH",
              number: "87",
              aircraft: {
                code: "787",
              },
              operating: {
                carrierCode: "QH",
              },
              duration: "PT8H45M",
              id: "33",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "SGN",
                terminal: "2",
                at: "2023-12-03T09:25:00",
              },
              arrival: {
                iataCode: "BKK",
                at: "2023-12-03T11:00:00",
              },
              carrierCode: "QH",
              number: "325",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "QH",
              },
              duration: "PT1H35M",
              id: "34",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "EUR",
        total: "179.14",
        base: "60.00",
        fees: [
          {
            amount: "0.00",
            type: "SUPPLIER",
          },
          {
            amount: "0.00",
            type: "TICKETING",
          },
        ],
        grandTotal: "179.14",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["QH"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "EUR",
            total: "179.14",
            base: "60.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "33",
              cabin: "ECONOMY",
              fareBasis: "RLEOOWC",
              class: "R",
              includedCheckedBags: {
                weight: 45,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "34",
              cabin: "ECONOMY",
              fareBasis: "RLEOOWC",
              class: "R",
              includedCheckedBags: {
                weight: 45,
                weightUnit: "KG",
              },
            },
          ],
        },
      ],
    },
  ],
}) => {
  return (
    <Box>
      <Grid container spacing={5}>
        {flightRoutes.map((flightRoute) => (
          <Grid item xs={12} sm={6} md={3} key={flightRoute.id}>
            <FlightRouteCard flightRoute={flightRoute} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

FlightRoutes.propTypes = {
  flightRoutes: PropTypes.array.isRequired,
};

export default FlightRoutes;

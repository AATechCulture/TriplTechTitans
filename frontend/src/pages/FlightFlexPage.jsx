import { Helmet } from "react-helmet-async";

import FlightFlexView from "../views/FlightFlexView";

const FlightFlexPage = () => {
  return (
    <>
      <Helmet>
        <title> Flight Flex </title>
      </Helmet>

      <FlightFlexView />
    </>
  );
};

export default FlightFlexPage;

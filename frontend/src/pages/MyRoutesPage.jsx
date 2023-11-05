import { Helmet } from "react-helmet-async";

import MyRoutesView from "../views/MyRoutesView";

const MyRoutesPage = () => {
  return (
    <>
      <Helmet>
        <title> Flight Routes </title>
      </Helmet>

      <MyRoutesView />
    </>
  );
};

export default MyRoutesPage;

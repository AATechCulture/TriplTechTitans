import { Helmet } from "react-helmet-async";

import IndexView from "../views/IndexView";

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <title> RoutesSearch </title>
      </Helmet>

      <IndexView />
    </>
  );
};

export default IndexPage;

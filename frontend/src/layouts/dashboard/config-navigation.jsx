import SvgColor from "../../components/SvgColor";

const icon = (name) => <SvgColor src={``} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: "RouteSearch",
    path: "/",
    icon: icon("ic_home"),
  },
  {
    title: "MyRoutes",
    path: "/myroutes",
    icon: icon(""),
  },
  {
    title: "FlightFlex",
    path: "/flightflex",
    icon: icon("ic_cart"),
  },
  {
    title: "Bookmarks",
    path: "/bookmarks",
    icon: icon("ic_disabled"),
  },
];

export default navConfig;

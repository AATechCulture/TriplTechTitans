import { lazy, Suspense } from "react";
import { Outlet, useRoutes } from "react-router-dom";
import DashboardLayout from "../layouts/dashboard/DashboardLayout";

export const IndexPage = lazy(() => import("../pages/IndexPage"));
export const MyRoutesPage = lazy(() => import("../pages/MyRoutesPage"));
export const FlightFlexPage = lazy(() => import("../pages/FlightFlexPage"));
export const BookmarksPage = lazy(() => import("../pages/BookmarksPage"));

const AppContent = () => {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <IndexPage />, index: true },
        { element: <MyRoutesPage />, path: "/myroutes" },
        { element: <FlightFlexPage />, path: "/flightflex" },
        { element: <BookmarksPage />, path: "/bookmarks" },
      ],
    },
  ]);

  return routes;
};

export default AppContent;

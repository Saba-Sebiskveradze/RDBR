import routes from "../constants/routes";
import Home from "../pages/Home";
import Listingpage from "../pages/Listingpage"
import Addlisting from "../pages/Addlisting";
export const appRoutes = [
    {
        path: routes.home,
        Component: Home,
    },
    {
        path: routes.listingPage,
        Component: Listingpage,
    },
    {
        path: routes.addListing,
        Component: Addlisting,
    },

  ];
  
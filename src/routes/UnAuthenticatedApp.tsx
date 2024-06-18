import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Layout from "../components/Layout/Layout";
import { UnauthenticatedRoutePath } from "../constant/UnauthenticatedRoutePath";
import Products from "../components/Products/Products";
import Power from "../components/Products/ProductPower/Power";
import Seed from "../components/Products/ProductSeed/Seed";
import Hand from "../components/Products/ProductHand/Hand";

const UnAuthenticatedApp = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          element: <Home />,
          path: UnauthenticatedRoutePath.Home(),
          errorElement: <div>Error happend</div>,
          loader: () => <div>Loading</div>,
        },
        {
          element: <Products />,
          path: UnauthenticatedRoutePath.Product(),
          errorElement: <div>Error happend</div>,
          loader: () => <div>Loading</div>,
        },
        {
          element: <Power />,
          path: UnauthenticatedRoutePath.PowerTool(),
          errorElement: <div>Error happend 4555</div>,
          loader: () => <div>Loading</div>,
        },
        {
          element: <Seed />,
          path: UnauthenticatedRoutePath.Seed(),
          errorElement: <div>Error happend 4555</div>,
          loader: () => <div>Loading</div>,
        },
        {
          element: <Hand />,
          path: UnauthenticatedRoutePath.HandTool(),
          errorElement: <div>Error happend 4555</div>,
          loader: () => <div>Loading</div>,
        }
      ]
    }
])

export {UnAuthenticatedApp}
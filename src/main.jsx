import { AppContextProvider } from "./context/DbContext";
import { ChakraProvider } from "@chakra-ui/react";

import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./Layout/RootLayout";

// pages
import { EventPage } from "./pages/EventPage/EventPage";
import { EventsPage } from "./pages/EventsPage/EventsPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { FormPage } from "./pages/FormPage/FormPage";
import { UserPage } from "./pages/UserPage/UserPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        // loader: ,
      },
      {
        path: "/events",
        element: <EventsPage />,
        // loader: ,
      },
      {
        path: "/event/:eventId",
        element: <EventPage />,
        // loader: postLoader,
        // action: addComment,
      },
      {
        path: "/User",
        element: <UserPage />,
        // loader: ,
      },
      {
        path: "/form",
        element: <FormPage />,
        // loader: ,
      },
    ],
  },
]);
// @ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppContextProvider>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </AppContextProvider>
  </React.StrictMode>
);

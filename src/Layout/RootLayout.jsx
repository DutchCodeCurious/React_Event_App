import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import "./RootLayout.css";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
//import { useAppContext } from "../../context/DbContext";

export const RootLayout = () => {
  //const { users, loading } = useAppContext();
  return (
    <Box className="root-layout">
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
};

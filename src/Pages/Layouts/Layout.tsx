import React from "react";
import Header from "../../components/Header/Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { Box } from "@chakra-ui/react";
import { DottedSvgs } from "../../components/DottsSvg/Dotts";
import Home from "../../components/Home/Home";
const Layout = () => {
  const location = useLocation();
  return (
    <>
      <Header />
      <DottedSvgs />
      <Box
        textAlign="center"
        fontSize="xl"
        w={["90%", "85%", "80%"]}
        maxW={800}
        mx="auto"
      >
        <Box pt={10} pb={10}>
          {location.pathname === "/" ? <Home /> : <Outlet />}
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Layout;

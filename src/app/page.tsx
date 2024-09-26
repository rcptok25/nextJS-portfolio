"use client";
import { Box, useColorModeValue } from "@chakra-ui/react";
import theme from "./theme";
import Header from "@/components/Header";
import HomeContainer from "@/components/home-page/HomeContainer";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <>
      <Box
        p={4}
        bg={useColorModeValue(
          theme.colors.light.background,
          theme.colors.dark.background
        )}
        minHeight={"calc(100vh - 50px)"}
      >
        <Header />
        <HomeContainer />
      </Box>
      <Footer />
    </>
  );
};

export default HomePage;

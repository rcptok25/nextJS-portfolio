"use client";
import { Box, useColorModeValue } from "@chakra-ui/react";
import theme from "./theme";
import Header from "@/components/Header";
import HomeContainer from "@/components/home-page/HomeContainer";

const HomePage = () => {
  return (
    <Box
      p={4}
      bg={useColorModeValue(
        theme.colors.light.background,
        theme.colors.dark.background
      )}
      h={"100vh"}
    >
      <Header />
      <HomeContainer />
    </Box>
  );
};

export default HomePage;

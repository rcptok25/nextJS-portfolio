import { HStack } from "@chakra-ui/react";
import React from "react";
import HeroSection from "./HeroSection";
import theme from "@/app/theme";

const HomeContainer = () => {
  return (
    <HStack
      mt={5}
      w={"100%"}
      p={3}
      bg={theme.colors.transparent}
      justifyContent={"center"}
    >
      <HeroSection />
    </HStack>
  );
};

export default HomeContainer;

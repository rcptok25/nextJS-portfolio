"use client";
import { Stack } from "@chakra-ui/react";
import React from "react";
import HeroSection from "./HeroSection";
import theme from "@/app/theme";
import TabMenu from "./TabMenu/TabMenuContainer";

const HomeContainer = () => {
  return (
    <Stack
      mt={5}
      w={"100%"}
      minHeight={"100%"}
      p={3}
      bg={theme.colors.transparent}
      alignItems={"center"}
      pb={10}
    >
      <HeroSection />
      <TabMenu />
    </Stack>
  );
};

export default HomeContainer;

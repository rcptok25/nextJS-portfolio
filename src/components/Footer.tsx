"use client";
import theme from "@/app/theme";
import { useLanguage } from "@/context/LanguageContext";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <Box
      w={"100%"}
      h={"50px"}
      bg={useColorModeValue(
        theme.colors.lightMode.container,
        theme.colors.darkMode.container
      )}
      color={useColorModeValue(
        theme.colors.lightMode.title,
        theme.colors.darkMode.title
      )}
      bottom={0}
      left={0}
      right={0}
      zIndex={1}
    >
      <Text w={"100%"} textAlign={"center"} p={3}>
        {t("copyrigth")}
      </Text>
    </Box>
  );
};

export default Footer;

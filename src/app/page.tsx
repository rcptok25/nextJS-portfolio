"use client";
import {
  Button,
  Box,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import ColorModeSwitcher from "@/components/ColorModeSwitcher";
import { useLanguage } from "@/context/LanguageContext";
import theme from "./theme";

const HomePage = () => {
  const { t, changeLanguage, locale } = useLanguage();

  return (
    <Box
      p={4}
      bg={useColorModeValue(theme.colors.info, theme.colors.black)}
      h={"100vh"}
    >
      <ColorModeSwitcher />
      <Heading as="h1" mb={4}>
        {t("welcome")}
      </Heading>
      <Text mb={4}>{t("hello")}</Text>

      <Button colorScheme="blue" onClick={() => changeLanguage("en")} mr={2}>
        English
      </Button>
      <Button colorScheme="green" onClick={() => changeLanguage("tr")} mr={2}>
        Türkçe
      </Button>
      <Button colorScheme="red" onClick={() => changeLanguage("de")}>
        Deutsch
      </Button>

      <Text mt={4}>Current language: {locale}</Text>
    </Box>
  );
};

export default HomePage;

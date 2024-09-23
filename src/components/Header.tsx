import { Box, Heading, HStack, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import LanguageSelector from "./LanguageSelector";
import ColorModeSwitcher from "./ColorModeSwitcher";
import theme from "@/app/theme";
import { useLanguage } from "@/context/LanguageContext";

const Header = () => {
  const { t } = useLanguage();

  return (
    <HStack
      w={"100%"}
      h={"55px"}
      justifyContent={"space-between"}
      bg={useColorModeValue(
        theme.colors.lightMode.container,
        theme.colors.darkMode.container
      )}
      p={3}
      borderRadius={"md"}
    >
      <Heading
        as="h1"
        size="xl"
        color={useColorModeValue(
          theme.colors.lightMode.title,
          theme.colors.darkMode.title
        )}
      >
        {t("welcome")}
      </Heading>
      <Box>
        <ColorModeSwitcher />
        <LanguageSelector />
      </Box>
    </HStack>
  );
};

export default Header;

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorModeValue,
} from "@chakra-ui/react";
import { Languages } from "@/constants/const";

const LanguageSelector = () => {
  const { t, changeLanguage, locale } = useLanguage();

  return (
    <Menu>
      <MenuButton as={Button} colorScheme="blue" textTransform={"uppercase"}>
        {t(`${locale}`)}
      </MenuButton>
      <MenuList
        w={"100px"}
        whiteSpace="nowrap"
        color={useColorModeValue("black", "white")}
      >
        {Languages.map((lang) => (
          <MenuItem key={lang.value} onClick={() => changeLanguage(lang.value)}>
            {t(lang.key)}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default LanguageSelector;

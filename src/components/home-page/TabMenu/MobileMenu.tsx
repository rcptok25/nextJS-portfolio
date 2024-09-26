import theme from "@/app/theme";
import { TabMenuListItems } from "@/constants/const";
import { useLanguage } from "@/context/LanguageContext";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Menu,
  HStack,
  MenuButton,
  IconButton,
  Heading,
  useColorModeValue,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import React, { FC } from "react";

interface MobileMenuProps {
  tabIndex: number;
  setTabIndex: (index: number) => void;
}

const MobileMenu: FC<MobileMenuProps> = ({ tabIndex, setTabIndex }) => {
  const { t } = useLanguage();

  return (
    <Menu>
      <HStack>
        <MenuButton
          as={IconButton}
          icon={<HamburgerIcon />}
          variant="outline"
          aria-label="Options"
          mr={3}
        />
        <Heading
          size="md"
          color={useColorModeValue(
            theme.colors.lightMode.title,
            theme.colors.darkMode.title
          )}
        >
          {t(TabMenuListItems[tabIndex]?.key)}
        </Heading>
        <MenuList
          bg={useColorModeValue(
            theme.colors.light.background,
            theme.colors.dark.background
          )}
        >
          {TabMenuListItems?.map((item, index) => (
            <MenuItem
              key={item.key}
              onClick={() => setTabIndex(index)}
              bg={theme.colors.transparent}
              _hover={{
                bg: theme.colors.info,
              }}
            >
              {t(item.key)}
            </MenuItem>
          ))}
        </MenuList>
      </HStack>
    </Menu>
  );
};

export default MobileMenu;

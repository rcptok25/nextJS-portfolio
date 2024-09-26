import theme from "@/app/theme";
import { TabMenuListItems } from "@/constants/const";
import { useLanguage } from "@/context/LanguageContext";
import { Tab, TabList, Tabs, useColorModeValue } from "@chakra-ui/react";
import React, { useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Skills from "./Skills";
import { TabMenuKey } from "@/types/type";
import { useBreakpointValue } from "@chakra-ui/react";
import MobileMenu from "./MobileMenu";

const componentsMap: Record<TabMenuKey, JSX.Element> = {
  About: <About />,
  Contact: <Contact />,
  Experiences: <Experiences />,
  Projects: <Projects />,
  Skills: <Skills />,
};

const TabMenu = () => {
  const { t } = useLanguage();
  const [tabIndex, setTabIndex] = useState(0);
  const isMobile = useBreakpointValue({ base: true, xs: false });

  return (
    <Tabs
      bg={useColorModeValue(
        theme.colors.lightMode.container,
        theme.colors.darkMode.container
      )}
      color={useColorModeValue(
        theme.colors.lightMode.title,
        theme.colors.darkMode.title
      )}
      p={3}
      variant="enclosed"
      w={["100%", "500px", "600px", "700px", "70%"]}
    >
      {isMobile ? (
        <MobileMenu tabIndex={tabIndex} setTabIndex={setTabIndex} />
      ) : (
        <TabList border="none" justifyContent={"space-evenly"}>
          {TabMenuListItems?.map((item, index) => (
            <Tab
              key={item.key}
              _selected={{
                borderColor: theme.colors.darkMode.title,
                borderBottom: "none",
              }}
              onClick={() => setTabIndex(index)}
            >
              {t(item.key)}
            </Tab>
          ))}
        </TabList>
      )}
      {componentsMap[TabMenuListItems[tabIndex]?.value as TabMenuKey]}
    </Tabs>
  );
};

export default TabMenu;

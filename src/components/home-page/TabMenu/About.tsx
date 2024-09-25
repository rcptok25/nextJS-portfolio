import { useLanguage } from "@/context/LanguageContext";
import { Heading, HStack, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { FaMapMarker } from "react-icons/fa";

const About = () => {
  const { t } = useLanguage();

  return (
    <HStack p={2} justifyContent={"space-between"}>
      <Stack w={"calc(100% - 250px)"}>
        <Heading>{t("about")}</Heading>
        <Stack mt={2}>
          <Text>{t("about_paragraph_one")}</Text>
          <HStack>
            <FaMapMarker />
            <Text> Altıeylül, Balıkesir</Text>
          </HStack>
        </Stack>
      </Stack>
      <Image
        src="https://via.placeholder.com/150"
        alt="about"
        w={"200px"}
        h={"200px"}
        mt={10}
      />
    </HStack>
  );
};

export default About;

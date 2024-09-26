import { useLanguage } from "@/context/LanguageContext";
import { Grid, Heading, HStack, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { FaMapMarker } from "react-icons/fa";

const About = () => {
  const { t } = useLanguage();

  return (
    <Stack p={2} justifyContent={"space-between"}>
      <Heading>{t("about")}</Heading>
      <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}>
        <Stack mt={2}>
          <Text>{t("about_paragraph_one")}</Text>
          <HStack>
            <FaMapMarker />
            <Text> Altıeylül, Balıkesir</Text>
          </HStack>
        </Stack>
        <Image
          src="https://via.placeholder.com/150"
          alt="about"
          w={"200px"}
          h={"200px"}
          mt={10}
          justifySelf={{ base: "center", md: "end" }}
        />
      </Grid>
    </Stack>
  );
};

export default About;

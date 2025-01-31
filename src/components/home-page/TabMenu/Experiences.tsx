import { experiences } from "@/constants/about-me";
import { useLanguage } from "@/context/LanguageContext";
import { Stack, Heading, Text, Grid, GridItem, HStack } from "@chakra-ui/react";
import React from "react";
import { FaMapMarker } from "react-icons/fa";

const Experiences = () => {
  const { t } = useLanguage();

  return (
    <Stack p={2} justifyContent={"space-between"}>
      <Heading>{t("experiences")}</Heading>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gap={4}
        mt={5}
      >
        {experiences?.map((experience) => (
          <GridItem key={experience.key} mt={2}>
            <Stack>
              <Heading as="h4" size="md">
                {t(experience.company)}
              </Heading>
              <HStack>
                <FaMapMarker />
                <Text> {t(experience.location)}</Text>
              </HStack>
              <Text>{t(experience.role)}</Text>
              <Text>{t(experience.date)}</Text>
              <Text>{t(experience.description_key)}</Text>
            </Stack>
          </GridItem>
        ))}
      </Grid>
    </Stack>
  );
};

export default Experiences;

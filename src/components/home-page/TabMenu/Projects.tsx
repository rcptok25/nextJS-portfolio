import theme from "@/app/theme";
import { useLanguage } from "@/context/LanguageContext";
import { Heading, Stack } from "@chakra-ui/react";
import React from "react";

const Projects = () => {
  const { t } = useLanguage();

  return (
    <Stack p={2} justifyContent={"space-between"}>
      <Heading>{t("projects")}</Heading>
      <Heading
        size="md"
        mt={5}
        textAlign={"center"}
        w={"100%"}
        color={theme.colors.error}
      >
        {t("coming_soon")}
      </Heading>
    </Stack>
  );
};

export default Projects;

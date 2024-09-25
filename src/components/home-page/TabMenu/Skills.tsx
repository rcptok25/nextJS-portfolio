import { skills } from "@/constants/about-me";
import { useLanguage } from "@/context/LanguageContext";
import { Stack, Heading, Text, Flex } from "@chakra-ui/react";
import React from "react";

const Skills = () => {
  const { t } = useLanguage();

  return (
    <Stack p={2} justifyContent={"space-between"}>
      <Heading>{t("skills")}</Heading>
      <Flex mt={5} gap={3} wordBreak={"inherit"} flexWrap="wrap">
        {skills?.map((skill, index) => (
          <Text key={index}>{skill}</Text>
        ))}
      </Flex>
    </Stack>
  );
};

export default Skills;

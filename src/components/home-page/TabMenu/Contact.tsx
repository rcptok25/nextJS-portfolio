import { useLanguage } from "@/context/LanguageContext";
import { HStack, Stack, Heading, Text, Image } from "@chakra-ui/react";
import React from "react";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <HStack p={2} justifyContent={"space-between"}>
      <Stack w={"calc(100% - 250px)"}>
        <Heading>{t("contact")}</Heading>
        <Stack mt={2}>
          <Text>{t("about_paragraph_one1")}</Text>
        </Stack>
      </Stack>
      <Image
        src="https://via.placeholder.com/150"
        alt="contact"
        w={"200px"}
        h={"200px"}
        mt={20}
      />
    </HStack>
  );
};

export default Contact;

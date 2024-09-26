import RFFInput from "@/components/forms/RFFInput";
import RFFSelect from "@/components/forms/RFFSelect";
import RFFTextarea from "@/components/forms/RFFTextArea";
import { contactTypeOptions } from "@/constants/const";
import { useLanguage } from "@/context/LanguageContext";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  Stack,
  Heading,
  Button,
  Box,
  Grid,
  GridItem,
  HStack,
  Text,
} from "@chakra-ui/react";
import React, { useCallback, useMemo } from "react";
import { Form } from "react-final-form";
import { FaMapMarker } from "react-icons/fa";

const Contact = () => {
  const { t } = useLanguage();

  const langContactTypeOptions = useMemo(
    () =>
      contactTypeOptions?.map((option) => ({
        ...option,
        label: t(option.key),
      })),
    [t]
  );

  const onSubmit = useCallback(() => {}, []);

  return (
    <Stack p={2} justifyContent={"space-between"}>
      <Heading>{t("contact")}</Heading>
      <Grid
        templateColumns={{ base: "1fr", xs: "repeat(2, 1fr)" }}
        gap={4}
        mt={5}
      >
        <GridItem height="100%">
          <Stack justifyContent="center" height="80%" gap={10} pl={5}>
            <Stack>
              <HStack>
                <EmailIcon />
                <Text>{t("email")}</Text>
              </HStack>
              <Text
                onClick={() =>
                  window.open("mailto:rcptok25@gmail.com", "_blank")
                }
              >
                rcptok25@gmail.com
              </Text>
            </Stack>

            <Stack>
              <HStack>
                <PhoneIcon />
                <Text>{t("phone_number")}</Text>
              </HStack>
              <Text
                onClick={() =>
                  window.open("mailto:rcptok25@gmail.com", "_blank")
                }
              >
                +90 545 723 40 96
              </Text>
            </Stack>

            <Stack>
              <HStack>
                <FaMapMarker />
                <Text>{t("location")}</Text>
              </HStack>
              <Text>{t("education_location")}</Text>
            </Stack>
          </Stack>
        </GridItem>

        <GridItem justifyContent="space-between" height="100%">
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <RFFInput name="full_name" label={t("full_name")} />
                <RFFInput
                  name="phone_number"
                  label={t("phone_number")}
                  labelStyle={{
                    mt: 3,
                  }}
                />

                <RFFInput
                  type="email"
                  name="email"
                  label={t("email")}
                  labelStyle={{
                    mt: 3,
                  }}
                />
                <RFFSelect
                  name="contact_type"
                  label={t("contact_type")}
                  options={langContactTypeOptions}
                  labelStyle={{
                    mt: 3,
                  }}
                />

                <RFFTextarea
                  name="description"
                  label={t("description")}
                  labelStyle={{
                    mt: 3,
                  }}
                />

                <Box textAlign="center" mt="auto">
                  <Button type="submit" mt={3} colorScheme="blue">
                    {t("send_contact")}
                  </Button>
                </Box>
              </form>
            )}
          />
        </GridItem>
      </Grid>
    </Stack>
  );
};

export default Contact;

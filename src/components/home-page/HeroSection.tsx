import theme from "@/app/theme";
import {
  Button,
  Center,
  Divider,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import Avatar from "@/assets/img/avatar.webp";
import { useLanguage } from "@/context/LanguageContext";
import {
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaStackOverflow,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <HStack
      w={["100%", "500px", "600px", "700px", "70%"]}
      h={["350px", "200px"]}
      p={3}
      bg={useColorModeValue(
        theme.colors.lightMode.container,
        theme.colors.darkMode.container
      )}
      color={useColorModeValue(
        theme.colors.lightMode.title,
        theme.colors.darkMode.title
      )}
      justifyContent={"space-between"}
      borderRadius={"md"}
      flexDirection={["column", "row", "row", "row", "row"]}
    >
      <HStack
        w={["100%", "calc(100% - 150px)"]}
        flexDirection={["column", "row", "row", "row", "row"]}
      >
        <Image src={Avatar.src} alt="hero" w={"150px"} h={"150px"} mr={3} />
        <Stack>
          <Heading as="h1" size="xl">
            Recep TOK
          </Heading>
          <Text>Front-end Developer</Text>
          <HStack
            justifyContent={"space-between"}
            maxW={"150px"}
            color={useColorModeValue(
              theme.colors.lightMode.title,
              theme.colors.darkMode.title
            )}
          >
            <FaGithub
              onClick={() =>
                window.open("https://github.com/rcptok25", "_blank")
              }
            />
            <FaMedium
              onClick={() =>
                window.open("https://medium.com/@rcptok25", "_blank")
              }
            />
            <FaStackOverflow
              onClick={() =>
                window.open(
                  "https://stackoverflow.com/users/27419847/recep-tok",
                  "_blank"
                )
              }
            />
            <FaLinkedin
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/recep-tok-757a17188/",
                  "_blank"
                )
              }
            />
          </HStack>
        </Stack>
      </HStack>
      <HStack w={"190px"} justifyContent={"center"}>
        <Center height="50px" mr={5} display={["none", "block"]}>
          <Divider orientation="vertical" />
        </Center>
        <Button
          w={"170px"}
          bg={useColorModeValue(
            theme.colors.darkMode.container,
            theme.colors.lightMode.container
          )}
          color={useColorModeValue(
            theme.colors.darkMode.title,
            theme.colors.lightMode.title
          )}
          p={3}
          onClick={() => window.open("mailto:rcptok25@gmail.com", "_blank")}
          textTransform={"capitalize"}
          gap={1}
        >
          <MdEmail height={10} />
          {t("contact_me")}
        </Button>
      </HStack>
    </HStack>
  );
};

export default HeroSection;

import theme from "@/app/theme";
import { useLanguage } from "@/context/LanguageContext";
import { Text } from "@chakra-ui/react";
import React, { FunctionComponent } from "react";

type FormErrorTextProps = {
  children?: string;
};
const FormErrorText: FunctionComponent<FormErrorTextProps> = ({ children }) => {
  const { t } = useLanguage();

  return (
    <Text color={theme.colors.error} mt={1} wordBreak={"break-word"}>
      {children ? t(children) : t("required_field")}
    </Text>
  );
};
export default FormErrorText;

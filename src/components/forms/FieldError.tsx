import React, { FC } from "react";
import { SystemCSSProperties, Text } from "@chakra-ui/react";
import theme from "@/app/theme";

interface FieldErrorProps {
  className?: string;
  sx?: SystemCSSProperties;
  children?: JSX.Element | JSX.Element[] | string | string[];
}

const FieldError: FC<FieldErrorProps> = ({ className, sx, children }) => {
  return (
    <Text
      className={className}
      sx={{
        fontSize: "0.8rem",
        color: theme.colors.error,
        ...sx,
      }}
    >
      {children}
    </Text>
  );
};

export default FieldError;

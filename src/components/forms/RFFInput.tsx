import React, { FC, useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  FormErrorMessage,
  SystemCSSProperties,
} from "@chakra-ui/react";
import { Field } from "react-final-form";

interface FormInputProps {
  id?: string;
  name: string;
  type?: string;
  label: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  placeholder?: string;
  labelStyle?: SystemCSSProperties;
}

const RFFInput: FC<FormInputProps> = ({
  id,
  name,
  type = "text",
  label,
  leftIcon,
  rightIcon,
  placeholder,
  labelStyle,
}) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  return (
    <Field name={name}>
      {({ input, meta }) => (
        <FormControl isInvalid={meta.touched && meta.error}>
          <FormLabel htmlFor={id || name} sx={labelStyle}>
            {label}
          </FormLabel>
          <InputGroup>
            {leftIcon && <InputLeftElement>{leftIcon}</InputLeftElement>}
            <Input
              {...input}
              id={id || name}
              type={
                type === "password" && !isPasswordVisible ? "password" : type
              }
              placeholder={placeholder}
            />
            {type === "password" ? (
              <InputRightElement
                onClick={() => setPasswordVisible(!isPasswordVisible)}
              >
                {isPasswordVisible ? "Hide" : "Show"}
              </InputRightElement>
            ) : (
              rightIcon && <InputRightElement>{rightIcon}</InputRightElement>
            )}
          </InputGroup>
          {meta.touched && meta.error && (
            <FormErrorMessage>{meta.error}</FormErrorMessage>
          )}
        </FormControl>
      )}
    </Field>
  );
};

export default RFFInput;

import React, { forwardRef, WheelEvent } from "react";
import {
  Box,
  Flex,
  Input as ChakraInput,
  InputProps,
  SystemCSSProperties,
  FormLabel,
} from "@chakra-ui/react";
import FieldError from "./FieldError";
import theme from "@/app/theme";

interface Props extends Partial<InputProps> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  readOnly?: boolean;
  customStyle?: React.CSSProperties;
  opacityValue?: number;
  inputId?: string;
  value?: string | number | readonly string[];
  max?: number;
  min?: number;
  maxLength?: number;
  minLength?: number;
  hasMultipleErrors?: boolean;
  errorPrefix?: string;
  hasRightIcon?: boolean;
  inputKey?: number | string;
  labelStyle?: SystemCSSProperties;
  type?: string;
}

const Input = forwardRef((props: Props, ref: React.Ref<HTMLInputElement>) => {
  const {
    label,
    error,
    icon,
    readOnly = false,
    customStyle,
    opacityValue,
    inputId,
    value,
    max,
    min,
    maxLength,
    minLength,
    hasMultipleErrors,
    errorPrefix,
    hasRightIcon,
    labelStyle,
    type,
    onChange,
    ...rest
  } = props;

  return (
    <Box
      sx={{
        display: "block",
        width: "100%",
        backgroundColor: theme.colors.transparent,
      }}
    >
      <Box
        sx={{
          paddingRight: hasRightIcon ? "40px" : "",
          borderColor: error ? theme.colors.red : theme.colors.lightgrey,
          border: "2px solid",
          borderRadius: "0.375rem",
          backgroundColor: theme.colors.transparent,
        }}
      >
        {label && (
          <Flex
            sx={{
              alignItems: "center",
              marginBottom: "xs",
            }}
          >
            <Flex
              sx={{
                marginBottom: "xs",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {icon && icon}
              <FormLabel
                sx={{
                  fontWeight: "lighter",
                  fontSize: "default",
                  marginLeft: "xs",
                  color: theme.colors.tabGray,
                  ...labelStyle,
                }}
                htmlFor={inputId}
              >
                {label}
              </FormLabel>
            </Flex>
          </Flex>
        )}
        <ChakraInput
          sx={{
            opacity: opacityValue,
          }}
          id={inputId}
          style={customStyle}
          autoComplete="off"
          readOnly={readOnly}
          value={value}
          max={max}
          min={min}
          maxLength={maxLength}
          minLength={minLength}
          ref={ref}
          type={type}
          {...rest}
          onChange={onChange}
          onWheel={(event: WheelEvent<HTMLInputElement>) => {
            if (type === "number") {
              event.preventDefault();
              (event.target as HTMLInputElement).blur();
            }
          }}
        />
      </Box>
      {error && hasMultipleErrors && errorPrefix && (
        <>
          <b>{errorPrefix}:</b>
          <br />
        </>
      )}
      {error &&
        hasMultipleErrors &&
        Array.isArray(error) &&
        error.map((value, index) => (
          <FieldError className="error" key={index}>
            <>{`- ${value}`}</>
            <br />
          </FieldError>
        ))}
      {error && !hasMultipleErrors && (
        <FieldError className="error">{error}</FieldError>
      )}
    </Box>
  );
});

Input.displayName = "Input";

export default Input;

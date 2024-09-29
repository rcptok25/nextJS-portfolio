import React, { CSSProperties, FC, ReactElement } from "react";
import { Field } from "react-final-form";
import {
  Box,
  FormLabel,
  SystemCSSProperties,
  Textarea,
} from "@chakra-ui/react";
import FieldError from "./FieldError";
import theme from "@/app/theme";

interface Props {
  name: string;
  label: ReactElement | string;
  placeholder?: string;
  readOnly?: boolean;
  style?: CSSProperties;
  required?: string;
  maxLength?: number;
  minLength?: number;
  labelStyle?: SystemCSSProperties;
  id?: string;
  maxHeight?: string | number;
}

const RFFTextarea: FC<Props> = ({
  name,
  label,
  placeholder,
  readOnly,
  style,
  required,
  maxLength,
  minLength,
  labelStyle,
  id,
  maxHeight,
  ...props
}) => {
  return (
    <Field
      name={name}
      validate={(e) => (!e ? required : undefined)}
      render={({ input, meta }) => {
        return (
          <Box sx={{ position: "relative" }}>
            <FormLabel htmlFor={id || name} sx={labelStyle}>
              {label}
            </FormLabel>
            <Textarea
              placeholder={placeholder}
              disabled={readOnly}
              maxLength={maxLength}
              minLength={minLength}
              sx={{
                maxHeight: maxHeight || "200px",
                ...style,
                cursor: readOnly ? "not-allowed" : "pointer",
                backgroundColor: readOnly && theme.colors.lightgrey,
              }}
              {...input}
              autoComplete="off"
            />
            {meta.touched && meta.submitFailed && meta.error && (
              <FieldError
                sx={{ position: "absolute", bottom: "-18px", left: 0 }}
              >
                {meta.error || meta.submitError}
              </FieldError>
            )}
          </Box>
        );
      }}
      {...props}
    />
  );
};

export default RFFTextarea;

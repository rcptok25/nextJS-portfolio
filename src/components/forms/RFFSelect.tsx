import React, { CSSProperties, FC } from "react";
import { Field } from "react-final-form";
import {
  Box,
  Text,
  SystemCSSProperties,
  useColorModeValue,
} from "@chakra-ui/react";
import Select, { MenuPlacement, ActionMeta } from "react-select";
import { IDefaultSelectOptions } from "@/types/type";
import { useLanguage } from "@/context/LanguageContext";
import FieldError from "./FieldError";
import theme from "@/app/theme";

interface RFFSelectProps {
  name: string;
  options: IDefaultSelectOptions[];
  onChange?: (
    newValue?: IDefaultSelectOptions,
    actionMeta?: ActionMeta<object>
  ) => void;
  defaultValue?: IDefaultSelectOptions;
  value?: IDefaultSelectOptions;
  label?: string;
  isDisabled?: boolean;
  required?: string;
  menuPlacement?: MenuPlacement;
  style?: CSSProperties;
  placeholder?: string | JSX.Element;
  containerStyle?: SystemCSSProperties;
  labelStyle?: SystemCSSProperties;
}

const RFFSelect: FC<RFFSelectProps> = ({
  name,
  options,
  onChange,
  defaultValue,
  value,
  label,
  isDisabled,
  required,
  style,
  placeholder,
  menuPlacement,
  containerStyle,
  labelStyle,
  ...props
}) => {
  const { t } = useLanguage();
  const selectColors = {
    backgroundColor: useColorModeValue(
      theme.colors.light.background,
      theme.colors.dark.background
    ),
    color: useColorModeValue(
      theme.colors.lightMode.title,
      theme.colors.darkMode.title
    ),
  };
  return (
    <Field
      name={name}
      defaultValue={defaultValue}
      validate={(e) => (required && !e ? required : undefined)}
    >
      {({ input, meta }) => {
        const error =
          meta.touched && meta.submitFailed && meta.error
            ? meta.error
            : meta.submitError;

        if (defaultValue && !input.value) {
          input.onChange(defaultValue);
        }

        return (
          <Box sx={{ width: "100%", ...containerStyle }}>
            {label && (
              <Text sx={{ marginBottom: 1, ...labelStyle }}>{label}</Text>
            )}
            <Select
              name={name}
              value={value || input.value || defaultValue}
              options={options}
              styles={{
                control: (provided) => ({
                  ...provided,
                  ...style,
                  backgroundColor: theme.colors.transparent,
                  color: selectColors.color,
                }),
                option: (provided) => ({
                  ...provided,
                  backgroundColor: selectColors.backgroundColor,
                  color: selectColors.color,
                }),
                menu: (provided) => ({
                  ...provided,
                  backgroundColor: selectColors.backgroundColor,
                  color: selectColors.color,
                }),
                singleValue: (provided) => ({
                  ...provided,
                  color: selectColors.color,
                }),
              }}
              onChange={(data) => {
                input.onChange(data);
                if (onChange && data !== null) {
                  onChange(data);
                }
              }}
              isDisabled={isDisabled}
              placeholder={placeholder ?? t("select")}
              menuPlacement={menuPlacement}
              {...props}
            />
            {error && <FieldError>{error}</FieldError>}
          </Box>
        );
      }}
    </Field>
  );
};

export default RFFSelect;

export type TabMenuKey =
  | "About"
  | "Contact"
  | "Experiences"
  | "Projects"
  | "Skills";

export interface IDefaultSelectOptions<
  T = string | number | boolean,
  S = string | React.JSX.Element
> {
  url?: string;
  value: T;
  label: S;
  key?: string;
}

export type ContactRequestType = {
  full_name: string;
  phone_number: string;
  email: string;
  contact_type: string;
  description: string;
  contact_type_option?: IDefaultSelectOptions;
};

export type SMTPTransporterType = {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
};

export type RequestErrorType = {
  message: string;
  status?: number;
};

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

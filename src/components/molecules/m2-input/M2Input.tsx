import { FunctionComponent, HTMLInputTypeAttribute } from "react";

type M2InputProps = {
  label: string;
  name: string;
  value: string;
  type: HTMLInputTypeAttribute;
  onChange: (value: HTMLInputElement["value"]) => void;
};

const M2Input: FunctionComponent<M2InputProps> = ({
  label,
  name,
  value,
  type,
  onChange,
}) => (
  <label htmlFor={name}>
    {label}
    <input
      type={type}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  </label>
);

export default M2Input;

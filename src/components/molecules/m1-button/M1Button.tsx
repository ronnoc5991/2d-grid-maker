import { FunctionComponent } from "react";
import "./styles.css";

type M1ButtonProps = {
  label?: string;
  title?: string;
  onClick: () => void;
};

const M1Button: FunctionComponent<M1ButtonProps> = ({
  label,
  title,
  onClick,
}) => (
  <button className="button" onClick={onClick} title={title}>
    {label}
  </button>
);

export default M1Button;

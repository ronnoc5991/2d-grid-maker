import { FunctionComponent } from "react";
import "./styles.css";

type O1ToolbarProps = {
  position: "top" | "right" | "bottom" | "left";
  children?: React.ReactNode;
};

const O1Toolbar: FunctionComponent<O1ToolbarProps> = ({
  position,
  children,
}) => <div className={`toolbar ${position}`}>{children}</div>;

export default O1Toolbar;

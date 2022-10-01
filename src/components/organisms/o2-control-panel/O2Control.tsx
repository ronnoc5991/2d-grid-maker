import { FunctionComponent } from "react";
import M1Button from "../../molecules/m1-button";
import "./styles.css";

type O2ControlPanelProps = {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
};

const O2ControlPanel: FunctionComponent<O2ControlPanelProps> = ({
  title,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="control-panel">
      <M1Button onClick={() => onToggle()} title={title} />
      {isOpen && <div>I am open</div>}
    </div>
  );
};

export default O2ControlPanel;

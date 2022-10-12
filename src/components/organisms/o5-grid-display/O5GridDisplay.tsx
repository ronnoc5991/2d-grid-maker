import { FunctionComponent } from "react";
import { v4 as uuidv4 } from "uuid";
import { Grid } from "../../../types/Grid";
import M1Button from "../../molecules/m1-button";
import "./styles.css";

type O5GridDisplayProps = {
  grid: Grid;
};

const O5GridDisplay: FunctionComponent<O5GridDisplayProps> = ({ grid }) => {
  return (
    <div className="grid-display">
      {grid.map((row) => (
        <div className="grid-row" key={uuidv4()}>
          {row.map((cell) => (
            <div
              key={uuidv4()}
              style={{ background: cell.color, border: "1px solid red" }}
            >
              <M1Button
                label={cell.value}
                title={cell.name}
                onClick={() => console.log("hi")}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default O5GridDisplay;

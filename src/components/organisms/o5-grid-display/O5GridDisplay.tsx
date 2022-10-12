import { FunctionComponent, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import { CellVariant } from "../../../types/CellVariant";
import { Grid } from "../../../types/Grid";
import M1Button from "../../molecules/m1-button";
import "./styles.css";

type O5GridDisplayProps = {
  grid: Grid;
  cellVariants: Array<CellVariant>;
  onCellClick: (row: number, column: number) => void;
};

const O5GridDisplay: FunctionComponent<O5GridDisplayProps> = ({
  grid,
  cellVariants,
  onCellClick,
}) => {
  const getCellVariant = useCallback(
    (id: string) => cellVariants.find((cellVariant) => cellVariant.id === id),
    [cellVariants]
  );

  return (
    <div className="grid-display">
      {grid.map((row, rowIndex) => (
        <div className="grid-row" key={uuidv4()}>
          {row.map((cellVariantId, columnIndex) => {
            const cellVariant = getCellVariant(cellVariantId);
            return (
              <div
                key={uuidv4()}
                className="cell"
                style={{ border: `1px solid ${cellVariant?.color}` }}
              >
                <M1Button
                  label={cellVariant?.value ?? ""}
                  title={cellVariant?.name ?? ""}
                  onClick={() => onCellClick(rowIndex, columnIndex)}
                />
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default O5GridDisplay;

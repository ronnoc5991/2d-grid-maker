import { FunctionComponent, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import defaultCellVariant from "../../../config/defaultCellVariant";
import { CellVariant } from "../../../types/CellVariant";
import { Grid } from "../../../types/Grid";

type O6GridUploadProps = {
  onSubmit: (grid: Grid, cellVariants: Array<CellVariant>) => void;
};

const O6GridUpload: FunctionComponent<O6GridUploadProps> = ({ onSubmit }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onClick = (pastedGrid: Grid) => {
    const uniqueValuesInGrid: Array<string> = [];
    pastedGrid.forEach((row) => {
      row.forEach((cellValue) => {
        if (!uniqueValuesInGrid.includes(cellValue))
          uniqueValuesInGrid.push(cellValue);
      });
    });

    const newCellVariants: Array<CellVariant> = uniqueValuesInGrid.map(
      (uniqueValue) => ({
        ...defaultCellVariant,
        value: uniqueValue,
        id: uuidv4(),
      })
    );

    const newGrid = pastedGrid.map((row) =>
      row.map((cellValue) => {
        const correspondingCellVariant = newCellVariants.find(
          (cellVariant) => cellVariant.value === cellValue
        );
        return correspondingCellVariant?.id ?? "";
      })
    );

    onSubmit(newGrid, newCellVariants);
  };

  return (
    <div>
      <input type="textarea" ref={inputRef} />
      <button
        type="submit"
        onClick={() =>
          onClick(JSON.parse(inputRef.current?.value as string) as Grid)
        }
      >
        Submit
      </button>
    </div>
  );
};

export default O6GridUpload;

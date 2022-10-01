import { FunctionComponent } from "react";
import { GridDimension, GridDimensions } from "../../../types/GridDimensions";
import M2Input from "../../molecules/m2-input";

type O4GridDimensionsControlProps = {
  dimensions: GridDimensions;
  onChange: (dimension: GridDimension, value: number) => void;
};

const O4GridDimensionsControl: FunctionComponent<
  O4GridDimensionsControlProps
> = ({ dimensions, onChange }) => {
  return (
    <div>
      <M2Input
        name="rows"
        label="Rows"
        type="number"
        onChange={(value) => onChange("rows", Number(value))}
        value={dimensions.rows}
      />
      <M2Input
        name="columns"
        label="Columns"
        type="number"
        onChange={(value) => onChange("columns", Number(value))}
        value={dimensions.columns}
      />
    </div>
  );
};

export default O4GridDimensionsControl;

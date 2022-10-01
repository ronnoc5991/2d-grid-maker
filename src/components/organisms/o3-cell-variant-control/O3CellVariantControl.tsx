import { FunctionComponent, useState } from "react";
import { CellVariant, CellVariantProperty } from "../../../types/CellVariant";
import M2Input from "../../molecules/m2-input";

type O3CellVariantControlProps = CellVariant & {
  onChange: (key: CellVariantProperty, value: string) => void;
};

const O3CellVariantControl: FunctionComponent<O3CellVariantControlProps> = ({
  name,
  value,
  color,
  onChange,
}) => {
  const [isEditable, setIsEditable] = useState(true);

  return (
    <div>
      {isEditable && (
        <>
          <M2Input
            type="text"
            label="Name"
            name="name"
            value={name}
            onChange={(value) => onChange("name", value)}
          />
          <M2Input
            type="text"
            label="Value"
            name="value"
            value={value}
            onChange={(value) => onChange("value", value)}
          />
          <M2Input
            type="color"
            label="Color"
            name="color"
            value={color}
            onChange={(value) => onChange("color", value)}
          />
          <button onClick={() => setIsEditable(false)}>Save</button>
        </>
      )}
      {!isEditable && (
        <>
          {name}
          {value}
          {color}
          <button onClick={() => setIsEditable(true)}>Edit</button>
        </>
      )}
    </div>
  );
};

export default O3CellVariantControl;

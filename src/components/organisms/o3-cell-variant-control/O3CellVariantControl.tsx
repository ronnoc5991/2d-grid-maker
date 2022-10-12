import { FunctionComponent, useState } from "react";
import type { CellVariant } from "../../../types/CellVariant";
import M2Input from "../../molecules/m2-input";

type O3CellVariantControlProps = CellVariant & {
  onSelect: () => void;
  onSave: (cellVariant: Omit<CellVariant, "id">) => void;
};

const O3CellVariantControl: FunctionComponent<O3CellVariantControlProps> = ({
  onSelect,
  onSave,
  ...props
}) => {
  const [isEditable, setIsEditable] = useState(true);
  const [name, setName] = useState(props.name);
  const [value, setValue] = useState(props.value);
  const [color, setColor] = useState(props.color);

  return (
    <div>
      {isEditable && (
        <>
          <M2Input
            type="text"
            label="Name"
            name="name"
            value={name}
            onChange={(value) => setName(value)}
          />
          <M2Input
            type="text"
            label="Value"
            name="value"
            value={value}
            onChange={(value) => setValue(value)}
          />
          <M2Input
            type="color"
            label="Color"
            name="color"
            value={color}
            onChange={(value) => setColor(value)}
          />
          <button
            onClick={() => {
              onSave({ value, name, color });
              setIsEditable(false);
            }}
          >
            Save
          </button>
        </>
      )}
      {!isEditable && (
        <>
          {name}
          {value}
          {color}
          <button onClick={() => setIsEditable(true)}>Edit</button>
          <button onClick={() => onSelect()}>Select Me</button>
        </>
      )}
    </div>
  );
};

export default O3CellVariantControl;

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import O1Toolbar from "./components/organisms/o1-toolbar";
import O2ControlPanel from "./components/organisms/o2-control-panel";
import O3CellVariantControl from "./components/organisms/o3-cell-variant-control";
import defaultCellVariant from "./config/defaultCellVariant";
import type { CellVariant } from "./types/CellVariant";

// TODO: Decide if I will use Canvas or not?
// TODO: support zooming? (this could be done on canvas) and dragging?
// TODO: Create component that contains options/takes a function/reports changes

// type ControlPanel = {
//   title: string;
//   isOpen: boolean;
// };

function App() {
  // const [controlPanels, setControlPanels] = useState<Array<ControlPanel>>([
  //   { title: "Cursor Control", isOpen: false },
  //   { title: "Grid Control", isOpen: false },
  //   { title: "Cell Control", isOpen: false },
  // ]);

  const [cellVariants, setCellVariants] = useState<
    Array<CellVariant & { id: string }>
  >([{ ...defaultCellVariant, id: uuidv4() }]);

  return (
    <div className="app">
      <div>
        {cellVariants.map(({ id, name, value, color }) => (
          <O3CellVariantControl
            key={id}
            name={name}
            value={value}
            color={color}
            onChange={(key, value) =>
              setCellVariants((previousCellVariants) =>
                previousCellVariants.map((variant) =>
                  variant.id === id ? { ...variant, [key]: value } : variant
                )
              )
            }
          />
        ))}
        <button
          onClick={() =>
            setCellVariants((previousCellVariants) => [
              ...previousCellVariants,
              { ...defaultCellVariant, id: uuidv4() },
            ])
          }
        >
          Add New Cell Variant
        </button>
      </div>
      {/* <O1Toolbar position="bottom">
        {controlPanels.map(({ title, isOpen }) => (
          <O2ControlPanel
            key={title}
            title={title}
            isOpen={isOpen}
            onToggle={() => {
              setControlPanels((previousControlPanels) =>
                previousControlPanels.map((controlPanel) => ({
                  ...controlPanel,
                  isOpen: controlPanel.title === title ? !isOpen : false,
                }))
              );
            }}
          />
        ))}
      </O1Toolbar> */}
    </div>
  );
}

export default App;

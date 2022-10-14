import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
// import O1Toolbar from "./components/organisms/o1-toolbar";
// import O2ControlPanel from "./components/organisms/o2-control-panel";
import O3CellVariantControl from "./components/organisms/o3-cell-variant-control";
import O4GridDimensionsControl from "./components/organisms/o4-grid-dimensions-control";
import O5GridDisplay from "./components/organisms/o5-grid-display";
import O6GridUpload from "./components/organisms/o6-grid-upload";
import defaultCellVariant from "./config/defaultCellVariant";
import defaultGridDimensions from "./config/defaultGridDimensions";
import type { CellVariant } from "./types/CellVariant";
import { Grid } from "./types/Grid";

// TODO: support zooming? (this could be done on canvas) and dragging?
// TODO: Create component that contains options/takes a function/reports changes
// TODO: Should show the grid with numbers, so I know what coordinates I am at?

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

  const [cellVariants, setCellVariants] = useState<Array<CellVariant>>([
    defaultCellVariant,
  ]);

  const [selectedCellVariantId, setSelectedCellVariantId] = useState(
    cellVariants[0].id
  );

  const [gridDimensions, setGridDimensions] = useState(defaultGridDimensions);

  const [grid, setGrid] = useState<Grid>(
    Array.from({ length: gridDimensions.rows }).map(() =>
      Array.from({ length: gridDimensions.columns }).map(
        () => selectedCellVariantId
      )
    )
  );

  useEffect(() => {
    const newGrid = Array.from({ length: gridDimensions.rows }).map(
      (_, rowIndex) =>
        Array.from({ length: gridDimensions.columns }).map((_, columnIndex) => {
          return grid[rowIndex]?.[columnIndex] ?? defaultCellVariant.id;
        })
    );
    setGrid(newGrid);
  }, [gridDimensions]);

  return (
    <div className="app">
      <div>
        {cellVariants.map((props) => (
          <O3CellVariantControl
            key={props.id}
            {...props}
            onSelect={() => setSelectedCellVariantId(props.id)}
            onSave={(cellVariant: Omit<CellVariant, "id">) =>
              setCellVariants((previousCellVariants) =>
                previousCellVariants.map((variant) =>
                  variant.id === props.id
                    ? { id: props.id, ...cellVariant }
                    : variant
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
      <O4GridDimensionsControl
        dimensions={gridDimensions}
        onChange={(key, value) =>
          setGridDimensions((previousGridDimensions) => ({
            ...previousGridDimensions,
            [key]: value,
          }))
        }
      />
      <O5GridDisplay
        grid={grid}
        onCellClick={(row: number, column: number) => {
          const newGrid = [...grid];
          newGrid[row][column] = selectedCellVariantId;
          setGrid(newGrid);
        }}
        cellVariants={cellVariants}
      />
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
      <button
        onClick={() => {
          const gridData = grid.map((row) =>
            row.map((cellVariantId) => {
              const matchingCellVariant = cellVariants.find(
                (cellVariant) => cellVariant.id === cellVariantId
              );
              return matchingCellVariant?.value ?? "";
            })
          );
          navigator.clipboard.writeText(JSON.stringify(gridData));
        }}
      >
        Copy to clipboard
      </button>
      <O6GridUpload
        onSubmit={(newGrid, newCellVariants) => {
          setGrid(newGrid);
          setCellVariants(newCellVariants);
          setGridDimensions({
            rows: newGrid.length,
            columns: newGrid[0].length,
          });
        }}
      />
    </div>
  );
}

export default App;

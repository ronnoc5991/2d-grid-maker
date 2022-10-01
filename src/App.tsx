import { useState } from "react";
import O1Toolbar from "./components/organisms/o1-toolbar";
import O2ControlPanel from "./components/organisms/o2-control-panel";

// TODO: Decide if I will use Canvas or not?
// TODO: support zooming? (this could be done on canvas) and dragging?
// TODO: Create component that contains options/takes a function/reports changes

type ControlPanel = {
  title: string;
  isOpen: boolean;
};

function App() {
  const [controlPanels, setControlPanels] = useState<Array<ControlPanel>>([
    { title: "Cursor Control", isOpen: false },
    { title: "Grid Control", isOpen: false },
    { title: "Cell Control", isOpen: false },
  ]);

  return (
    <div className="app">
      <O1Toolbar position="bottom">
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
      </O1Toolbar>
    </div>
  );
}

export default App;

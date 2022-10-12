import { v4 as uuidv4 } from "uuid";
import { CellVariant } from "../types/CellVariant";

const defaultCellVariant: CellVariant = {
  name: "Default Name",
  value: "X",
  color: "#000000",
  id: uuidv4(),
};

export default defaultCellVariant;

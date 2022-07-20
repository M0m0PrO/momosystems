import { resetArray } from "./arraymethods.js";
import { addBlocks, addCells, focusOnFirstCell } from "./cells.js";
import { enableControls } from "./sudokucontrols.js";

$(() => {
    resetArray();
    addBlocks();
    addCells();
    focusOnFirstCell();
    enableControls();
});
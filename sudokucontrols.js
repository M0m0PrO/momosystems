import { resetArray } from "./arraymethods.js";
import { startSolve } from "./solversudoku.js";

export function enableControls() {
    $("#clearBtn").on("click", clearSudoku);
    $("#solveBtn").on("click", startSolve);
}

function clearSudoku() {
    $(".cell").val("").removeClass("fixed");
    $("#info").text("");
    resetArray();
}
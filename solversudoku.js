import { getUnsolvedPosition, setValue, hasContradiction } from "./arraymethods.js"

let solving = false;

function stopSolve() {
    solving = false;
    //TODO
}

export function startSolve() {
    solving = true;
    $(".cell").filter(function() {
            return $(this).val()
        })
        .addClass("fixed");
    $("#info").text("Solving...")
    $(".cell, #clearBtn").prop("disabled", true);
    $("#sudoku").addClass("solving");
    const solution = solveSudoku();

    if (solution == true) {
        $("#info").text("The Sudoku is solved")
    } else if (solution == false) {
        $("#info").text("The Sudoku cannot be solved")
    }
    $(".cell, #clearBtn").prop("disabled", false);
    $("#sudoku").removeClass("solving");
    stopSolve();

}

function solveSudoku() {
    const pos = getUnsolvedPosition();
    if (!pos) return true;
    const { row, col } = pos;
    for (let val = 1; val <= 9; val++) {
        if (!hasContradiction(row, col, val)) {
            setValue(row, col, val);
            if (solveSudoku()) {
                return true;
            }
        }
    }
    setValue(row, col, 0)
    return false;
}
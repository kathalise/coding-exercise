console.log("sanity check", $);

(function () {
    var currentPlayer = "player1";
    var slots = $(".slot");
    console.log("I am a slot", slots);

    var rowIndex;
    var colIndex;

    var closeVictory = $("button");
    // var victoryBox = $(".victory-popup");
    var victory = $(".victory-popup-overlay");
    // console.log("victory", victory);

    // var activePlayer = 1;

    function victoryPopUp() {
        victory.css({
            visibility: "visible",
        });
        $(".turnYellow").css({
            visibility: "hidden",
        });
        $(".turnRed").css({
            visibility: "hidden",
        });
        if (currentPlayer == "player1") {
            $(".winPlayer1").css({
                visibility: "visible",
            });
        } else {
            $(".winPlayer2").css({
                visibility: "visible",
            });
        }
        closeVictory.on("click", function () {
            // $("button").addClass("button-red");
            location.reload();
        });
    }

    $(".column").on("click", function (e) {
        // console.log("click on column!");
        var col = $(e.currentTarget);
        console.log("which column?, COL?", col);
        var slotsInCol = col.children();

        // console.log("holes array", slotsInCol);

        for (var i = slotsInCol.length - 1; i >= 0; i--) {
            // console.log("slots:", slotsInCol.eq(i).hasClass("player1"));
            // console.log("slots:", slotsInCol.eq(i).hasClass("player2"));
            var hasPlayer1 = slotsInCol.eq(i).hasClass("player1");
            // console.log(hasPlayer1);
            var hasPlayer2 = slotsInCol.eq(i).hasClass("player2");
            // console.log(hasPlayer2);
            if (!hasPlayer1 && !hasPlayer2) {
                // console.log("do something!");
                slotsInCol.eq(i).addClass(currentPlayer);
                break;
            }
        }
        console.log("i", i);

        var colIndex = col.index();
        var rowIndex = i;
        console.log("I am a col Index", colIndex);
        console.log("I am a row Index", rowIndex);
        // var slot = $(slots[i]);
        // console.log("was macht slot[i]?", slot);

        // console.log("my colIndex", colIndex);
        // console.log("rowIndex", rowIndex);
        // console.log("RowIndex", rowIndex);
        var slotsInRow = $(".row" + i);
        // console.log("All slots in row i m in", slotsInRow);

        slots = $(".slot");
        // console.log("slots in col?", slotsInCol);
        if (i === -1) {
            return;
        }
        if (checkForVictory(slotsInCol)) {
            console.log("there was a COL victory");
            setTimeout(victoryPopUp, 1500);
        } else if (checkForVictory(slotsInRow)) {
            console.log("there was a ROW victory");
            setTimeout(victoryPopUp, 1500);
        } else if (checkForDiagonals(colIndex, rowIndex)) {
            console.log("there was a DIAG victory");
            setTimeout(victoryPopUp, 1500);
        } else {
            switchPlayer();
        }
    });

    function checkForDiagonals(colIndex, rowIndex) {
        var slotsDiagRL = [];
        var slotsDiagLR = [];

        slotsDiagRL.push(
            // moving from right corner up to left top
            // starting  at 41, 35
            $(".column")
                .eq(colIndex + 3)
                .children()
                .eq(rowIndex + 3), // down - first coin in my Diag
            $(".column")
                .eq(colIndex + 2)
                .children()
                .eq(rowIndex + 2), // up + - second coint in my Diag
            $(".column")
                .eq(colIndex + 1)
                .children()
                .eq(rowIndex + 1), // up++ - third coin in my Diag
            $(".column").eq(colIndex).children().eq(rowIndex), //my current position winner?
            $(".column")
                .eq(colIndex - 1)
                .children()
                .eq(rowIndex - 1),
            $(".column")
                .eq(colIndex - 2)
                .children()
                .eq(rowIndex - 2) // after this jumps to oder line
        );
        slotsDiagLR.push(
            //moving from left corner up to right top
            // starting at 5, 11
            $(".column")
                .eq(colIndex - 3)
                .children()
                .eq(rowIndex - 3), // minus 3 left, plus thre down (column index grows downwards)
            $(".column")
                .eq(colIndex - 2)
                .children()
                .eq(rowIndex + 2), // minues 2 left, plus two down
            $(".column")
                .eq(colIndex - 1)
                .children()
                .eq(rowIndex + 1), // minues one left, plus one down
            $(".column").eq(colIndex).children().eq(rowIndex), //my current position winner?
            $(".column")
                .eq(colIndex + 1)
                .children()
                .eq(rowIndex - 1), // plus one right, minus one up (column index gets smaller upwards)
            $(".column")
                .eq(colIndex + 2)
                .children()
                .eq(rowIndex - 2) // plus two right, minus two up
        );

        if (checkForVictory(slotsDiagRL)) {
            return true;
        } else if (checkForVictory(slotsDiagLR)) {
            return true;
        }

        // console.log("(0)what is the first Index", slotsDiagRL[0]);
        // console.log("(A) slotsDiagRL", slotsDiagRL);
        // console.log("(B) slotsDiagRL", slotsDiagLR);
        // var allColums = document.getElementsByClassName("column");
        // console.log("(1) getting column by class", allColums);
        // var allSlotsInMyCol = allColums[colIndex].children;
        // var mySlot = allSlotsInMyCol[rowIndex];
        // console.log("(2) all slots in that row", allSlotsInMyCol);
        // console.log("(3) Where I currently am", mySlot);
        // console.log("slotsDiag: ", slotsDiag);
    }

    function checkForVictory(slots) {
        // console.log("checking for victory", slots);
        var count = 0;
        for (var i = 0; i < slots.length; i++) {
            var slot = $(slots[i]);
            console.log("what does this show us, slots[i]?", slots[i]);
            if (slot.hasClass(currentPlayer)) {
                count++;
                if (count === 4) {
                    return true;
                }
            } else {
                count = 0;
            }
        }
    }

    function switchPlayer() {
        if (currentPlayer === "player1") {
            currentPlayer = "player2";
            $(".turnRed").css({
                visibility: "visible",
            });
            $(".turnYellow").css({
                visibility: "hidden",
            });
        } else {
            currentPlayer = "player1";
            $(".turnRed").css({
                visibility: "hidden",
            });
            $(".turnYellow").css({
                visibility: "visible",
            });
        }

        // same logic as above if / else//

        // currentPlayer === "player1"
        //     ? (currentPlayer = "player2")
        //     : (currentPlayer = "player1");

        console.log("Current Player: " + currentPlayer);
    }
    // console.log("current player is now", currentPlayer);
    // console.log("current player is now", currentPlayer);
})();
// var allColums = document.getElementsByClassName("column");
// var allSlotsInMyCol = test[colIndex].children;
// var mySlot = testTwo[rowIndex];
//  (allSlotsInMyCol = allColums[colIndex].children),
//      (mySlot = allSlotsInMyCol[rowIndex]),
//      (allSlotsInMyCol = allColums[colIndex - 1].children),
//      (mySlot = allSlotsInMyCol[rowIndex - 1]),
//      (allSlotsInMyCol = allColums[colIndex - 2].children),
//      (mySlot = allSlotsInMyCol[rowIndex - 2]),
//      (allSlotsInMyCol = allColums[colIndex - 3].children),
//      (mySlot = allSlotsInMyCol[rowIndex - 3]),
//      (allSlotsInMyCol = allColums[colIndex].children),
//      (mySlot = allSlotsInMyCol[rowIndex]),
//      (allSlotsInMyCol = allColums[colIndex + 1].children),
//      (mySlot = allSlotsInMyCol[rowIndex + 1]),
//      (allSlotsInMyCol = allColums[colIndex + 2].children),
//      (mySlot = allSlotsInMyCol[rowIndex + 2]),
//      (allSlotsInMyCol = allColums[colIndex + 3].children),
//      (mySlot = allSlotsInMyCol[rowIndex + 3]);

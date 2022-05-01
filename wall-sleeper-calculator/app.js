// Created by Luke Anderson
$("#buttonCalculate").on("click", function() {
    // ******************************
    //  Calculate Sleeper
    // ******************************

    // ******************************
    //  Setup Variables
    // ******************************
    // Constants
    const sleeperLengthMM = 2 * 1000;
    const sleeperHeightMM = 200;

    // Input Values
    const wallLengthMM = $("#inputWallLength").val() * 1000;
    const wallStartHeightMM = $("#inputWallStartHeight").val() * 1000;
    const wallEndHeightMM = $("#inputWallEndHeight").val() * 1000;
    const wallLocallyBuilt = $("#inputSiteBuiltLocally").val();
    const wallAdequateAccess = $("#inputSiteAdequateAccess").val();
    const wallDifficulty = $("#inputSiteDifficulty").val();

    // Calculation Output Objects
    const calculationSleepers = $("#calculation-sleepers")
    const calculationSegments = $("#calculation-segments")
    const calculationArea = $("#calculation-area")
    const calculationSleeperCost = $("#calculation-sleepercost")
    const calculationPenaltyCostPercent = $("#calculation-penaltycostpercent")
    const calculationPenaltyCost = $("#calculation-penaltycost")
    const calculationTotalCost = $("#calculation-totalcost")

    let sleepers = 0;
    let segments = 0;
    let totalArea = 0;
    let totalSleeperCost = 0;
    let totalPenaltyCost = 0;
    let totalCost = 0;

    let totalPenaltyCostPercentage = 0;

    // ******************************
    //  Form Validations
    // ******************************
    if ((wallLengthMM / 1000) %2 !== 0 || (wallLengthMM * 1000) < 2) {
        alert("Wall length must be a multiple of two!")
        event.stopPropagation();
        return;
    }

    // ******************************
    //  Execute Calculations
    // ******************************

    // Step 1: How many Wall Segments exist
    segments = (wallLengthMM / sleeperLengthMM);
    calculationSegments.text(segments);

    // Step 2: Calculate sleepers
    // Does Wall Height have an angle?
    if (wallStartHeightMM === wallEndHeightMM) {
        // No
        // Calculate sleepers
        let sleepersRequired = Math.floor(wallStartHeightMM / 200);
        let sleepersRequiredRemainderMM = wallEndHeightMM % 200;
        console.log(sleepersRequired)
        console.log(sleepersRequiredRemainderMM)

        // Implement Half Slab Rules
        if (sleepersRequiredRemainderMM > 100) {
            sleepersRequired++;
        }

        sleepers = sleepersRequired;

        console.log("wallStartHeightMM: " + wallStartHeightMM);
        console.log("sleeperHeightMM: " + sleeperHeightMM);
        console.log("segments: " + segments);
        console.log("sleepers: " + sleepers);
    } else {
        // Yes
        let wallHeightDifferenceMM = Math.max(wallStartHeightMM, wallEndHeightMM) - Math.min(wallStartHeightMM, wallEndHeightMM)
        let wallHeightMinimumMM = Math.min(wallStartHeightMM, wallEndHeightMM)
        let wallAngle = Math.atan(wallHeightDifferenceMM / wallLengthMM) * 180 / Math.PI;
        console.log("Degrees: " + wallAngle);

        // Calculate the height of each inner triangle, 2m at a time
        let triangleCount = 0;
        for (let triangleLengthLoopMM = 0; triangleLengthLoopMM < wallLengthMM; triangleLengthLoopMM += 2000) {
            // Calculate it
            triangleCount ++;

            let effectiveTriangleLengthMM = (triangleCount * 2000)
            let triangleHeightMM = (effectiveTriangleLengthMM * Math.tan(wallAngle * Math.PI / 180)).toFixed(2); // Because...math? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/tan

            console.log(effectiveTriangleLengthMM);
            console.log(Math.tan(wallAngle * Math.PI / 180));
            console.log("TriangleCount: " + triangleCount + ", Effective Height: " + triangleHeightMM + "mm");

            // Reconnect it to the rest of the segment
            let segmentHeightMM = Number(triangleHeightMM) + Number(wallHeightMinimumMM)
            console.log("segmentHeightMM: " + segmentHeightMM);
            console.log("triangleHeightMM: " + triangleHeightMM);
            console.log("wallHeightMinimumMM: " + wallHeightMinimumMM);

            // Calculate sleepers
            let sleepersRequired = Math.floor(segmentHeightMM / 200);
            let sleepersRequiredRemainderMM = segmentHeightMM % 200;
            console.log(sleepersRequired)
            console.log(sleepersRequiredRemainderMM)

            // Implement Half Slab Rules
            if (sleepersRequiredRemainderMM > 100) {
                sleepersRequired++;
            }

            // Bring it all together
            sleepers += sleepersRequired;
        }
    }

    calculationSleepers.text(sleepers);

    // Step 3: Calculate Area
    // Formula = Sleepers * Area of Sleeper
    console.log(sleepers)
    totalArea = (sleepers * (0.2 * 2)).toFixed(2)
    calculationArea.text(totalArea);

    // Step 4: Calculate Costs
    // Sleeper Cost
    totalSleeperCost = (totalArea * 425).toFixed(2)
    calculationSleeperCost.text(totalSleeperCost);

    // Penalty Costs
    if (wallLocallyBuilt === "No") {
        totalPenaltyCostPercentage += 5
    }

    if (wallAdequateAccess === "No") {
        totalPenaltyCostPercentage += 30
    }

    if (wallDifficulty === "Sandy") {
        totalPenaltyCostPercentage += 10
    }

    if (wallDifficulty === "Limestone") {
        totalPenaltyCostPercentage += 15
    }

    if (wallDifficulty === "Bluestone") {
        totalPenaltyCostPercentage += 30
    }

    calculationPenaltyCostPercent.text(totalPenaltyCostPercentage);

    // Final Calculation
    totalPenaltyCost = ((totalSleeperCost * (totalPenaltyCostPercentage / 100))).toFixed(2);
    totalCost = (Number(totalSleeperCost) + Number(totalPenaltyCost)).toFixed(2);

    calculationPenaltyCost.text(totalPenaltyCost);
    calculationTotalCost.text(totalCost);
});
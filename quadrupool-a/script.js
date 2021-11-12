let selected_player = null;

function addScore(colour = null, amount = 0) {
    if (colour == null) {
        // If null, was called by the score adder, if not, was done manually
        if (selected_player == null) {
            return;
        } else {
            colour = selected_player;
        }
    }

    if (amount === 0) {
        // If 0, was done manually, if not, was done by a score button
        amount = 1;
    } else {
        // Test if already disabled
        if (document.getElementById("ball-" + amount).classList.contains("quadrupool-score-selector-button-disabled")) {
            return;
        }

        disableButtons("#ball-" + amount);
    }

    const element = document.getElementById(colour + "-score");
    const score = parseInt(element.innerHTML);

    element.innerHTML = (score + amount);

    // Play ding sound effect
    const audio = new Audio('ding.mp3');
    audio.play();
}

function enableButtons(query_selector) {
    let i;
    let buttons = document.querySelectorAll(query_selector);

    for (i = 0; i < buttons.length; i++) {
        if (buttons[i].classList.contains("quadrupool-score-selector-button-disabled")) {
            buttons[i].classList.remove("quadrupool-score-selector-button-disabled");
        }
    }
}

function disableButtons(query_selector) {
    let i;
    let buttons = document.querySelectorAll(query_selector);

    for (i = 0; i < buttons.length; i++) {
        if (!buttons[i].classList.contains("quadrupool-score-selector-button-disabled")) {
            buttons[i].classList.add("quadrupool-score-selector-button-disabled");
        }
    }
}

function selectPlayer(colour) {
    if (selected_player === null) {
        // Enable score buttons
        enableButtons(".quadrupool-score-selector-button-score");
    }

    selected_player = colour;

    // Disable player selector buttons
    disableButtons(".quadrupool-score-selector-button-player");

    // Enable player button
    enableButtons(".quadrupool-" + colour + "-player");
}
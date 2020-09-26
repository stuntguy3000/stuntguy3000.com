function addScore(colour) {
    console.log("Adding score to " + colour);

    const element = document.getElementById(colour + "-score");
    const score = parseInt(element.innerHTML);

    console.log("Old score: " + score);

    element.innerHTML = score + 1;

    console.log("New score: " + element.innerHTML);

    // Play sound effect
    var audio = new Audio('ding.mp3');
    audio.play();
}
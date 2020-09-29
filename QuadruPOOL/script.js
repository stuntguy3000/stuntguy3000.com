var total_score = 0;

function addScore(colour) {
    const element = document.getElementById(colour + "-score");
    const score = parseInt(element.innerHTML);

    element.innerHTML = score + 1;
	total_score += 1;

    // Play ding sound effect
    var audio = new Audio('ding.mp3');
    audio.play();
}
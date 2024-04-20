function start() {
    window.location.href = './page2.html';
}

function submit() {
    let ran = Math.trunc(Math.random() * 9);
    let input = parseInt(document.getElementById("input").value);
    let resp = document.getElementById("res");
    let iconElement = document.getElementById("icon");

    if (input === ran) {
        resp.textContent = "You are very lucky! Your guessed number matches the random number.";
        iconElement.innerHTML = "&#128512;";
    } else {
        iconElement.innerHTML = "&#128577;";
        resp.textContent = "Would you like to try again?";
        document.getElementById("but").textContent = "Try again";
    }
}

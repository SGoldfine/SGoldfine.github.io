
const slide = () => {
    const currentQuote = document.querySelector("#slideshow :not(.hidden)");
    currentQuote.classList.add("hidden");

    let nextQuote = currentQuote.nextElementSibling;

    if(nextQuote == null) {
        nextQuote = document.querySelector("#slideshow :first-child");
    }

    nextQuote.classList.remove("hidden");
}

const displayRainbow = () => {
    const currentColor = document.querySelector("#colors :first-child");
    currentColor.classList.remove("hidden");

    let nextColor = currentColor.nextElementSibling;

    let img = document.getElementById("gold")
    if(nextColor == null) {
        img.classList.remove("hidden");
    }

    nextColor.classList.remove("hidden");
}

window.onload = () => {
    setInterval(slide, 2000);
    document.getElementById("rainbow-button").onclick = displayRainbow;
    setInterval(displayRainbow, 2000);
}
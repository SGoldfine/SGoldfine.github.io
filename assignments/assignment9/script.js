
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
    const resultDiv = document.getElementById("result");
    
}

window.onload = () => {
    setInterval(slide, 2000);
    document.getElementById("rainbow-button").onclick = displayRainbow;
}
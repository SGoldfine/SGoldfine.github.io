const displayDonate = () => {
    const donateAmt = parseInt(document.getElementById("txt-donate").value);
    const endNumber = 10000;
    const root = document.querySelector(":root");

    const error = document.getElementById("error");
    error.classList.add("hidden");

    if(donateAmt < 0 || isNaN(donateAmt) || isNaN(endNumber) || donateAmt > endNumber) {
        error.classList.remove("hidden");
        error.innerHTML = "Not a valid number";
    }

    var gradient = 1;

    const setFill = () => {
        root.style.setProperty("--num", gradient + "px");
    }
    let bar = document.getElementById("gradient");

    for(let i = 0; i < donateAmt; i++) {
        const updateFill = setInterval(() => {
            bar.innerHTML = setFill();

            if (gradient > 10000) {
                clearInterval(updateFill);
            }
        }, 10)  
    } 
};

var padding = -500;

const moveMan = () => {
    const setLocation = () => {
        document.getElementById("img").style.setProperty("--x", padding + "px");
    }

    let man = document.getElementById("img");
    const updateMove = setInterval(() => {
        padding += 10;
        man.innerHTML = setLocation();

        if (padding >= 400) {
            clearInterval(updateMove);
        }
    }, 50);
}

window.onload = () => {
    document.getElementById("donate-button").onclick = displayDonate;
    document.getElementById("img").onclick = moveMan;
};
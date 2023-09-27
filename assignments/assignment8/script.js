const displayDonate = () => {
    const donateAmt = parseInt(document.getElementById("txt-donate").value);
    const root = document.querySelector(":root");

    const error = document.getElementById("error");
    error.classList.add("hidden");

    if(donateAmt < 0) {
        error.classList.remove("hidden");
        error.innerHTML = "Not a valid number";
    }

    if(donateAmt == 0) {
        root.styl.setProperty("--num", "0%");
    } else if(donateAmt <= 4999 && donateAmt > 0) {
        root.style.setProperty("--num", "25%");
    } else if(donateAmt <= 7499 && donateAmt > 0) {
        root.style.setProperty("--num", "50%");
    } else if(donateAmt <= 9999 && donateAmt > 0) {
        root.style.setProperty("--num", "75%");
    } else if(donateAmt <= 10000 && donateAmt > 0) {
        root.style.setProperty("--num", "100%");
    }
};

const makeRun = () => {
    console.log("running");
};

window.onload = () => {
    document.getElementById("donate-button").onclick = displayDonate;
    document.getElementById("img").onclick = makeRun;
};
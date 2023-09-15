const showPic = () => {
    document.getElementById("img").classList.remove("hide");
}

const hidePic = () => {
    document.getElementById("img").classList.add("hide");
}

const moveBall = () => {
    document.getElementById("ball").classList.add("move-ball");
}

window.onload = () => {
    document.getElementById("button-show").onclick = showPic;
    document.getElementById("button-hide").onclick = hidePic;
    document.getElementById("button-dance").onclick = moveBall;
}

const changeText = () => {
    const hellop = document.getElementById("date");
    hellop.innerHTML = "It's over, it's so fucking over";
    hellop.classList.add("special");
}

const showRodgers = () => {
    document.getElementById("rodgers").classList.remove("hide");
}

const hideRodgers = () => {
    document.getElementById("rodgers").classList.add("hide");
}

window.onload = () => {
    //get button. tie function to the click action
    document.getElementById("button-click").onclick = changeText;
    document.getElementById("button-show").onclick = showRodgers;
    document.getElementById("button-hide").onclick = hideRodgers
}
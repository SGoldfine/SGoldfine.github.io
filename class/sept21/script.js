const toggleNav = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
};

const changeMood = () => {
    const mood = document.getElementById("txt-mood").value.toLowerCase().trim();
    const root = document.querySelector(":root");

    if(mood == "angry") {
        root.style.setProperty("--back", "red");
        root.style.setProperty("--headback", "orange");
    }
};

const colorSquare = () => {
    document.getElementById("square").classList.add("rainbow");
};

const orderCoffee = () => {
    const numCoffees = parseInt(document.getElementById("txt-num").value);
    const coffeeType = document.getElementById("txt-type").value;
    const error = document.getElementById("error-num");
    const orderDiv = document.getElementById("coffee-order");
    error.classList.add("hidden");
    orderDiv.classList.add("hidden");

    if(isNaN(numCoffees)) {
        error.classList.remove("hidden");
        error.innerHTML = "Not a valid number";
    } else if(numCoffees < 0) {
        error.classList.remove("hidden");
        error.innerHTML = "Can't have negative coffee";
    } else if(numCoffees == 0) {
        error.classList.remove("hidden");
        error.innerHTML = "Can't have 0 coffee";
    } else if(numCoffees == 1) {
        orderDiv.innerHTML = `Ordered 1 ${coffeeType}.`;
        orderDiv.classlist.remove("hidden");
    } else {
        orderDiv.innerHTML = `Ordered ${numCoffees} ${coffeeType}s.`;
        orderDiv.classlist.remove("hidden");
    }
}
  
window.onload = () => {
    document.getElementById("hamburger").onclick = toggleNav;

    document.getElementById("button-change-mood").onclick = changeMood;

    document.getElementById("button-gradient").onclick = colorSquare;

    document.getElementById("button-show-data").onclick = orderCoffee;
};
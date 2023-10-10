const toggleNav = () => {
    document.getElementById("main-nav-items").classList.toggle("hidden");
}

const toggleAss = () => {
    document.getElementById("nav2").classList.toggle("hidden");
    document.getElementById("nav1").classList.add("hidden");
}   

window.onload = () => {
    document.getElementById("nav-toggle").onclick = toggleNav;
    document.getElementById("nav1").onclick = toggleAss;
}
const toggleNav = () => {
    document.getElementById("main-nav-items").classList.toggle("hidden");
}

const toggleExp = () => {
    document.getElementById("p2of5").classList.toggle("hidden");
    document.getElementById("p1of5").classList.add("hidden");
    document.getElementById("p3of5").classList.add("hidden");
    document.getElementById("p4of5").classList.add("hidden");
    document.getElementById("p5of5").classList.add("hidden");
}

const toggleEdu = () => {
    document.getElementById("p3of5").classList.toggle("hidden");
    document.getElementById("p1of5").classList.add("hidden");
    document.getElementById("p2of5").classList.add("hidden");
    document.getElementById("p4of5").classList.add("hidden");
    document.getElementById("p5of5").classList.add("hidden");
}

const toggleAct = () => {
    document.getElementById("p4of5").classList.toggle("hidden");
    document.getElementById("p1of5").classList.add("hidden");
    document.getElementById("p2of5").classList.add("hidden");
    document.getElementById("p3of5").classList.add("hidden");
    document.getElementById("p5of5").classList.add("hidden");
}

const toggleCont = () => {
    document.getElementById("p5of5").classList.toggle("hidden");
    document.getElementById("p1of5").classList.add("hidden");
    document.getElementById("p2of5").classList.add("hidden");
    document.getElementById("p3of5").classList.add("hidden");
    document.getElementById("p4of5").classList.add("hidden");
}

window.onload = () => {
    document.getElementById("nav-toggle").onclick = toggleNav;
    document.getElementById("p2of5").onclick = toggleExp;
    document.getElementById("p3of5").onclick = toggleEdu;
    document.getElementById("p4of5").onclick = toggleAct;
    document.getElementById("p5of5").onclick = toggleCont;


}
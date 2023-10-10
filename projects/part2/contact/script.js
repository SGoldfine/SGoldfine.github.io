const toggleNav = () => {
    document.getElementById("main-nav-items").classList.toggle("hidden");
}

const toggleBio = () => {
    document.getElementById("p1of5").classList.toggle("hidden");
    document.getElementById("p2of5").classList.add("hidden");
    document.getElementById("p3of5").classList.add("hidden");
    document.getElementById("p4of5").classList.add("hidden");
    document.getElementById("p5of5").classList.add("hidden");
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

const logSubmit = () => {
    const name = document.getElementById("txt-name").value;
    const email = document.getElementById("txt-email").value;
    const subject = document.getElementById("txt-subject").value;
    const message = document.getElementById("txt-message").value;

    console.log(name); 
    console.log(email); 
    console.log(subject); 
    console.log(message); 
}

window.onload = () => {
    document.getElementById("nav-toggle").onclick = toggleNav;
    document.getElementById("p1of5").onclick = toggleBio;
    document.getElementById("p2of5").onclick = toggleExp;
    document.getElementById("p3of5").onclick = toggleEdu;
    document.getElementById("p4of5").onclick = toggleAct;

    document.getElementById("btn-submit").onclick = logSubmit;
}
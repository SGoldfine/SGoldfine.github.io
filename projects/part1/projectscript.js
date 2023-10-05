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

const toggleCont = () => {
    document.getElementById("p5of5").classList.toggle("hidden");
    document.getElementById("p1of5").classList.add("hidden");
    document.getElementById("p2of5").classList.add("hidden");
    document.getElementById("p3of5").classList.add("hidden");
    document.getElementById("p4of5").classList.add("hidden");
}

// const printProject = () => {
//     document.getElementById("boxes").classList.add("comment");

//     const link = document.getElementById("txt-link").value;
//     const header = document.getElementById("add-link");
    
//     const description = document.getElementById("txt-description").value;
//     const descriptionP = document.getElementById("add-comment");

//     header.innerHTML += `<section class = "separate"><strong>${link}</strong> <p class="small">${description}</p></section>`;
// }


window.onload = () => {
    document.getElementById("nav-toggle").onclick = toggleNav;
    document.getElementById("p1of5").onclick = toggleBio;
    document.getElementById("p2of5").onclick = toggleExp;
    document.getElementById("p3of5").onclick = toggleEdu;
    document.getElementById("p5of5").onclick = toggleCont;
    document.getElementById("button-add").onclick = printProject;

}
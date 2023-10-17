const toggleNav = () => {
    document.getElementById("main-nav-items").classList.toggle("hidden");
}

const showWebFrame = () => {
    document.getElementById("framea").classList.toggle("hidden");
    document.getElementById("webpic").classList.toggle("hidden");
}

const showModernFrame = () => {
    document.getElementById("frameb").classList.toggle("hidden");
    document.getElementById("modernpic").classList.toggle("hidden");
}

const printProject = () => {
    document.getElementById("boxes").classList.add("comment");

    const newproject = document.getElementById("input");

    const link = document.getElementById("txt-link").value;
    
    const description = document.getElementById("txt-description").value;

    newproject.innerHTML += `<section class = "separate"><p><strong>${link}</strong></p> <ul class="small"><li>${description}</li></ul></section>`;
}


window.onload = () => {
    document.getElementById("webpic").classList.remove("hidden");
    document.getElementById("modernpic").classList.remove("hidden");
    document.getElementById("nav-toggle").onclick = toggleNav;
    document.getElementById("button-add").onclick = printProject;
    document.getElementById("weblink").onclick = showWebFrame;
    document.getElementById("modernlink").onclick = showModernFrame;
}
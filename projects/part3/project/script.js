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

    const newproject = document.getElementById("new");

    const name = document.getElementById("txt-name").value;

    const link = document.getElementById("txt-link").value;
    
    const description1 = document.getElementById("txt-description1").value;
    const description2 = document.getElementById("txt-description2").value;
    const description3 = document.getElementById("txt-description3").value;
    const description4 = document.getElementById("txt-description4").value;

    newproject.innerHTML += `<font size="+2"><h1 id = "soft">${name}</h1><font> <section class = "sec4"> <p><a href><strong>${link}</strong></a></p> <ul><li>${description1}</li><li>${description2}</li><li>${description3}</li><li>${description4}</li></ul></section>`;

    document.getElementById("new").classList.toggle("hidden");
}


window.onload = () => {
    document.getElementById("webpic").classList.remove("hidden");
    document.getElementById("modernpic").classList.remove("hidden");
    document.getElementById("nav-toggle").onclick = toggleNav;
    document.getElementById("button-add").onclick = printProject;
    document.getElementById("weblink").onclick = showWebFrame;
    document.getElementById("modernlink").onclick = showModernFrame;
}
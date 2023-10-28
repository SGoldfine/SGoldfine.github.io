const toggleNav = () => {
    document.getElementById("main-nav-items").classList.toggle("hidden");
}

// const showWebFrame = () => {
//     document.getElementById("framea").classList.toggle("hidden");
//     document.getElementById("webpic").classList.toggle("hidden");
// }

// const showModernFrame = () => {
//     document.getElementById("frameb").classList.toggle("hidden");
//     document.getElementById("modernpic").classList.toggle("hidden");
// }

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

const getProjects = async () => {
    const url = "https://sgoldfine.github.io/jsons/projects.json";
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  };
  
  const showProjects = async () => {
    let projects = await getProjects();
    let projectsSection = document.getElementById("main-content");
    projects.forEach((project) =>
      projectsSection.append(getProject(project))
    );
  };
  
  const getProject = (project) => {
    let section = document.createElement("section");
    section.classList.add("project");
  
    let h1 = document.createElement("h1");
    h1.innerText = project.title;
    section.append(h1);

    let h3 = document.createElement("h3");
    h3.innerText = project.link;
    section.append(h3);

    let details = document.createElement("div");
    details.classList.add("projects-details");
    section.append(details);

    let ul = document.createElement("ul");
    details.append(ul);

    Object.keys(project).forEach((key) => {
      if(key !== "title" && key !== "img" && key != "link") {
        let li = document.createElement("li");
        ul.append(li);

        if(Array.isArray(project[key])) {
          li.append(project[key].join(", "));
        } else {
          li.append(project[key]);
        }
      }
    });

    let img = document.createElement("img");
    img.src = "https://sgoldfine.github.io/jsons/projects.json" + project.img;
    section.append(img);
    
    return section;
  };

window.onload = () => {
    // document.getElementById("webpic").classList.remove("hidden");
    // document.getElementById("modernpic").classList.remove("hidden");
    // document.getElementById("weblink").onclick = showWebFrame;
    // document.getElementById("modernlink").onclick = showModernFrame;
    document.getElementById("nav-toggle").onclick = toggleNav;
    document.getElementById("button-add").onclick = printProject;
    showProjects();
}
const getClasses = async () => {
    const url = "https://sgoldfine.github.io/jsons/classes.json";
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
};

const showClasses = async () => {
    let classes = await getClasses();
    let classSection = document.getElementById("classes");
    classes.forEach((class) => 
      classSection.append(getClass(class))
    );
};

const getClass = (class) => {
    let main = document.getElementById("classes");
    let section = document.createElement("section");
    section.classList.add("class");

    h1 = document.createElement("h1");
    h1.innerText = class.title;
    main.append(h1);

    return section;
};

const toggleNav = () => {
    document.getElementById("main-nav-items").classList.toggle("hidden");
}


window.onload = () => {
    document.getElementById("nav-toggle").onclick = toggleNav;
}
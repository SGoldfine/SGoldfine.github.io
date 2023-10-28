const getCourses = async () => {
    const url = "https://sgoldfine.github.io/jsons/classes.json";
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
};

const showClasses = async () => {
    let courses = await getCourses();
    let courseSection = document.getElementById("courses");
    courses.forEach((course) => 
      courseSection.append(getCourse(course))
    );
};

const getCourse = (course) => {
    let section = document.createElement("section");
    section.classList.add("course");

    let h1 = document.createElement("h1");
    h1.innerText = course.title;
    section.append(h1);

    let details = document.createElement("classesDiv");
    details.classList.add("classes-details");
    section.append(details);

    let ul = document.createElement("ul");
    details.append(ul);

    return section;
};

const toggleNav = () => {
    document.getElementById("main-nav-items").classList.toggle("hidden");
}


window.onload = () => {
    document.getElementById("nav-toggle").onclick = toggleNav;
    showClasses();
}
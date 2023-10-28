const getCourses = async () => {
    const url = "https://sgoldfine.github.io/jsons/classes.json";
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
};

const showCourses = async () => {
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

    let details = document.createElement("courseDiv");
    details.classList.add("course-details");
    section.append(details);

    let p1 = document.createElement("p");
    p1.innerText = course.course1;
    details.append(p1);

    return section;
};

const toggleNav = () => {
    document.getElementById("main-nav-items").classList.toggle("hidden");
}


window.onload = () => {
    document.getElementById("nav-toggle").onclick = toggleNav;
    showCourses();
}
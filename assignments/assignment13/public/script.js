const showJets = async () => {
    const jetsJSON = await getJets();
    const jetsDiv = document.getElementById("jets-div");

    if(jetsJSON == "") {
        console.log("Invalid load of JSON");
        return;
    }

    jetsJSON.forEach((jet) => {
        const section = document.createElement("section");
        jetsDiv.append(section);

        const h2 = document.createElement("h2");
        h2.innerHTML = jet.name;
        section.append(h2);

        const age = document.createElement("p");
        age.innerHTML = jet.age;
        section.append(age);

        const years = document.createElement("p");
        years.innerHTML = jet.yearsInLeague;
        section.append(years);

        const pos = document.createElement("p");
        pos.innerHTML = jet.position;
        section.append(pos);

        let details = document.createElement("div");
        details.classList.add("jets-details");
        section.append(details);
    
        Object.keys(jet).forEach((key) => {
          if(key == "teams") {
            let teams = document.createElement("p");
            section.append(teams);
    
            if(Array.isArray(jet[key])) {
              teams.append(jet[key].join(", "));
            } else {
              teams.append(jet[key]);
            }
          }
        });

        const img = document.createElement("img");
        img.src = jet.img;
        section.append(img);
    });

}

const getJets = async () => {
    try {
        return (await fetch("http://localhost:3000/api/jets")).json();
    } catch(error) {
        console.log("error retrieving json");
        return "";
    }
}

window.onload = () => showJets();
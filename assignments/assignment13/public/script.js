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

        const h3 = document.createElement("h3");
        h3.innerHTML = jet.name;
        section.append(h3);

        const num = document.createElement("p");
        num.innerHTML = jet.number;
        section.append(num);

        const pos = document.createElement("p");
        pos.innerHTML = jet.position;
        section.append(pos);

        const years = document.createElement("p");
        years.innerHTML = jet.yearsInLeague;
        section.append(years);
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
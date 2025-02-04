// Превзема информации за земјата базирани на кодот на земјата.
async function fetchCountryData(code) {
    const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
    if (!response.ok) throw new Error("Country not found!");
    return await response.json();
}
//  Превзема информации за соседните земји базирани на нивните кодови.
async function fetchNeighbourData(neighbours) {
    const neighbourResponses = await Promise.all(
        neighbours.map(code => fetch(`https://restcountries.com/v3.1/alpha/${code}`))
    );
    return await Promise.all(neighbourResponses.map(res => res.json()));
}
//  Прикажува информации за земјата и нејзините соседи.
function displayCountryInfo(data, neighbours) {
    const output = document.getElementById("output");
    let outputText = `<strong>Country:</strong> ${data.name.common}<br><br><strong>Neighbours:</strong><br><br>`;

    if (neighbours.length > 0) {
        neighbours.forEach(([neighborData]) => {
            outputText += `- ${neighborData.name.common}<br>`;
        });
    } else {
        outputText += "No neighbouring countries.";
    }

    output.innerHTML = outputText;
}

//  Ажурирање мапата со координатите и името на земјата.
function updateMap(latlng, countryName) {
    if (!latlng || latlng.length !== 2) throw new Error("No coordinates found!");

    if (window.myMap) {
        window.myMap.setView(latlng, 6);
    } else {
        window.myMap = L.map('map').setView(latlng, 6);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(window.myMap);
    }

    L.marker(latlng).addTo(window.myMap)
        .bindPopup(`<b>${countryName}</b>`)
        .openPopup();
}

// Event Listener за input на код на земја
document.getElementById("countryCode").addEventListener("input", async function () {
    const code = this.value.trim().toUpperCase();
    if (code.length !== 3) return;

    const output = document.getElementById("output");
    output.innerText = "Loading...";

    try {
        // Превземај податоци за земјата и нејзините соседи
        const [data] = await fetchCountryData(code);
        const neighbours = data.borders ? await fetchNeighbourData(data.borders) : [];
        displayCountryInfo(data, neighbours);
        updateMap(data.latlng, data.name.common);
    } catch (error) {
        console.error("Error fetching data:", error);
        output.innerText = "Error fetching data.";
    }
});

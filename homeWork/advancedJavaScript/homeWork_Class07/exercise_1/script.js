// Fetch country data based on the country code
async function fetchCountryData(code) {
    if (!code || typeof code !== 'string' || code.length !== 3) {
        throw new Error("Invalid country code!");
    }
    const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
    if (!response.ok) throw new Error("Country not found!");
    return await response.json();
}

// Fetch data for neighboring countries based on their codes
async function fetchNeighbourData(neighbours) {
    if (!neighbours || neighbours.length === 0) return [];
    const neighbourResponses = await Promise.all(
        neighbours.map(code => fetch(`https://restcountries.com/v3.1/alpha/${code}`))
    );
    return await Promise.all(neighbourResponses.map(res => res.json()));
}

// Display country information and its neighbors
function displayCountryInfo(data, neighbours = []) {
    const output = document.getElementById("output");
    if (!data || !data.name || !data.name.common) {
        output.innerHTML = "Invalid country data.";
        return;
    }

    let outputText = `<strong>Country:</strong> ${data.name.common}<br><br><strong>Neighbours:</strong><br><br>`;

    if (neighbours.length > 0) {
        neighbours.forEach(([neighborData]) => {
            if (neighborData && neighborData.name && neighborData.name.common) {
                outputText += `- ${neighborData.name.common}<br>`;
            }
        });
    } else {
        outputText += "No neighbouring countries.";
    }

    output.innerHTML = outputText;
}

// Update the map with the country's coordinates and name
function updateMap(latlng, countryName) {
    if (!latlng || !Array.isArray(latlng) || latlng.length !== 2 || isNaN(latlng[0]) || isNaN(latlng[1])) {
        throw new Error("Invalid coordinates!");
    }

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

// Debounce function to limit the rate of API calls
function debounce(func, delay) {
    let debounceTimer;
    return function (...args) {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => func.apply(this, args), delay);
    };
}

// Event listener for input on the country code field
document.getElementById("countryCode").addEventListener("input", debounce(async function () {
    const code = this.value.trim().toUpperCase();
    if (code.length !== 3) return;

    const output = document.getElementById("output");
    output.innerText = "Loading...";

    try {
        // Fetch data for the country and its neighbors
        const [data] = await fetchCountryData(code);
        const neighbours = data.borders ? await fetchNeighbourData(data.borders) : [];
        displayCountryInfo(data, neighbours);
        updateMap(data.latlng, data.name.common);
    } catch (error) {
        console.error("Error fetching data:", error);
        output.innerText = "Error fetching data.";
    }
}, 300)); // Adjust debounce time as needed
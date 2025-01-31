document.getElementById("countryCode").addEventListener("input", async function () {
    // Превземи го внесениот код и трансформирај го во горни букви
    const code = this.value.trim().toUpperCase();
    if (code.length !== 3) return;

    // Покажи порака за вчитување додека се превземаат податоците
    const output = document.getElementById("output");
    output.innerText = "Loading...";

    try {
        // Превземи информации за земјата користејќи го внесениот код
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
        if (!response.ok) throw new Error("Country not found!");

        const [data] = await response.json();
        console.log("Country:", data);

        // Прикажи информации за земјата и нејзините соседи
        let outputText = `<strong>Country:</strong> ${data.name.common}<br><br><strong>Neighbours:</strong><br><br>`;
        const neighbours = data.borders || [];

        if (neighbours.length > 0) {
            // Превземи информации за соседните земји
            const neighbourResponses = await Promise.all(
                neighbours.map(code => fetch(`https://restcountries.com/v3.1/alpha/${code}`))
            );

            const neighbourDataArray = await Promise.all(neighbourResponses.map(res => res.json()));

            for (const [neighborData] of neighbourDataArray) {
                console.log(neighborData);
                outputText += `- ${neighborData.name.common}<br>`;
            }
        } else {
            outputText += "No neighbouring countries.";
        }

        output.innerHTML = outputText;

        // Додавање на мапата преку Leaflet.js
        const latlng = data.latlng || [];
        if (latlng.length !== 2) throw new Error("No coordinates found!");

        // Ако веќе има мапа, ресетирај ја
        if (window.myMap) {
            window.myMap.setView(latlng, 6);
        } else {
            window.myMap = L.map('map').setView(latlng, 6);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors'
            }).addTo(window.myMap);
        }

        // Додај маркер со popup со името на земјата
        L.marker(latlng).addTo(window.myMap)
            .bindPopup(`<b>${data.name.common}</b>`)
            .openPopup();

    } catch (error) {
        console.error("Error fetching data:", error);
        output.innerText = "Error fetching data.";
    }
});

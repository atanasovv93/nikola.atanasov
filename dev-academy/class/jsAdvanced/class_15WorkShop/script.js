document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    const resetButton = document.getElementById("reset-button");
    const europeButton = document.getElementById("europe-button");
    const neighborsButton = document.getElementById("neighbors-button");
    const macedoniaButton = document.getElementById("macedonia-button");
    const resultsContainer = document.getElementById("results-container");

    // Функција за прикажување на резултати
    function displayCountries(countries) {
        resultsContainer.innerHTML = ""; // Чистење на резултатите

        countries.forEach(country => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                <h3>${country.name.common}</h3>
                <img src="${country.flags.svg}" alt="Flag: ${country.name.common}">
                <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
                <p><strong>Capital City:</strong> ${country.capital ? country.capital[0] : "Don't have a capital city."}</p>
                <a href="https://en.wikipedia.org/wiki/${country.name.common}" target="_blank">Open on Wikipedia</a>
            `;
            resultsContainer.appendChild(card);
        });
    }

    // Функција за добивање на сите земји
    async function fetchAllCountries() {
        try {
            const response = await fetch("https://restcountries.com/v3.1/all");
            const countries = await response.json();
            displayCountries(countries);
        } catch (error) {
            console.error("Error loading countries:", error);
        }
    }

    // Функција за пребарување по име
    async function fetchCountryByName(name) {
        try {
            const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
            if (!response.ok) {
                throw new Error("The country has not been found. Please try again.");
            }
            const country = await response.json();
            displayCountries(country);
        } catch (error) {
            resultsContainer.innerHTML = `<p style="color: red;">${error.message}</p>`;
        }
    }

    // Функција за земји од Европа
    async function fetchEuropeCountries() {
        try {
            const response = await fetch("https://restcountries.com/v3.1/region/europe");
            const europeCountries = await response.json();
            displayCountries(europeCountries);
        } catch (error) {
            console.error("Error loading European countries:", error);
        }
    }

    // Функција за соседите на Македонија
    async function fetchMacedoniaNeighbors() {
        try {
            const response = await fetch("https://restcountries.com/v3.1/name/macedonia");
            const data = await response.json();
            const macedonia = data[0];

            if (!macedonia.borders) {
                resultsContainer.innerHTML = "<p>Macedonia has no neighbors in the API.</p>";
                return;
            }

            const neighbors = await Promise.all(
                macedonia.borders.map(async (code) => {
                    const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
                    return res.json();
                })
            );

            const neighborCountries = neighbors.map(n => n[0]);
            displayCountries(neighborCountries);
        } catch (error) {
            console.error("Error loading neighboring countries:", error);
        }
    }

    // Функција за прикажување на Македонија
    async function fetchMacedonia() {
        await fetchCountryByName("Macedonia");
    }

    // Лоадирај ги сите земји при вчитување на страната
    fetchAllCountries();

    // Клик на пребарување
    searchButton.addEventListener("click", () => {
        const searchValue = searchInput.value.trim();
        if (searchValue) {
            fetchCountryByName(searchValue);
        } else {
            fetchAllCountries();
        }
    });

    // Клик на ресетирање
    resetButton.addEventListener("click", () => {
        document.getElementById("search-input").value = ""; // Clear input
        fetchAllCountries(); // Reload all countries
    });   
    
    // Клик на "Countries in Europe"
    europeButton.addEventListener("click", fetchEuropeCountries);

    // Клик на "Our Neighbors"
    neighborsButton.addEventListener("click", fetchMacedoniaNeighbors);

    // Клик на "Macedonia"
    macedoniaButton.addEventListener("click", fetchMacedonia);
});

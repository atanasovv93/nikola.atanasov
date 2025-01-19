const apiURL = "https://swapi.dev/api/people/1";

const fetchDataBtn = document.getElementById("fetch-data-btn");
const characterInfoDiv = document.getElementById("character-info");

function fetchCharacterData() {
    characterInfoDiv.innerHTML = "Loading character data...";
    
    fetch(apiURL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            characterInfoDiv.innerHTML = `
                <h2>${data.name}</h2>
                <p><strong>Height:</strong> ${data.height} cm</p>
                <p><strong>Mass:</strong> ${data.mass} kg</p>
            `;
        })
        .catch(error => {
            characterInfoDiv.innerHTML = `Error fetching data: ${error.message}`;
        })
        .finally(() => {
            console.log("API call completed.");
        });
}

fetchDataBtn.addEventListener("click", fetchCharacterData);

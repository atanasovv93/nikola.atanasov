// URL на API-то
const apiUrl = "https://varline.store/api/matchlist";

// Функција за добивање и прикажување на натпреварите
async function fetchMatches() {
    try {
        const response = await fetch(apiUrl);
        const matches = await response.json();

        // Прикажи ги натпреварите
        displayMatches(matches);
    } catch (error) {
        console.error("Грешка при добивање на податоци од API:", error);
    }
}

// Функција за прикажување на натпреварите
function displayMatches(matches) {
    const container = document.getElementById('matches-container');
    container.innerHTML = ''; // Чистење на содржината пред да се додаде

    matches.forEach(match => {
        const matchDiv = document.createElement('div');
        matchDiv.classList.add('match');

        matchDiv.innerHTML = `
            <div class="teams">
            <b> ${match.home_en} </b> <span class="vs">vs</span> <b> ${match.away_en} </b>
            </div>
            <div id="result">
           <b> ${match.score_home} </b> <span>:</span> <b> ${match.score_away} </b>
            
            </div>
            <p>Спорт: ${match.sport}</p>
            <p>Лига: ${match.league_en}</p>
            <p>Држава: ${match.country}</p>
            <p>Датум и време: ${new Date(match.start).toLocaleString()}</p>
            <p>Статус: ${match.en_status}</p>
            <div class="watchlive"><a href="${match.stream}" target="popup" onclick="window.open('${match.stream}','popup','width=800,height=600'); return false;">Гледај во живо</a></div>`;

        container.appendChild(matchDiv);
    });
}

// Повикај ја функцијата за да ги прикажеш натпреварите
fetchMatches();
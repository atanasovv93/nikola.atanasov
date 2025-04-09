document.getElementById('fetchButton').addEventListener('click', function() {
    const url = 'https://eu.cdnbye.com/v1/channel';  // Заменете со вистинскиот URL

    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/x-mpegURL',
            'Accept': 'application/x-mpegURL',
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.text();  // Или response.json() ако е JSON
    })
    .then(data => {
        document.getElementById('response').textContent = data;  // Прикажи го резултатот
        console.log(data);  // Прикажи го во конзола
    })
    .catch(error => {
        console.error('Error fetching M3U list:', error);
        document.getElementById('response').textContent = 'Error fetching M3U list.';
    });
});
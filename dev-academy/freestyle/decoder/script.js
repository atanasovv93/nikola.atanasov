// Функција за преземање содржина од URL
async function fetchContent(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Не може да се преземе содржината од: ${url}`);
    }
    return await response.text();
  }
  
  // Функција за конвертирање m3u8 во m3u формат
  async function convertM3U8ToM3U(m3u8Url) {
    try {
      const m3u8Content = await fetchContent(m3u8Url);
      const lines = m3u8Content.split('\n');
      const m3uContent = [];
  
      lines.forEach(line => {
        // Игнорирајте ги коментарите и другите метаподатоци од m3u8 фајлот
        if (!line.startsWith('#') && line.trim().length > 0) {
          m3uContent.push(line.trim());
        }
      });
  
      // Прикажи го m3u фајлот
      document.getElementById('output').textContent = m3uContent.join('\n');
    } catch (error) {
      console.error('Грешка при конвертирање:', error.message);
    }
  }
  
  // Функција за повикување конверзија при клик на копчето
  function convert() {
    const urlInput = document.getElementById('urlInput').value;
    if (urlInput.trim()) {
      convertM3U8ToM3U(urlInput);
    } else {
      alert('Внесете валиден m3u8 URL');
    }
  }
  
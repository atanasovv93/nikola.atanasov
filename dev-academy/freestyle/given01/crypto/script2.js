const cryptoContainer = document.getElementById('crypto-container');
const forexTable = document.querySelector('#forex-table tbody');
const convertButton = document.getElementById('convert');
const conversionResult = document.getElementById('conversion-result');
const fromCurrency = document.getElementById('from-currency');
const toCurrency = document.getElementById('to-currency');

const apis = {
  crypto: [
    { name: 'BTC', url: 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=EUR' },
    { name: 'XRP', url: 'https://min-api.cryptocompare.com/data/price?fsym=XRP&tsyms=EUR' },
    { name: 'ADA', url: 'https://min-api.cryptocompare.com/data/price?fsym=ADA&tsyms=EUR' },
    { name: 'SOL', url: 'https://min-api.cryptocompare.com/data/price?fsym=SOL&tsyms=EUR' },
    { name: 'ETH', url: 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=EUR' },
    { name: 'VET', url: 'https://min-api.cryptocompare.com/data/price?fsym=VET&tsyms=EUR' },
    { name: 'DOT', url: 'https://min-api.cryptocompare.com/data/price?fsym=DOT&tsyms=EUR' },
    { name: 'LINK', url: 'https://min-api.cryptocompare.com/data/price?fsym=LINK&tsyms=EUR' },
    { name: 'THETA', url: 'https://min-api.cryptocompare.com/data/price?fsym=THETA&tsyms=EUR' },
    { name: 'BNB', url: 'https://min-api.cryptocompare.com/data/price?fsym=BNB&tsyms=EUR' },
    { name: 'DOGE', url: 'https://min-api.cryptocompare.com/data/price?fsym=DOGE&tsyms=EUR' },
    { name: 'ATOM', url: 'https://min-api.cryptocompare.com/data/price?fsym=ATOM&tsyms=EUR' },
    { name: 'ICP', url: 'https://min-api.cryptocompare.com/data/price?fsym=ICP&tsyms=EUR' },
    { name: 'FIL', url: 'https://min-api.cryptocompare.com/data/price?fsym=FIL&tsyms=EUR' },
    { name: 'TRX', url: 'https://min-api.cryptocompare.com/data/price?fsym=TRX&tsyms=EUR' },    
    { name: 'PEPE', url: 'https://min-api.cryptocompare.com/data/price?fsym=PEPE&tsyms=EUR' },
    { name: 'AXS', url: 'https://min-api.cryptocompare.com/data/price?fsym=AXS&tsyms=EUR' }
  ],
  forex: 'https://v6.exchangerate-api.com/v6/73e17080b39b54fbc6f83e7b/latest/MKD'
};

let exchangeRates = {};

function fetchCryptoRates() {
  apis.crypto.forEach(api => {
    fetch(api.url)
      .then(res => res.json())
      .then(data => {
        const eurRate = data.EUR;
        if (eurRate && exchangeRates['EUR']) {
          const mkdRate = eurRate * exchangeRates['EUR'];
          addCryptoToTable(api.name, mkdRate);
        }
        updateLastUpdatedTime(); // Додавање на оваа линија
      })
      .catch(err => console.error(`Грешка при фетчирање ${api.name}:`, err));
  });
}

function fetchForexRates() {
  fetch(apis.forex)
    .then(res => res.json())
    .then(data => {
      if (data.result !== 'success') {
        console.error('Грешка при добивање на податоците за обмен на валути');
        return;
      }
      exchangeRates = data.conversion_rates;
      populateCurrencySelectors();
      addForexToTable();
      fetchCryptoRates();
      updateLastUpdatedTime(); // Додавање на оваа линија
    })
    .catch(err => console.error('Грешка при фетчирање на forex rates:', err));
}

function populateCurrencySelectors() {
  const selectedCurrencies = ['MKD', 'BTC', 'ETH', 'ADA', 'EUR', 'CHF', 'GBP', 'USD']; // Додај ги само избраните валути
  selectedCurrencies.forEach(currency => {
    const option = document.createElement('option');
    option.value = currency;
    option.textContent = currency;
    fromCurrency.appendChild(option.cloneNode(true));
    toCurrency.appendChild(option.cloneNode(true));
  });
}

function addCryptoToTable(name, rate) {
  const box = document.createElement('div');
  box.className = 'crypto-box';
  box.innerHTML = `<h3>${name}</h3><p>${rate.toFixed(2)} MKD</p>`;
  cryptoContainer.appendChild(box);
}

function addForexToTable() {
  const selectedCurrencies = ['EUR', 'CHF', 'GBP', 'USD'];
  selectedCurrencies.forEach(currency => {
    if (exchangeRates[currency]) {
      const rate = 1 / exchangeRates[currency];
      const row = document.createElement('tr');
      row.innerHTML = `<td>${currency}</td><td>${rate.toFixed(2)} MKD</td>`;
      forexTable.appendChild(row);
    }
  });
}

function updateLastUpdatedTime() {
  const updateTime = document.getElementById('update-time');
  const now = new Date();
  const formattedTime = now.toLocaleString('mk-MK', { timeZone: 'CET' });
  updateTime.textContent = formattedTime;
}

convertButton.addEventListener('click', () => {
  const amount = parseFloat(document.getElementById('amount').value);
  const from = fromCurrency.value;
  const to = toCurrency.value;
  if (isNaN(amount) || !exchangeRates[from] || !exchangeRates[to]) {
    conversionResult.textContent = 'Невалиден износ или валута!';
    return;
  }
  const result = (amount * (1 / exchangeRates[from])) * exchangeRates[to];
  conversionResult.textContent = `Резултат: ${result.toFixed(2)} ${to}`;
});

fetchForexRates();

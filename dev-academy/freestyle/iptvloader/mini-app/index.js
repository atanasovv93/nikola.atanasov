import puppeteer from 'puppeteer';
import fs from 'fs';

const channels = [
 { id: 1, name: 'HBO 1', url: 'https://rds.live/hbo-hd-1/', category: 'Movies' },
    { id: 2, name: 'HBO 2', url: 'https://rds.live/hbo-2-hd/', category: 'Movies' },
    { id: 3, name: 'HBO 3', url: 'https://rds.live/hbo-3-hd/', category: 'Movies' },
    { id: 4, name: 'SkyShowTime 1', url: 'https://rds.live/skyshowtime-hd/', category: 'Movies' },
    { id: 5, name: 'SkyShowTime 2', url: 'https://rds.live/skyshowtime-2-hd/', category: 'Movies' },
    { id: 6, name: 'Cinemax 1', url: 'https://rds.live/cinemax-hd/', category: 'Movies' },
    { id: 7, name: 'Cinemax 2', url: 'https://rds.live/cinemax-2/', category: 'Movies' },
    { id: 8, name: 'BBC First', url: 'https://rds.live/bbc-first-hd/', category: 'Movies' },
    { id: 9, name: 'AMC', url: 'https://rds.live/amc/', category: 'Movies' },
    { id: 10, name: 'FilmNow', url: 'https://rds.live/film-now-ro1/', category: 'Movies' },
    { id: 11, name: 'DIVA', url: 'https://rds.live/diva/', category: 'Movies' },
    { id: 12, name: 'FilmBox', url: 'https://rds.live/filmbox/', category: 'Movies' },
    { id: 13, name: 'Filmbox Premium', url: 'https://rds.live/filmbox-premium/', category: 'Movies' },
    { id: 14, name: 'TV1000', url: 'https://rds.live/tv-1000/', category: 'Movies' },
    { id: 15, name: 'AXN', url: 'https://rds.live/axn/', category: 'Movies' },
    { id: 16, name: 'AXN White', url: 'https://rds.live/axn-white/', category: 'Movies' },
    { id: 17, name: 'AXN Black', url: 'https://rds.live/axn-black/', category: 'Movies' },
    { id: 18, name: 'AXN Spin', url: 'https://rds.live/axn-spin/', category: 'Movies' },
    { id: 19, name: 'Epic Drama', url: 'https://rds.live/epicdrama/', category: 'Movies' },
    { id: 20, name: 'Comedy Central', url: 'https://rds.live/comedy-central/', category: 'Movies' },
    { id: 21, name: 'Pro Cinema', url: 'https://rds.live/pro-cinema-1/', category: 'Movies' },
    { id: 22, name: 'Cinemaraton', url: 'https://rds.live/cinemaraton-hd/', category: 'Movies' },
    { id: 23, name: 'BollyWood TV', url: 'https://rds.live/bollywood-tv/', category: 'Movies' },
    { id: 24, name: 'BollyWood Classic', url: 'https://rds.live/bollywood-clasic-hd/', category: 'Movies' },
    { id: 25, name: 'Warner TV', url: 'https://rds.live/warner-tv/', category: 'Movies' },
    { id: 26, name: 'Prima Comedy', url: 'https://rds.live/prima-comedy/', category: 'Movies' },
    { id: 27, name: 'Film-Café', url: 'https://rds.live/film-cafe/', category: 'Movies' },
    { id: 28, name: 'PrimarSport 1', url: 'https://rds.live/primasport-1hd-ro2/', category: 'Sports' },
    { id: 29, name: 'PrimarSport 2', url: 'https://rds.live/primasport-2-hd-ro1/', category: 'Sports' },
    { id: 30, name: 'PrimarSport 3', url: 'https://rds.live/primasport-3-hd-ro1/', category: 'Sports' },
    { id: 31, name: 'DigiSport 1', url: 'https://rds.live/digisport/', category: 'Sports' },
    { id: 32, name: 'DigiSport 2', url: 'https://rds.live/digisport-2-hd-ro3/', category: 'Sports' },
    { id: 33, name: 'DigiSport 3', url: 'https://rds.live/digisport-3-hd-ro3/', category: 'Sports' },
    { id: 34, name: 'DigiSport 4', url: 'https://rds.live/digisport-4-hd-ro3/', category: 'Sports' },
    { id: 35, name: 'TVR Sport', url: 'https://rds.live/tvr-sport/', category: 'Sports' },
    { id: 36, name: 'Sport Extra', url: 'https://rds.live/sportextra-hd/', category: 'Sports' },
    { id: 37, name: 'EuroSport 1', url: 'https://rds.live/eurosport-1-hd-c1/', category: 'Sports' },
    { id: 38, name: 'EuroSport 2', url: 'https://rds.live/eurosport-2-hd-1/', category: 'Sports' },
    { id: 39, name: 'Pro Arena', url: 'https://rds.live/pro-arena-hd-2/', category: 'Sports' },
    { id: 42, name: 'Atomic', url: 'https://rds.live/atomic/', category: 'Music' },
    { id: 43, name: 'Hit Music Channel', url: 'https://rds.live/hit-music-channel-2/', category: 'Music' },
    { id: 45, name: 'Magic TV', url: 'https://rds.live/magic-tv/', category: 'Music' },
    { id: 46, name: 'Tv Folclor', url: 'https://rds.live/tvr-folclor-hd/', category: 'Music' },
    { id: 47, name: 'Balcan Music', url: 'https://rds.live/balcan-music-tv/', category: 'Music' },
    { id: 48, name: 'ZU TV', url: 'https://rds.live/zu-tv/', category: 'Music' },
    { id: 49, name: 'MTV', url: 'https://rds.live/mtv/', category: 'Music' },
    { id: 50, name: 'MTV 80\'s', url: 'https://rds.live/mtv-80s/', category: 'Music' },
    { id: 51, name: 'Party Mix', url: 'https://rds.live/party-mix/', category: 'Music' },
    { id: 52, name: 'MRT 1', url: 'https://tvstanici.net/mrt-1-zivo/', category: 'MKD' },
    { id: 53, name: 'Sitel TV', url: 'https://tvstanici.net/sitel-vo-zivo/', category: 'MKD' },
    { id: 54, name: 'Kanal 5', url: 'https://tvstanici.net/kanal5-vo-zivo/', category: 'MKD' },
    { id: 55, name: 'Telma TV', url: 'https://tvstanici.net/telma-vo-zivo/', category: 'MKD' },
    { id: 56, name: 'Alfa TV', url: 'https://tvstanici.net/alfa-vo-zivo/', category: 'MKD' },
    { id: 57, name: '24 Vesti', url: 'https://tvstanici.net/24-vesti-vo-zivo/', category: 'MKD' },
    { id: 58, name: 'Nova TV', url: 'https://tvstanici.net/nova-vesti-vo-zivo/', category: 'MKD' },
    { id: 59, name: 'Balkan Web', url: 'https://tvstanici.net/balkan-web-vo-zivo/', category: 'MKD' }
];


(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const networkRequests = new Set(); // Низа која ќе содржи само уникатни URL адреси

    page.on('request', request => {
        console.log(`Request: ${request.url()} (${request.resourceType()})`);

        if ((request.resourceType() === 'xhr' || request.resourceType() === 'fetch') && request.url().includes('mono.m3u8')) {
            if (!networkRequests.has(request.url())) {
                networkRequests.add(request.url());  // Додавање на URL-то во Set за уникатност
                console.log(`New request saved: ${request.url()}`);

                // Форматирање на линкот во посакуваниот формат
                const m3uContent = [
                    `#EXTINF:0 type="stream" channelId="${channels[networkRequests.size - 1].id}" group="${channels[networkRequests.size - 1].category}", ${channels[networkRequests.size - 1].name}`,
                    request.url()
                ];

                // Препраќање на податоците на сервер
                sendDataToServer(request.url());

                // Запишување на форматираниот линк во .m3u фајлот
                fs.appendFileSync('network_requests.m3u', m3uContent.join('\n') + '\n', 'utf8');
            } else {
                console.log(`Duplicate request detected, skipping: ${request.url()}`);
            }
        }
    });

    // Функција за испраќање податоци на сервер
    async function sendDataToServer(url) {
        const data = { url: url, timestamp: new Date().toISOString() };

        try {
            const response = await fetch('https://yourserver.com/api/receiveData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data), // Препраќање на податоците како JSON
            });

            if (response.ok) {
                console.log(`Data sent successfully: ${url}`);
            } else {
                console.log(`Error sending data: ${response.status}`);
            }
        } catch (error) {
            console.log(`Error sending data: ${error}`);
        }
    }

    // Прелетување низ сите канали
    for (let channel of channels) {
        console.log(`Navigating to ${channel.name}: ${channel.url}`);
        await page.goto(channel.url, { waitUntil: 'networkidle2' });
        await new Promise(resolve => setTimeout(resolve, 5000));
    
        // Проверка дали постои video-placeholder
        const videoPlaceholder = await page.$('.video-placeholder');
        if (videoPlaceholder) {
            await videoPlaceholder.click();
            console.log('Clicked on video placeholder.');
        } else {
            console.log('No video placeholder found. Checking if the video is already playing...');
            
            // Проверка дали видеото се пушта автоматски
            const isPlaying = await page.evaluate(() => {
                const video = document.querySelector('video');
                return video && !video.paused; // Ако постои видео и не е паузирано, значи се пушта
            });
    
            if (isPlaying) {
                console.log('Video is already playing (autoplay enabled).');
            } else {
                console.log('No video detected. There might be an issue.');
            }
        }
    
        await new Promise(resolve => setTimeout(resolve, 10000));
    }
    
    await browser.close();
})();
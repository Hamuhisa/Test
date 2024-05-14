const axios = require('axios');

const soccerApiBaseUrl = 'https://soccer.sportmonks.com/api/v2.0';
const apiToken = 'g2Ukf5aqiOMQQ7AQazkyFCWrPMxtMBTyFJ4ytEonbJpTFhQ0sDYxdjMMN3H9';

async function getFixturesToday() {
    try {
        const response = await axios.get(`${soccerApiBaseUrl}/fixtures/date/today`, {
            params: {
                api_token: apiToken,
                include: 'localTeam,visitorTeam'
            }
        });

        const fixtures = response.data.data;
        fixtures.forEach(f => {
            console.log(`${f.localTeam.data.name} plays at home against ${f.visitorTeam.data.name}`);
        });
    } catch (error) {
        console.error('Error fetching fixtures:', error.message);
        console.error('Details:', error.response.data);
    }
}

getFixturesToday();
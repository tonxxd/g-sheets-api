import axios from 'axios';

const gsheetsAPI = function(sheetId) {

    try {
      const sheetsUrl = `https://spreadsheets.google.com/feeds/cells/${sheetId}/1/public/values?alt=json-in-script`;

      return axios.get(sheetsUrl)
      .then(response => {
        return response.data;
      })
      .then(resultText => {
        const formattedText = resultText.replace('gdata.io.handleScriptLoaded(','').slice(0, -2);
        return JSON.parse(formattedText);
      });

    } catch(err) {
      console.log(`gsheetsAPI error: ${err}`);

      return {};
    }
};

export default gsheetsAPI;

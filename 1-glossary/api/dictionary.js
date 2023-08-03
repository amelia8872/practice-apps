const axios = require('axios');




let getDefinitionByWord = (word, callback) => {


  let options = {
    method: 'GET',
    url: 'https://wordsapiv1.p.rapidapi.com/words/${word}/definitions',
    headers: {
      'X-RapidAPI-Key': '49680fe8dbmshedc46181bd92be8p173c9ejsn6abdddf1ce91',
      'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
    }
  }

  axios.get(options)
    .then((res) => {
      const words = res.data;
      callback(null, words);
    })
    .catch((err) => {
      console.log("Error finding word!")
      callback(err);
    });

}





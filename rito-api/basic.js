var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/junindobalaco2',
  'headers': {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.129 Safari/537.36',
    'Accept-Language': 'en-US,en;q=0.9',
    'Accept-Charset': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Origin': 'https://developer.riotgames.com',
    'X-Riot-Token': 'RGAPI-4686c40e-4896-4b87-8ca1-30b839328a23'
  }
};

request(options, function (error, response) { 
  if (error) throw new Error(error);
  resp = (response.body);
  console.log(resp)
});

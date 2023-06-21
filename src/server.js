require('dotenv').config();

const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;
const apiKey = process.env.API_KEY;

let apiCallsToday = 0;

app.use(express.static('src/public'));

// Middleware to limit API calls
app.use((req, res, next) => {
  if (apiCallsToday >= 99) {
    return res.status(429).send('Too many API requests');
  }
  next();
});

// Increment the API call counter
function incrementApiCalls() {
  apiCallsToday++;
  // Reset the counter at midnight
  const now = new Date();
  const millisUntilMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1) - now;
  setTimeout(() => { apiCallsToday = 0; }, millisUntilMidnight);
}

// Route to search for titles
app.get('/search/:query', async (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://unogs-unogs-v1.p.rapidapi.com/search/titles',
    params: {
      title: req.params.query,
      limit: '5'
    },
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'unogs-unogs-v1.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred');
  }
  incrementApiCalls();
});

// Route to get title details
app.get('/details/:id', async (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://unogs-unogs-v1.p.rapidapi.com/title/countries',
    params: {
      netflix_id: req.params.id
    },
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'unogs-unogs-v1.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred');
  }
  incrementApiCalls();
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
'use strict';

const express = require('express');
require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3001;

// 2. As user, I want to enter name of location so I can see data about area of interest to me.
// Create a route with a method of get and a path of /location. The route callback should invoke a function to convert the search query to a latitude and longitude. The function should use the provided JSON data.
app.get('/location', (request, response) => {
  response.send('hello');
  // call function to convert search query to lat and long
});

// A constructor function will ensure that each object is created according to the same format when your server receives the external data. Ensure your code base uses a constructor function for this resource.

// Return an object which contains the necessary information for correct client rendering. See the sample response.

// Deploy your updated express server to Heroku.

// Confirm that your route is responding as expected by entering your deployed backend URL on the City Explorer app's welcome page. Then search for a location. You should see the map, but not any other data yet.


// 3. As user, I want to request current weather info for location entered
// Create route with method get and path of /weather. Use provided JSON

//  Constructor to run received data's objects through

// Return array of objects for each day of response which contains info for correct rendering

// Deploy to Heroku


// 4. As user, I want clear messages if something goes wrong so I know to make changes or try again in different manner

// Create function to handle errors from any API call

// Send status 500 and error to client

// Deploy to Heroku

// Search for invalid location to confirm

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});


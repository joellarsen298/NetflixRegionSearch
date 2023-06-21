# Netflix Region Search Application

This is a Node.js application that interacts with the uNoGs API from RapidAPI to provide search functionality for movie titles. This includes information about region availability, language, audio description, and subtitles.

## Live Demo

You can access the live version of the app deployed on Heroku [here](https://netflix-region-search-54e6b684ec89.herokuapp.com).

## Running Locally

If you prefer to run the application locally, you will need to provide your own uNoGs API key. Here's how you can do that:

1. **Get a uNoGs API Key**

   - To get an API key for Unogs, sign up for an account on RapidAPI.
   - Navigate to the uNoGs API and subscribe to the free plan (limit of 100 requests per day).
   - After subscribing, you should have access to your API key.

2. **Clone the Repository**

   - To get a local copy of the code, clone the repository using Git:
     ```bash
     git clone https://github.com/joellarsen298/NetflixRegionSearch.git
     ```
   - Navigate into the cloned directory:
     ```bash
     cd NetflixRegionSearch
     ```

3. **Set Up Your API Key**

   - Create a `.env` file at the root of the project:
     ```bash
     touch .env
     ```
   - Open the file and add your Unogs API key:
     ```makefile
     API_KEY=yourapikey
     ```
     This sets up an environment variable named `API_KEY` that the application will use when making requests to the uNoGs API.

4. **Install Dependencies**

   - You will need to install the project's dependencies using npm:
     ```bash
     npm install
     ```

5. **Run the Application**

   - After you've set up your API key and installed the dependencies, you can start the application:
     ```bash
     npm start
     ```
   - You should see output telling you the application is running and listening on a port, and you can open your web browser to that address to interact with the application.

const searchBar = document.getElementById('searchBar');
const searchButton = document.getElementById('searchButton');
const searchResults = document.getElementById('searchResults');
const titleDetails = document.getElementById('titleDetails');

// Function to fetch search results from the API
async function getSearchResults(query) {
  const response = await fetch(`/search/${query}`);
  const data = await response.json();
  return data.results;
}

// Function to fetch title details from the API
async function getTitleDetails(id) {
  const response = await fetch(`/details/${id}`);
  const data = await response.json();
  return data;
}

// Function to display search results
function displayResults(results) {
  searchResults.innerHTML = '';
  titleDetails.innerHTML = '';

  results.forEach(result => {
    const resultItem = document.createElement('div');
    const image = document.createElement('img');
    image.src = result.img;
    const title = document.createElement('p');
    title.textContent = result.title;

    resultItem.appendChild(image);
    resultItem.appendChild(title);

    // Add click event listener
    resultItem.addEventListener('click', async () => {
      // Clear the search results
      searchResults.innerHTML = '';

      // Fetch and display the details of the clicked title
      const details = await getTitleDetails(result.netflix_id);
      displayDetails(details);
    });

    searchResults.appendChild(resultItem);
  });
}

// Function to display title details
function displayDetails(details) {
  // console.log(details);  // Debugging line

  titleDetails.innerHTML = '';

  details.results.forEach(result => {
    const country = result.country || '';
    const audio = result.audio || '';
    const subtitle = result.subtitle || '';

    const detailsDiv = document.createElement('div');
    detailsDiv.textContent = `Country: ${country}, Audio: ${audio}, Subtitle: ${subtitle}`;

    titleDetails.appendChild(detailsDiv);
  });
}

// Add click event listener to the search button
searchButton.addEventListener('click', async () => {
  const query = searchBar.value;
  const results = await getSearchResults(query);
  displayResults(results);
});





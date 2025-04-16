/**
 * Array of bioluminescent locations with details such as name, country, organism, best time to visit, image URL, fun fact, and coordinates
 */
const locations = [
  {
    name: "Mosquito Bay", 
    country: "Puerto Rico", 
    organism: "Dinoflagellates", 
    bestTime: "December to March", 
    imageURL: "https://storage.googleapis.com/clio-images/large_1031_d1ab8472-0256-4dfd-8626-c7c1692487fc.jpg", 
    fact: "Each dinoflagellate emitting a stunning blue glow when disturbed.",
    lat: 18.1015, 
    lng: -65.4567
  },
  {
    name: "Toyama Bay", 
    country: "Japan",
    organism: "Firefly Squid",
    bestTime: "March to June", 
    imageURL: "https://japandeluxetours.com/uploads/2015/08/20150817181422_55d278de04ef9.jpg", 
    fact: "Firefly squid light up the shoreline during spawning season.",
    lat: 36.8085,
    lng: 137.1766 
  },
  {
    name: "Waitomo Caves", 
    country: "New Zealand", 
    organism: "Glowworms", 
    bestTime: "Year-round", 
    imageURL: "https://www.treehugger.com/thmb/wsq7P4GhMkAv7R2U4_rKF8RulsI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__treehugger__images__2015__08__joseph-michael-glowworm-cave-photos-1-1402d1dd9f0746f181f4253cde791bd6.jpg",
    fact: "Glowworms create a galaxy ceiling inside the caves.", 
    lat: -38.261894, 
    lng: 175.1113 
  },
  {
    name: "Luminous Lagoon", 
    country: "Jamaica", 
    organism: "Dinoflagellates", 
    bestTime: "Year-round", 
    imageURL: "https://bestjamaicatravelguide.com/wp-content/uploads/2024/10/tenweb_media_LvQRSJT0.webp", 
    fact: "This lagoon glows when you swim or splash, and boat tours even let you jump in to experience the glow firsthand", 
    lat: 18.4836, 
    lng: -77.62791 
  },
  {
    name: "Halong Bay", 
    country: "Vietnam", 
    organism: "Dinoflagellates", 
    bestTime: "May to October", 
    imageURL: "https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2022/01/Ha-Long-Bay-B.jpeg", 
    fact: "Dinoflagellates make the emerald waters come alive in the dark.", 
    lat: 20.9101, 
    lng: 107.1839 
  },
  {
    name: "Vaadhoo Island", 
    country: "Maldives", 
    organism: "Phytoplankton", 
    bestTime: "Late summer to early winter", 
    imageURL: "https://content.madlymaldives.com/wp-content/uploads/2023/11/Sea-of-Stars-in-Maldives.jpg", 
    fact: "Caused by phytoplankton reacting to movement in the water, turning the shoreline into a surreal galaxy.", 
    lat: 5.7544, 
    lng: 72.9926 
  },
];

/**
 * Function to display cards for each location
 */
function showCards() {
  const cardContainer = document.getElementById("card-container"); // Get the container for cards
  cardContainer.innerHTML = ""; // Clear any existing cards
  const templateCard = document.querySelector(".card"); // Get the template card element

  for (let i = 0; i < locations.length; i++) { // Loop through each location
    const spot = locations[i]; // Get the current location
    const nextCard = templateCard.cloneNode(true); // Clone the template card
    editCardContent(nextCard, spot); // Edit the content of the cloned card
    cardContainer.appendChild(nextCard); // Add the card to the container
  }
}

/**
 * Function to edit the content of a card
 */
function editCardContent(card, spot) {
  card.style.display = "block"; // Make the card visible

  const cardHeader = card.querySelector("h2"); // Get the card's header element
  cardHeader.textContent = spot.name; // Set the header text to the location name

  const cardImage = card.querySelector("img"); // Get the card's image element
  cardImage.src = spot.imageURL; // Set the image source to the location's image URL
  cardImage.alt = spot.name + " Image"; // Set the image alt text

  const listItems = card.querySelectorAll("ul li"); // Get all list items in the card
  listItems[0].textContent = "Country: " + spot.country; // Set the first list item to the country
  listItems[1].textContent = "Organism: " + spot.organism; // Set the second list item to the organism
  listItems[2].textContent = "Best Time: " + spot.bestTime; // Set the third list item to the best time
  listItems[3].textContent = "Fun Fact: " + spot.fact; // Set the fourth list item to the fun fact

  const infoButton = card.querySelector(".info-btn"); // Get the info button element
  const infoDropdown = card.querySelector(".info-dropdown"); // Get the info dropdown element
  const removeButton = card.querySelector(".remove-btn"); // Get the remove button element

  infoButton.addEventListener("click", () => { // Add a click event listener to the info button
    if (infoDropdown.style.display === "none") { // Check if the dropdown is hidden
      infoDropdown.style.display = "block"; // Show the dropdown
    } else {
      infoDropdown.style.display = "none"; // Hide the dropdown
    }
  });

  removeButton.addEventListener("click", () => { // Add a click event listener to the remove button
    card.remove(); // Remove the card from the DOM
  });

  console.log("card loaded:", spot.name); // Log the card's name to the console
}

/**
 * Function to toggle dark mode on the page
 */
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode"); // Toggle the dark-mode class on the body
}

// Add an event listener to call showCards when the page is loaded
document.addEventListener("DOMContentLoaded", showCards);

// Add an event listener to initialize the map when the page is loaded
document.addEventListener("DOMContentLoaded", () => {
  showCards(); // Call showCards to display the cards
  initializeMap(); // Call initializeMap to set up the map
});

/**
 * Function to initialize the map and add markers for each location
 */
function initializeMap() {
  const map = L.map("map").setView([20, 0], 2); // Create a map centered at latitude 20, longitude 0 with zoom level 2

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { // Add a tile layer to the map
    attribution: "Map data © OpenStreetMap contributors", // Attribution for the map data
  }).addTo(map); // Add the tile layer to the map

  locations.forEach((place) => { // Loop through each location
    if (place.lat && place.lng) { // Check if the location has valid coordinates
      L.marker([place.lat, place.lng]) // Create a marker at the location's coordinates
        .addTo(map) // Add the marker to the map
        .bindPopup(`<strong>${place.name}</strong><br>${place.country}`); // Bind a popup with the location's name and country
    }
  });
}
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("email-form");
  const input = document.getElementById("email-input");
  const message = document.getElementById("email-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    message.style.display = "block";
    input.value = "";
    console.log(`User subscribed with email: ${input.value}`);
  });
});

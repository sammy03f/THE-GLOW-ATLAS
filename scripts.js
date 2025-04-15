/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

const FRESH_PRINCE_URL =
  "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg";
const CURB_POSTER_URL =
  "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg";
const EAST_LOS_HIGH_POSTER_URL =
  "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";

  const locations = [
    {
      name: "Mosquito Bay",
      country: "Puerto Rico",
      organism: "Dinoflagellates",
      bestTime: "December to March",
      imageURL: "https://thevimagazine.com/app/uploads/2015/05/Mosquito-Bay-Vieques-Puerto-Rico-720x480.jpg",
      fact: "Each dinoflagellate emitting a stunning blue glow when disturbed."
    },
    {
      name: "Toyama Bay",
      country: "Japan",
      organism: "Firefly Squid",
      bestTime: "March to June",
      imageURL: "https://static1.thetravelimages.com/wordpress/wp-content/uploads/2024/10/bioluminescence-in-the-maldives.jpg",
      fact: "Firefly squid light up the shoreline during spawning season."
    },
    {
      name: "Waitomo Caves",
      country: "New Zealand",
      organism: "Glowworms",
      bestTime: "Year-round",
      imageURL: "https://img.etimg.com/thumb/msid-114977866,width-480,height-360,imgsize-1852551,resizemode-75/unreal-destinations.jpg",
      fact: "Glowworms create a galaxy-like ceiling inside the caves."
    },
    {
      name: "Luminous Lagoon",
      country: "Jamaica",
      organism: "Dinoflagellates",
      bestTime: "Year-round",
      imageURL: "https://media.cntraveler.com/photos/5d2f6e88df6fd60009a3a553/4:3/w_1600%2Cc_limit/Luminous-Lagoon-lagoon-GettyImages-949471500.jpg",
      fact: "This lagoon glows when you swim or splash, and boat tours even let you jump in to experience the glow firsthand—one of the few places in the world where this is possible!"
    },
    {
      name: "Halong Bay",
      country: "Vietnam",
      organism: "Dinoflagellates",
      bestTime: "May to October",
      imageURL: "https://vietreader.com/uploads/posts/2021-03/1617181412_bi-luminescent-bay-vietnam.jpg",
      fact: "Paddle through the caves at night to witness glowing ripples trailing your kayak—bioluminescent dinoflagellates make the emerald waters come alive in the dark."
    },
    {
      name: "Vaadhoo Island",
      country: "Maldives",
      organism: "Phytoplankton",
      bestTime: "Late summer to early winter",
      imageURL: "https://www.wondersofnature.net/uploads/1/2/3/6/12366302/1348403569.jpg",
      fact: "Also called the Sea of Stars, the glowing waves on this beach are caused by phytoplankton reacting to movement in the water—turning the shoreline into a surreal galaxy."
    },
  ];
// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < locations.length; i++) {
    const spot = locations[i];
    const nextCard = templateCard.cloneNode(true);
    editCardContent(nextCard, spot);
    cardContainer.appendChild(nextCard);
  }
}

function editCardContent(card, spot) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = spot.name;

  const cardImage = card.querySelector("img");
  cardImage.src = spot.imageURL;
  cardImage.alt = spot.name + " Image";

  const listItems = card.querySelectorAll("ul li");
  listItems[0].textContent = "Country: " + spot.country;
  listItems[1].textContent = "Organism: " + spot.organism;
  listItems[2].textContent = "Best Time: " + spot.bestTime;
  listItems[3].textContent = "Fun Fact: " + spot.fact;


  const infoButton = card.querySelector(".info-btn");
  const infoDropdown = card.querySelector(".info-dropdown");

  infoButton.addEventListener("click", () => {
    if (infoDropdown.style.display === "none") {
      infoDropdown.style.display = "block";
    } else {
      infoDropdown.style.display = "none";
    }
  });

  console.log("card loaded:", spot.name);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!"
  );
}

function removeLastCard() {
  titles.pop(); // Remove last item in titles array
  showCards(); // Call showCards again to refresh
}

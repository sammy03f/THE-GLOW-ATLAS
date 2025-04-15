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

  const locations = [
    {
      name: "Mosquito Bay",
      country: "Puerto Rico",
      organism: "Dinoflagellates",
      bestTime: "December to March",
      imageURL: "https://storage.googleapis.com/clio-images/large_1031_d1ab8472-0256-4dfd-8626-c7c1692487fc.jpg",
      fact: "Each dinoflagellate emitting a stunning blue glow when disturbed."
    },
    {
      name: "Toyama Bay",
      country: "Japan",
      organism: "Firefly Squid",
      bestTime: "March to June",
      imageURL: "https://japandeluxetours.com/uploads/2015/08/20150817181422_55d278de04ef9.jpg",
      fact: "Firefly squid light up the shoreline during spawning season."
    },
    {
      name: "Waitomo Caves",
      country: "New Zealand",
      organism: "Glowworms",
      bestTime: "Year-round",
      imageURL: "https://www.treehugger.com/thmb/wsq7P4GhMkAv7R2U4_rKF8RulsI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__treehugger__images__2015__08__joseph-michael-glowworm-cave-photos-1-1402d1dd9f0746f181f4253cde791bd6.jpg",
      fact: "Glowworms create a galaxy-like ceiling inside the caves."
    },
    {
      name: "Luminous Lagoon",
      country: "Jamaica",
      organism: "Dinoflagellates",
      bestTime: "Year-round",
      imageURL: "https://suzettetoursjamaica.com/wp-content/uploads/2023/02/luminous.jpeg",
      fact: "This lagoon glows when you swim or splash, and boat tours even let you jump in to experience the glow firsthand—one of the few places in the world where this is possible!"
    },
    {
      name: "Halong Bay",
      country: "Vietnam",
      organism: "Dinoflagellates",
      bestTime: "May to October",
      imageURL: "https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2022/01/Ha-Long-Bay-B.jpeg",
      fact: "Paddle through the caves at night to witness glowing ripples trailing your kayak—bioluminescent dinoflagellates make the emerald waters come alive in the dark."
    },
    {
      name: "Vaadhoo Island",
      country: "Maldives",
      organism: "Phytoplankton",
      bestTime: "Late summer to early winter",
      imageURL: "https://content.madlymaldives.com/wp-content/uploads/2023/11/Sea-of-Stars-in-Maldives.jpg",
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

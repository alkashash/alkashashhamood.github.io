// Define the list of prices for the item
const priceList = [9.99, 14.99, 19.99, 24.99, 29.99];

// Select a random correct price from the list
let correctPrice = priceList[Math.floor(Math.random() * priceList.length)];

// Get references to the DOM elements
const prices = document.querySelectorAll(".price");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

// Define a function to play the game
function playGame() {
  // Reset the message and play again button
  message.textContent = "";
  playAgainButton.style.display = "none";

  // Display the image of the item
  const itemImage = document.createElement("img");
  itemImage.src = "item.jpg";
  const itemContainer = document.querySelector(".item");
  itemContainer.appendChild(itemImage);

  // Display the four prices as buttons
  const shuffledPrices = shuffleArray(priceList).slice(0, 4);
  prices.forEach((priceButton, index) => {
    priceButton.textContent = "$" + shuffledPrices[index];
    priceButton.addEventListener("click", () => {
      const selectedPrice = shuffledPrices[index];
      if (selectedPrice === correctPrice) {
        message.textContent = "Congratulations, you guessed the correct price!";
        playAgainButton.style.display = "block";
      } else {
       
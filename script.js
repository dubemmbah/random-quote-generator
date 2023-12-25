"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const adviceElement = document.querySelector(".advice");
  const dice = document.querySelector(".dice");

  //   Function to generate a random quote
  const fetchRandomQuote = async function () {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      return data.content;
    } catch (error) {
      console.log("Error fetching quote:", error);
    }
  };
  fetchRandomQuote();

  // Function to update the advice text
  const updateAdvice = async () => {
    const randomQuote = await fetchRandomQuote();
    adviceElement.textContent = `"${randomQuote}"`;
  };

  //Event listener for the dice button click
  dice.addEventListener("click", updateAdvice);

  //   Initial advice fetch on page load
  updateAdvice();
});

// document.addEventListener("DOMContentLoaded", () => {
//   const adviceElement = document.querySelector(".advice");
//   const dice = document.querySelector(".dice");

//   //   Function to generate random quote
//   const fetchRandomQuote = async () => {
//     try {
//       const response = await fetch("https://api.quotable.io/random");
//       const data = await response.json();
//       return data.content;
//     } catch (error) {
//       console.log("Error fetching error:", error);
//     }
//   };

//   //   Function to update advice element
//   const updateAdvice = async function () {
//     const randomQuote = await fetchRandomQuote();
//     adviceElement.textContent = `"${randomQuote}"`;
//   };

//   //   Functionality on dice button
//   dice.addEventListener("click", updateAdvice);

//   //   Initial advice fetch on page load
//   updateAdvice();
// });

"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const heading = document.querySelector(".heading");
  const adviceElement = document.querySelector(".advice");
  const dice = document.querySelector(".dice");
  const spinner = document.querySelector(".spinner-wrapper");
  const adviceNumber = document.querySelector(".heading span");

  let number = 0;

  //   Function to generate a random quote
  const fetchRandomQuote = async function () {
    spinner.classList.remove("hidden");
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      return data.content;
    } catch (error) {
      console.log("Error fetching quote:", error);
    }
  };

  // Function to update the advice text
  const updateAdvice = async () => {
    number++;
    resetAdvice();
    adviceNumber.textContent = number;
    const randomQuote = await fetchRandomQuote();
    adviceElement.textContent = `"${randomQuote}"`;
    heading.textContent = `Advice #${number}`;
    spinner.classList.add("hidden");
  };

  //Event listener for the dice button click
  dice.addEventListener("click", function () {
    resetAdvice();
    setTimeout(updateAdvice, 2000);
  });

  //   Reset Advice
  const resetAdvice = function () {
    spinner.classList.remove("hidden");
    heading.innerHTML = "";
    adviceElement.textContent = "";
  };

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

// Step 1: Select the elements from HTML
const inputField = document.getElementById("input"); 
const convertButton = document.querySelector("button"); 
const resultArea = document.querySelector(".result p"); 

// Step 2: Set the exchange rate (USD to PKR)
const exchangeRate = 280; 

// Step 3: Add a click event to the button
convertButton.addEventListener("click", function () {
    // Step 4: Get the value entered by the user
    const usdAmount = parseFloat(inputField.value); // convert input to a number

    // Step 5: Check if input is valid
    if (isNaN(usdAmount)) {
        resultArea.textContent = "Please enter a valid number.";
        return;
    }

    // Step 6: Calculate PKR
    const pkrAmount = usdAmount * exchangeRate;

    // Step 7: Show the result
    resultArea.innerText = `${usdAmount} USD = ${pkrAmount} PKR`;
});

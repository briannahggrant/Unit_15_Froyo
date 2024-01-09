let flavorCount = {};

function processFlavors() {
  let userInput = prompt("Please enter a list of comma-separated froyo flavors:");

  if (userInput) {
    let flavorsArray = userInput.split(',').map(flavor => flavor.trim());

    flavorsArray.forEach(flavor => {
      flavorCount[flavor] = (flavorCount[flavor] || 0) + 1;
    });

    console.log('Flavor Counts:');
    console.table(flavorCount);

    // Display the updated counts in a
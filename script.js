const makeChange = (c) => {
  // Initialize coin values
  const coins = {
    q: 25, // Quarter
    d: 10, // Dime
    n: 5,  // Nickel
    p: 1   // Penny
  };

  // Calculate the number of each coin
  const change = {};
  for (let coin in coins) {
    change[coin] = Math.floor(c / coins[coin]);
    c %= coins[coin];
  }

  return change;
};

// Do not change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(Number(c))));

let atm = 1576;
let amount = prompt("Enter how much money you would like to withdraw");

function withdrawMoney(amount) {
  if (amount > atm) {
    alert("Not enough money");
  } else {
    atm -= amount;
    alert("You withdrew " + amount + " dollars, and you have " + atm + " dollars left on your account");
  }
}

withdrawMoney(amount);

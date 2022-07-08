//Uso practico de Cousure

function moneyBox() {
   let saveCoins = 0; 
   function countCoins(coins) {
      saveCoins += coins;
      console.log(`MoneyBox $${saveCoins}`);
     };
    return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(7);
myMoneyBox(9);

const moneyBoxAna = moneyBox();
moneyBoxAna(20);
moneyBoxAna(16);
moneyBoxAna(3);
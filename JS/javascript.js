function obliczBMI() {
  event.preventDefault();
  var waga = document.getElementById("waga").value;
  var wzrost = document.getElementById("wzrost").value;
  wzrost = Math.pow(wzrost / 100, 2);
  var BMI = waga / wzrost;

  var wynik = document.getElementById("wynik-bmi");
  wynik.innerHTML = BMI.toFixed(2);
}

//

function convertCurrency() {
  var amount = parseFloat(document.getElementById("amount").value);
  var fromCurrency = document.getElementById("from").value;
  var toCurrency = document.getElementById("to").value;

  var rate = getExchangeRate(fromCurrency, toCurrency);
  var convertedAmount = amount * rate;

  document.getElementById("result").innerHTML =
    convertedAmount.toFixed(2) + " " + toCurrency;
}

function getExchangeRate(fromCurrency, toCurrency) {
  var exchangeRates = {
    PLN: {
      PLN: 1,
      USD: 0.26,
      EUR: 0.22,
    },
    USD: {
      PLN: 3.85,
      USD: 1,
      EUR: 0.85,
    },
    EUR: {
      PLN: 4.54,
      USD: 1.18,
      EUR: 1,
    },
  };

  return exchangeRates[fromCurrency][toCurrency];
}

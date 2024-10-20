currencyFrom = document.getElementById("currency-one")
currencyTo = document.getElementById("currency-two")
exchangeRateResult = document.getElementById("amount-two");



  convertBtn = document.getElementById("swap");

  convertBtn.addEventListener("click", e =>{
    convertCurrency();
  })

  function convertCurrency() {
    const amount = document.getElementById("amount-one")
    let amountVal = amount.value;

    if (amountVal == "" || amountVal == "0") {
        amount.value = "1";
        amountVal = 1;
    }

    let url = `https://v6.exchangerate-api.com/v6/14ad13b904e4f68ffe4a03b6/latest/${currencyFrom.value}`;
    fetch(url).then(response => response.json()).then(result => {
        let exchangeRate = result.conversion_rates[currencyTo.value];
        let totalExchangeValue = (amountVal * exchangeRate).toFixed(2);
        exchangeRateResult.value = totalExchangeValue;
    })
  }
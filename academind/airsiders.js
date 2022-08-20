const rates = [
  { from: "CZK", to: "GBP", rate: 0.035 },
  { from: "USD", to: "EUR", rate: 0.82 },
  { from: "EUR", to: "CZK", rate: 26.28 },
  { from: "CZK", to: "USD", rate: 0.038 },
];

function convert(from_currency, to_currency, amount) {
  let payLoad = {
    fromCurrency: from_currency,
    toCurrency: to_currency,
    enteredAmnt: amount,
  };

  const rateCal = rates.filter((val) => {
    if (payLoad.fromCurrency === val.from && payLoad.toCurrency === val.to) {
      return val;
    }
    return null;
  });
  const answ = payLoad.enteredAmnt * rateCal[0].rate;
  console.log("value ===>", answ);
  return answ;
}

const converted = convert("USD", "EUR", 100); // converted === 82

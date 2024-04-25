// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    // return the dollar value
    return valueInDollar;
}
const fromDollarToYen = (valueInDollar) => {
    let valueInEuro = valueInDollar / oneEuroIs.USD;
    let valueInYen = valueInEuro * oneEuroIs.JPY;
    return valueInYen
}

const fromYenToPound = (valueInYen) => {
    let valueInEuro = valueInYen / oneEuroIs.JPY; 
    let valueInPound = valueInEuro * oneEuroIs.GBP;
    return valueInPound
}

module.exports={fromEuroToDollar, fromDollarToYen, fromYenToPound}
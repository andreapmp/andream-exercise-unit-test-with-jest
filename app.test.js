test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07; 
    expect(dollars).toBe(expected);
})

test("One Euro should be 1.07 Dollars and 156.5 Yen", function () {
    const { fromDollarToYen } = require('./app.js');
    const yen = fromDollarToYen(5);
    const expected = (5 / 1.07) * 156.5;
    expect(yen).toBe(expected);
})

test("One Euro should be 156.5 Yen and 0.87 Pound", function () {
    const { fromYenToPound }  = require ('./app.js');
    const pound = fromYenToPound(8);
    const expected = (8 / 156.5) * 0.87;
    expect(pound).toBe(expected);
})
// celsius to fahrenheit

function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9) / 5 + 32;
    return fahrenheit;
}
let answer = celsiusToFahrenheit(45);
console.log(answer, 'degree fahrenheit');

// fahrenheit to celsius

// function fahrenheitToCelsius(fahrenheit) {
//     let celsius = 5 * (fahrenheit - 32) / 9;
//     return celsius;
// }
// let answer = fahrenheitToCelsius(113);
// console.log(answer, 'degree celsius')
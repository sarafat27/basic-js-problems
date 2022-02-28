const numbers = [28, 54, 73, 56, 89, 34, 66];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     let element = numbers[i];
//     sum = sum + element;
// }
// console.log(sum);

// with function
function arrayTotal(numbers) {
    let sum = 0;
    for (i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
const total = arrayTotal([34, 76, 45, 67]);
//or, 
// const total = arrayTotal(numbers);
console.log('sum is:', total);

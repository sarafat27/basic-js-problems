/* 0,1,1,2,3,5,8,13,21,34,55 
3rd=2nd+1st
4th=3rd+2nd
5th=4th+3rd
nth=(n-1)th+(n-2)th
ith=(i-1)th+(i-2)th
*/

/*without function 
const fibo = [0, 1];
for (i = 2; i <= 10; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo); */

// with function
// function fibonacciSeries(number) {
//     const fibo = [0, 1];
//     for (i = 2; i < number; i++) {
//         fibo[i] = fibo[i - 1] + fibo[i - 2];
//     }
//     return fibo;
// }
// let fibonacci = fibonacciSeries(10);
// console.log('fibonacci series:', fibonacci);

// with input validation
function fibonacciSeries(number) {
    if (typeof number != 'number') {
        return 'please give a number';
    }
    if (number < 2) {
        return 'please give a positive number greater than 1';
    }
    const fibo = [0, 1];
    for (i = 2; i < number; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
let fibonacci = fibonacciSeries(7);
console.log(fibonacci);

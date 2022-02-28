// average of some numbers in an array using function
const numbers = [23, 45, 67, 89];
function getAverage(array) {
    let sum = 0;
    for (i = 0; i < array.length; i++) {
        let Element = array[i];
        sum = sum + Element;
    }
    return sum / array.length;
}
// let average = getAverage(numbers); or,
let average = getAverage([23, 45, 67, 89]);
console.log('average is:', average);
const business = 250;
const minister = 200;
const army = 350;
// if (business > minister) {
//     console.log('business is bigger');
// }
// else {
//     console.log('minister is bigger');
// }

// compare 3 values

/* if (business > minister && business > army) {
    console.log('business is biggest');
}
else if (minister > business && minister > army) {
    console.log('minister is biggest');
}
else {
    console.log('army is biggest');
} */

// with function
function getLargest(first, second, third) {
    if (first > second && first > third) {
        return first;
    }
    else if (second > first && second > third) {
        return second;
    }
    else {
        return third;
    }
}

const largest = getLargest(355, 887, 965);
console.log('largest is:', largest);

// another process
var max = Math.max(business, minister, army);
// console.log('largest is', max);

// find the smallest among three values using function
function getSmallest(number1, number2, number3) {
    if (number1 < number2 && number1 < number3) {
        return number1;
    }
    else if (number2 < number1 && number2 < number3) {
        return number2;
    }
    else {
        return number3;
    }
}
let smallest = getSmallest(10, 15, 9);
console.log('smallest value is:', smallest);
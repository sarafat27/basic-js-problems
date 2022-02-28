/* var numbers = [79, 156, 45, 198, 90, 33, 108];
function getSecondLargest(array) {
    let largest = array[0];
    for (i = 0; i < array.length; i++) {
        let element = array[i];
        if (element > largest) {
            largest = element;
        }
    }
    let newArray = [];
    for (i = 0; i < array.length; i++) {
        let element = array[i];
        if (element < largest) {
            newArray.push(element);
        }
    }
    let secondlargest = newArray[0];
    for (i = 0; i < newArray.length; i++) {
        let element = newArray[i];
        if (element > secondlargest) {
            secondlargest = element;
        }
    }
    return secondlargest;
}

let result = getSecondLargest(numbers);
console.log(result); */

//another way of getting second largest by sorting
var numbers = [79, 156, 45, 198, 90, 33, 108];
function getSecondLargest() {
    const sortedNumbers = numbers.sort(function (a, b) {
        return a - b;
    })
    const reversedNumbers = sortedNumbers.reverse();
    const secondlargest = reversedNumbers[1];
    console.log(secondlargest);
}
getSecondLargest();


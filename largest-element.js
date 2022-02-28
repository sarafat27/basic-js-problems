// largest number

// function largestElement(numbers) {
//     let largest = numbers[0];
//     for (let i = 0; i < numbers.length; i++) {
//         let element = numbers[i];
//         if (element > largest) {
//             largest = element;
//         }

//     }
//     return largest;
// }
// const ages = [23, 45, 31, 76, 45, 9, 33];
// const oldest = largestElement(ages);
// // const oldest2 = largestElement([-5, -2, -8]);
// console.log('oldest:', oldest);

// smallest number
function getSmallest(numbers) {
    let smallest = numbers[0];
    for (i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        if (element < smallest) {
            smallest = element;
        }
    }
    return smallest;
}
let youngest = getSmallest([34, 76, 12, 8, 9, 16]);
console.log('youngest is:', youngest);
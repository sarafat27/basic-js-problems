var first = 8;
var second = 11;
console.log(first, second);
// first process of swap
// var temp = first;
// first = second;
// second = temp;
// console.log(first, second);

// second process-destructuring
[first, second] = [second, first];
console.log(first, second);
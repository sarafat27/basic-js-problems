// how to get interset

function getInterest(principal, interestRate, years) {
    let interest = (principal * interestRate * years) / 100;
    return interest;
}

let totalInterest = getInterest(500, 10, 3);
console.log('total interest is:', totalInterest, 'taka');
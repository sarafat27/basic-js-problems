// how to get grade by giving marks as input

function getGrade(marks) {
    if (marks >= 80 && marks <= 100) {
        console.log('you have got A+');
    }
    else if (marks >= 70 && marks < 80) {
        console.log('you have got A');
    }
    else if (marks >= 60 && marks < 70) {
        console.log('you have got A-');
    }
    else if (marks >= 50 && marks < 60) {
        console.log('you have got B');
    }
    else if (marks >= 40 && marks < 50) {
        console.log('you have got C');
    }
    else if (marks < 40) {
        console.log('you have failed');
    }
    else {
        console.log('please give correct input');
    }
}

getGrade(110);

// If-else condition
function testNum(b) {
    let result;
    if (b > 0) {
        result = "Number is greater!";
    }
    else {
        result = "Number is less!";
    }
    return result;
}
console.log(testNum(5));

// while loop
let j = 1;
while (j < 6) {
    console.log("While loop iteration " + j);
    j++;
}

// for loop
let i;
for (let i = 1; i < 6; i++) {
    console.log("for loop iteration " + i);
}

// do-while loop
let k = 1;
do {
    console.log("do-while loop iteration " + k);
    k++;
}
while (k < 6);

// if-else
function testNum(a) {
    let result;
    if (a > 0) {
        result = "It's Monday";
    }
    else {
        result = "It's Saturday";
    }
    return result;
}
console.log(testNum(5));

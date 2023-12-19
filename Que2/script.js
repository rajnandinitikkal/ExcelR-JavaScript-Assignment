console.log("joined string")
const joinedstring = ['1','2','3','4'];
console.log(joinedstring);

console.log("After push:")
joinedstring.push('5','6','7');
console.log(joinedstring);

console.log("After pop:")
joinedstring.pop();
console.log(joinedstring);

console.log("After shift:")
joinedstring.shift();
console.log(joinedstring);

console.log("After unshift:")
joinedstring.unshift();
console.log(joinedstring);

console.log("sliced Array");
joinedstring.splice(1,2,8,9);
console.log(joinedstring);

console.log("After Splice:")
joinedstring.indexOf(5)
console.log(joinedstring)

console.log("index of 5:")
joinedstring.includes(3)
console.log(joinedstring)

console.log(`3 exixts in array: ${joinedstring}`)
joinedstring.reverse()
console.log(joinedstring)

console.log(`After Reverse: ${joinedstring}`)
joinedstring.sort()
console.log(joinedstring)

console.log(`After sort: ${joinedstring}`)
let joined ='Javascript is Awesome!';
let uppercaseString = joined.toUpperCase();
console.log(`Uppercase: ${uppercaseString}`)
let lowercaseString = joined.toLowerCase();
console.log(`Lowercase: ${lowercaseString}`)

let stringLength = joinedstring.length;
console.log(`Lenght: ${stringLength}`)

let indexOfIs = joinedstring.indexOf("is");
console.log(`Index Of "Is": ${indexOfIs}`)
// let substring = joinedstring.substring(5,11)
// console.log(`substring: ${substring}`)

let replacedString = joined.replace("amazing","awesome");
console.log(`Replaced String: ${replacedString}`);

let splitArray = joined.split('');
console.log(`Split Array: ${JSON.stringify(splitArray)}`);
splitArray.forEach((element,index)=>{console.log(`${index}: ${element}`);
});


function sayHelloAlice(){
    console.log("Hello, Alice! (Function Declaration");
}
sayHelloAlice();
var sayHelloBob = function(){
    console.log("Hello, Bob! (Function Expression)");
};
sayHelloBob();

var sayHelloCharlie= ()=>{
    console.log("Hello, Charlie! (Arrow Function)");
};
sayHelloCharlie();

var sayHelloDave = new Function('console.log("Hello, Dave!(Function constructor)" );');
sayHelloDave();

(function(){
    console.log("Hello, Eve!(IIFE)");
})();

function* generateHelloWorld(){
    yield "Hello";
    yield ",";
    yield "World(Generator Function);"
}

var iterator = generateHelloWorld();
console.log(iterator.next().value + iterator.next().value + iterator.next().value);

function createHelloFrank(){
    return function(){
        console.log("Hey, Frank!(Returned Function)");
    };
}
var sayHelloFrank = createHelloFrank();
sayHelloFrank();

var person = {
    sayHelloGrace: function(){
        console.log("Hello, Grace!(Object Method)");
    }
};

person.sayHelloGrace();
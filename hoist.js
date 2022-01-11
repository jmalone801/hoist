// GIVEN
console.log(example);
var example = "I'm the example!";
// AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";

// #1
console.log(hello);
var hello = 'world';
// var hello;
// console.log(hello); // logs undefined
// hello = "world";

// #2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// var needle;
// function test;
// test();
// var needle;
// console.log(needle); 
// output = magnet

// #3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// var brendan;
// brendan; 
// console.log(brendan);
// console.log(brendan);
// output = only okay
// output = super cool

// #4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// var food = 'chicken'
// console.log(food);
// function eat();
// eat();
// var food = 'gone';
// food = 'half-chicken';
// console.log(food);
// output = chicken
// output = half-chicken

// #5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// var mean = function()
// var food = "fish";
// food = "chicken";
// console.log(food);
// console.log(food);
// output = chicken
// output = chicken

// #6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// var genre = "disco";
// console.log(genre);
// function rewind()
// rewind();
// var genre = "r&b";
// genre = "rock";
// console.log(genre);
// console.log(genre);
// console.log(genre);
// output = undefined
// output = rock
// output = rock
// output = undefined

// #7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// dojo = "san jose";
// console.log(dojo);
// function learn()
// learn();
// var dojo = "burbank";
// dojo = "seattle";
// console.log(dojo);
// console.log(dojo);
// console.log(dojo);
// output = san jose
// output = seattle
// output = burbank
// output = san jose















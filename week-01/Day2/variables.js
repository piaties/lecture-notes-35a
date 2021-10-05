// variables
// data types
// variables must be declared

// declare variables with const, let or var

const person = 'bob' //bob is a string const can't change
console.log(person)

let age = 23 //let can change value age is data type number
let agePlus = age + 1
console.log(agePlus)
// boolean is true or false

let adult = true;
if (adult===true) {
    console.log('true')
}
/*
// conditionals need to clean up
let t = Date.prototype.getHours();
console.log(t);
if (t < 10) {
    console.log('have a good morning');
}
else if (t < 20) {
    console.log('have a good day');
    }
else { console.log('Have a good night');
}
*/
//ARRAYS!!!!!
let names = ['Bob', 'Mary', 'Sue']
console.log(names);
//console.log(name[0], ', bob was printed by index location 0 with varialbe');

names.forEach(name => console.log(name)) //name is an array element
//Loops Loops and more LOOPS!!!
//for loop
for(let i = 0; i < 3; i++){
    console.log('Meow',person, "meow");
}



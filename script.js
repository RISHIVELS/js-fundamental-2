'use strict';
/*

//functions

function logger() {
    console.log('hello loq');
}

logger();

function fruitJucier(apple, orange) {
    console.log(apple, orange);
    const juice = `there are ${apple} apples and ${orange} orange in the basket`;
    return juice;
}

const output = fruitJucier(2, 5);
console.log(output);

const output2 = fruitJucier(9, 0)
console.log(output2)



// function declaration
const age1 = calcAge(1900);

function calcAge(birthyear) {
    // const age = 2024 - birthyear;
    // return age;
    return 2025 - birthyear;
}


console.log(age1);

// function expression

const calcAge2 = function (birthyear) {
    return 2025 - birthyear;
}
const output2 = calcAge2(2010);

console.log(output2);


// arrow functoion

const calcAge3 = birthyear => 2037 - birthyear;
const age3 = calcAge3(2000);
console.log(age3);

const yearsUntilRetirement = (birthyear, firstName) => {
    const age = 2025 - birthyear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(2006, 'Rishivel.S'));


// function calling other functions

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitJucier(apple, orange) {

    const applePieces = cutFruitPieces(apple);
    const orangePieces = cutFruitPieces(orange);

    const juice = `there are ${applePieces} applepieces and ${orangePieces} orangepieces in the basket`;
    return juice;
}

const output1 = fruitJucier(2, 4);
console.log(output1)


// arrow function

const calculateAge = birthyear => 2025 - birthyear;

// normal function (declaration)

function calculateRetirement(age) {
    return 68 - age;
}

// function expression

const yearsUntilRetirement = function (birthyear, firstName) {
    const age = calculateAge(birthyear);
    const retirement = calculateRetirement(age);
    // return retirement;
    if (retirement >= 0) {
        return `${firstName} retires in ${retirement} years`
    }
    else {
        console.log(`${firstName} has already retired!`);
        return -1;
    }
}

const output1 = yearsUntilRetirement(1900, 'Rishivel S');
const output2 = yearsUntilRetirement(2000, 'Jonas');
console.log(output1);
console.log(output2);

//arrays

const friends = ['rishi', 'pradeep', 'rahul', 'smart'];
console.log(friends);
//const years = new Array(21, 22, 23, 24);
//console.log(years);

console.log(friends[3]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

// friends[1] = 'loki';
console.log(friends);

const rishi = ['Rishivel', 'S', 2025 - 2006];
console.log(rishi[2])
const name = 'rishivel.s'
rishi[0] = name;
console.log(rishi);

const calculateAge = birthyear => 2025 - birthyear;
const years = [1990, 1985, 2000, 2006];
const age1 = calculateAge(years[0]);
const age2 = calculateAge(years[1]);
const age3 = calculateAge(years[years.length - 1]);
console.log(age2);

const ages = [age1, age2, age3];
console.log(ages)

const friends = ['rishi', 'pradeep', 'rahul', 'smart'];
//add elements
const newLength = friends.push('naveen');
console.log(friends)
console.log(newLength)

const nextArray = friends.unshift('john');
console.log(nextArray)
console.log(friends);

// remove elements

const lastName = friends.pop();
console.log(friends)
console.log(lastName)

friends.shift();
console.log(friends);

console.log(friends.indexOf('pradeep'));

console.log(friends.includes('rishi'));

if (friends.includes('rishi')) console.log('You have your friend RISHI');



// objects

const rishi = {
    firstName: 'Rishivel',
    lastName: 'S',
    age: 18,
    title: 'Learner',
    friends: ['pradeep', 'rahul', 'smart']
}

console.log(rishi);

const nameKey = 'Name';

console.log(rishi.age);
console.log(rishi['first' + nameKey]);

// const interestedIn = prompt('What do you want to know about rishi? choose between first,last,age,job,and friends');
// if (rishi[interestedIn]) {
//     console.log(rishi[interestedIn])
// }
// else {
//     console.log('Wrong request! Enter among these.')
// }

rishi.location = 'chennai';
rishi['gmail'] = 'rishivel10@gmail.com'
console.log(rishi);

const vel = {
    name: 'rishivel.s',
    friends: ['pradeep', 'rahul', 'smart'],
    totalFriends: 3,
    bestFriend: 'pradeep',
}

console.log(`${vel.name} has ${vel.friends.length} friends, and his best friend is called ${vel.friends[0]}`);

const rishi = {
    firstName: 'Rishivel',
    lastName: 'S',
    birthYear: 2006,
    title: 'Learner',
    friends: ['pradeep', 'rahul', 'smart'],
    hasDriversLicense: false,

    // calcAge: function (birthYear) {
    //     return 2025 - birthYear;
    // }
    // calcAge: function () {
    //     //console.log(this)
    //     return 2025 - this.birthYear
    // }
    calcAge: function () {
        this.age = 2025 - this.birthYear
        return this.age
    }
};

console.log(rishi.calcAge());
console.log(rishi.age);
console.log(rishi.age);
console.log(rishi.age);
//console.log(rishi['calcAge'](2007));



const rishi = {
    name: 'Rishivel.S',
    birthyear: 2006,
    calcAge: function () {
        this.age = 2025 - this.birthyear;
        return this.age;
    },
    job: 'Learner',
    haveLicense: true,
    licenseString: function () {
        return this.haveLicense ? `he has a driving license.` : `he does not have drinving license.`
    }
};

console.log(rishi.calcAge());
console.log(rishi.age);

console.log(`${rishi.name} is a ${rishi.calcAge()}-year old ${rishi.job}, and ${rishi.licenseString()}`);

//loops

console.log('1')
console.log('1')
console.log('1')
console.log('1');

//for loop

for (let i = 1; i <= 10; ++i) {
    console.log(`move ${i}`)
}



const friends = ['rishi', 'pradeep', 'rahul', 'smart'];
const types = [];
for (let i = 0; i < friends.length; i++) {
    console.log(friends[i], typeof (friends[i]))
    // types.push(typeof (friends[i]));
    types[i] = typeof (friends[i])
}
console.log(types);

const birthYear = [2000, 2004, 1998, 1900];
const ages = [];

for (let i = 0; i < birthYear.length; i++) {
    let age = 2025 - birthYear[i];
    ages.push(age)
}
console.log(ages)
//continue and break
const friends = ['rishi', 'pradeep', 'rahul', 'smart', 12, 3, true];

for (let i = 0; i < friends.length; i++) {
    if (typeof friends[i] !== 'string') continue;
    console.log(friends[i], typeof (friends[i]));
}

for (let i = 0; i < friends.length; i++) {
    if (typeof friends[i] === 'number') break;
    console.log(friends[i], typeof (friends[i]));
}


const friends = ['rishi', 'pradeep', 'rahul', 'smart', 12, 3, true];

for (let i = friends.length - 1; i >= 0; i--) {
    console.log(friends[i])
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`----- Exercise ----- ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Rep ${rep}`)
    }
}
    */

// while loop

let rep = 1;
while (rep <= 10) {
    console.log('Exercise', rep);
    rep++;
}
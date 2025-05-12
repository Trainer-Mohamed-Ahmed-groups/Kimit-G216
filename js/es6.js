// let const 

/***************************** Arrow Functions ***************************************** */


function add(x, y) {
    return x + y;
}

var add = function (a, b) {
    console.log(this)
    return a + b;
}

var add = (a, b) => a + b

console.log(add())

const myObject = {
    name: 'John',
    age: 30,
    greet() {
        console.log(this);
    }
}


myObject.greet(); // Hello, my name is John

/***************************** Ternary if ***************************************** */
// ?  :b Ternary if

myNumber = 5;

if (myNumber > 3) {
    console.log('my number is greater than 3');
}
else if (myNumber < 3) {
    console.log('myNumber is less than 3');
}
else {
    console.log('My number is equal to 3');
}

// 5 > 4 ? console.log('5 is greater than 3') : console.log('3 is greater than 5');
myNumber > 3
    ? console.log('my number is greater than 3') :
    myNumber < 3
        ? console.log('myNumber is less than 3')
        : console.log('My number is equal to 3');



/***************************** Default Parameters ***************************************** */

function multiply(a, b = 1, c = 1) {
    return a * b * c;
}

console.log(multiply(5, 8, 10))
console.log(multiply(5, 8))
console.log(multiply(5))
console.log(multiply())

console.log("test".includes('e',))



/***************************** Spread operator ***************************************** */



var addition = (a, ...b) => {
    console.log(a)
    console.log(b)
}

console.log(addition(5, 7, 8, 45, 76, 87))


var nums1 = [1, 2, 3],
    nums2 = [4, 5, 6],
    nums3 = [7, 8, 9];

console.log([...nums1, ...nums2, ...nums3]);
console.log(Math.max(...nums1, ...nums2, ...nums3));



/***************************** Destructuring ***************************************** */
console.log("***************")
const person = {
    username: 'John',
    age: 30,
    city: 'New York'
};


// var username = person.username;
// var age = person.age;
// var city = person.city;

var { city: test, username } = person


console.log(username)
// console.log(age)
// console.log(city) // ERROR
console.log(test)

const people = [1, 2, 4, 5, 6];

// var first = people[0];

var [first, second, ...rest] = people;

console.log(first)
console.log(second)
console.log(rest)


/***************************** For of ***************************************** */
console.log("***************")

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    console.log(item)
}

for (let item of arr) {
    console.log(item)
}
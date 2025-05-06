var x = 1;
while (x <= 10) {
    console.log(x);
    x++;
}


console.log("*".repeat(20))
/*
    Syntax error =>   varr 
    Logical error 
    Runtime error 
*/

var y = 1;
do {
    console.log(y)
    y++;
} while (y <= 10);


console.log("*".repeat(20))

for (var i = 0; i <= 10; i++) {
    if (i % 2 === 1) { continue }
    console.log(i)
}


console.log("*".repeat(20))





// +=  &&  ||

console.log(10 && true && undefined && 5);

// And operator returns first false and last true

console.log(null || [] || undefined || 5);

//  Or operator returns first true and last false



var q = 0;

if (q == "asdasd") { console.log("first") }



if ("sadfsadf") { console.log("dsfasdfsda") }
else {
    console.log("sdfsdf")
}


var courseName = "Frontend development"

if (10 > 9) {
    console.log("OK")
}

/********************* Variables declarations  *************************** */


console.log(t)
var t = 45;


// function hello() {
//     var p = 4564;
// }
// console.log(p)


// Block scope
/*
{
    var p = 78;
}
console.log(p)

*/


let p = 2;

console.log(p)
////////////////////////////////////////////////////////////


sayOk()

// var sayOk = function () {
//     console.log("OK")
// }

function sayOk() { console.log("OK") }


console.log(55 === 55)
console.log(10 + "78")
console.log(typeof (10 + "78"))
console.log(9 * "5")


console.log(+"88")


console.log(parseInt("94.99"));
console.log(parseFloat("94.25"));
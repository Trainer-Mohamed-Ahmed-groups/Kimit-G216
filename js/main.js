const myDate = new Date();

console.log(myDate)



const d = new Date("2024-02-25");
let arrival = d.getTime();

const d2 = new Date("2024-03-02")
let leave = d2.getTime()

console.log((leave - arrival) / 1000 / 60 / 60 / 24)

// BOM => Browser object model

// alert("This is alert")

// var isUsername = confirm("Are u a user");

// console.log(isUsername)


// var username = prompt("Please enter your username");

// console.log(username);

///////////////////////////////////////////////
console.log(window.innerHeight)
console.log(window.innerWidth)

function goToGoogle() {
    location.assign('http://google.com/')
    history.go()
}


// localStorage.setItem("courseName", "Fullstack")
// console.log(localStorage.length)
// console.log(localStorage.key(0))

// document.getElementById('course_name').innerText = localStorage.getItem('courseName')
// localStorage.getItem("courseName")

// function removeCourseName() {
//     localStorage.removeItem('courseName')
// }

// sessionStorage.setItem("test", "This is a test for session")
// localStorage.setItem("test", "This is a test for local")

document.cookie = "username=MohamedAhmed;expires=Thu, 18 Dec 2033 12:00:00 UTC";
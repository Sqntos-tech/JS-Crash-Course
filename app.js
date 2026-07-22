
/* NOTES */

console.log('beautiful')
console.log('Hello World'[10])
console.log(''.length)
let str = 'Edward'
console.log(str[str.length - 1])

let fullName = 'Edward Santos'
let celsius = 10;
let fahrenheit = celsius * 1.8 + 32;
console.log('fahrenheit')
let bool = '1' === 1
console.log(bool)

console.log('edwarddaty')

{let cash = 60
let price = 40
let difference = cash - price

if (cash > price) {
    console.log(`you paid extra - here's ${difference} dollars change`)
}
else if (cash === price) {
    console.log("you paid the exact amount, have a nice day!")
}
else {
    console.log(`not enough money - you still owe ${price-cash} dollars`)
}
}

{let cash = 50
let price = 40
let isStoreOpen = false

if (cash >= price && isStoreOpen === false) {
    console.log('print the receipt')
}                     (!isStoreOpen)}

let cash = 50 
let price = 40
let isStoreOpen = true

{let str = cash >= price && isStoreOpen ? "give receipt" : "do not give receipt"
console.log(str)}

// let count = 1

// while (count <= 5) {
//     console.log(count)
//     count = count + 1
// }


// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

for (let i = 1; i < 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} -> Frontend Simplified`)
    }
    else if (i % 3 === 0) {
        console.log(` ${i} -> Frontend`)
    }
    else if (i % 5 === 0) {
        console.log(`${i} -> Simplified`)
    }
    else {
        console.log(`${i} -> ${i}`)
    }
}

{const str = "Frontend Simplified"

for (let i = 0; i < str.length; ++i) {
    console.log(str[i])
} }


{let users = [
    {
    username: "Edward",
    email: "edwardsantos1237@gmail.com",
    password: "test123",
    subscriptionStatus: "VIP",
    discord: "sqntos",
    lessonCompleted: [0, 1],
    }
];

function login(email,password) {
    for (let i = 0; i < users.length; ++i) {
        if (users[i].email === email) {
            if (users[i].password === password) {
                console.log('log the user in - the details are correct')
            }
            else {
                console.log('password is incorrect')
            }
            return;
        }
    }
    console.log('could not find an email that matches')
}

login('edwardsantos1237@gmail.com', 'test123')
}

//note.

{let users = [
    {
    username: "Edward",
    email: "edwardsantos1237@gmail.com",
    password: "test123",
    subscriptionStatus: "VIP",
    discord: "sqntos",
    lessonCompleted: [0, 1],
    }
];


function register(user) {
    users.push(user);
}

register({
    username: "Edward", 
    email: "edwardsantos1237@gmail.com", 
    password: "test123", 
    subscriptionStatus: "VIP",
    discord: "discord",
    lessonsCompleted: [0, 1]
});

console.log(users);
}

//note.

//HOW TO ACCESS ANY ELEMENT IN THE DOM
//first way of accessing an element *****
{console.log(document.querySelector('#title'));
// IF ITS A (class) INSTEAD OF A (id)console.log(document.querySelector(.title));
//Or a (h1)


//second way of accessing an element
console.log(document.getElementById('title'));

//HOW TO CHANGE THE HTML OF ANY ELEMENT THAT YOU WANT IN THE DOM
document.querySelector('#title2').innerHTML = 'Frontend Simplified'
//add a (+ to the =) if i want the innerHTML on top of the h1

//HOW TO CHANGE CSS
document.querySelector('#title2').style.color = 'green'

function changeTitleToGreen() {
    document.querySelector("#title2").style.color = green
    console.log('clicked');
}}

//notes 7/21/26

function toggleDarkMode() {
    document.querySelector('body').classList.toggle("dark-theme")
}

//How to fetch this data "https"
// fetch("https://jsonplaceholder.typicode.com/users/1")
const emailRef = document.querySelector(".email");


// 1. Then
{fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(response => {
    return response.json()
  })
  .then(data => {
    console.log(data)

  })

//2. Async/Await
async function main() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
    const data = await response.json()
    console.log(data)

}

main()}

//notes 7/21/26
{const statusRef = document.querySelector('.status')
 const videoRef = document.querySelector('.video')
function getSubscriptionStatus() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("undifined")
        }, 2000);
        
    })
}

// 1. Then
// getSubscriptionStatus().then(response => console.log(response))

// 2. Async/Await
async function main() {
    const status = (await getSubscriptionStatus())
    statusRef.innerHTML = status;
    try {
    console.log(await getVideo(status)) //part of challenge
    }
    catch (e) {
        console.log(e)
        videoRef.innerHTML = e; 
    }
}

main()}

//Challenges 7/21

{function getVideo(subscriptionStatus) {
    return new Promise((resolve, reject) => {
        if (subscriptionStatus === "VIP") {
            resolve("show video")
        }
        else if (subscriptionStatus === "FREE") {
            resolve("show trailer")
        }
        else {
            reject("no video")
        }
    })
}}

//notes 7/22/26 
// Beginner

//Sum of two numbers
function addition(num1, num2) {
    return num1 + num2
}
console.log(addition(3, 5));


//convert hours to seconds
function hoursIntoSeconds(hour) {
    return hour * 60 * 60
}
console.log(hoursIntoSeconds(2));


//perimeter of a rectangle 
function calcPerimeter(length, width) {
    return 2 * length + 2 * width
}
console.log(calcPerimeter(10, 20))


//area of triangle 
function calcAreaOfTriangle(base, height) {
    return 0.5 * base * height
}
console.log(calcAreaOfTriangle(20, 20))


//extend a string
function appendFrontend(string) {
    return string + 'Frontend'
}
console.log(appendFrontend('apple'))


//greater than 100
function sumGreaterThan100(num1, num2) {
    return num1 + num2 > 100
}
console.log(sumGreaterThan100(50, 60))


// less than or equal to zero
function lessThanOrEqualToZero(num) {
    return num <= 0
}
console.log(lessThanOrEqualToZero(-2))


//opposite boolean
function oppositeBoolean(bool) {
    return !bool
}
console.log(oppositeBoolean('false'))


//is not the number 0
function isNotZero(num) {
    return num !== 0
}
console.log(isNotZero(null))


//calculate the remainder 
function calcRemainder(num1, num2) {
    return num1 % num2 
}
console.log(calcRemainder(9,8))


//is the number odd
function isOdd(num) {
    return num % 2 !== 0
}
console.log(isOdd(7))


//if number is even return 1, otherwise -1
function booleanInteger(num) {
    return num % 2 === 0 ? 1 : -1
}
console.log(booleanInteger(5))


//if is logged in and subscribed return true
function isLoggedAndSubscribed(loggedIn, subscribed) {
    return (loggedIn === 'LOGGED_IN') && (subscribed === 'SUBSCRIBED')
}
console.log(isLoggedAndSubscribed('LOGGED_IN', 'SUBSCRIBED'))


//if is logged in or subscribed return true
function isLoggedAndSubscribed(loggedIn, subscribed) {
    return (loggedIn === 'LOGGED_IN') || (subscribed === 'SUBSCRIBED')
}
console.log(isLoggedAndSubscribed('LOGGED_OUT', 'SUBSCRIBED'))



//Medium

function filterOutTruthy(elem1, elem2) {
    return !elem1 ? elem1 : elem2
}
console.log(filterOutTruthy(null,5))


//return the length of any given array
function arrLength(arr) {
    return arr.length
}
console.log(arrLength([1, 2, 3]))


//get last elem in an array
function arrLength(arr) {
    return arr[arr.length -1]
}
console.log(arrLength([0, 1, 2, 3]))


//find the sum of an array
//this is how you loop through every element in an array
function arrSum(arr) {
    for (let i = 0; i < arr.length; ++i) {
        console.log(arr[i])
    }
}
console.log(arrSum([1, 2, 3, 4, 5]))

//sum of the array
function arrSum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; ++i) {
        sum = sum + arr[i]
    }
    return sum;
}
console.log(arrSum([2, 2, 2]))

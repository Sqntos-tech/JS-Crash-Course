
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
console.log(document.querySelector('#title'));
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
}
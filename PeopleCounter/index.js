//document.getElementById("count-el").innerText = 5

let firstBatch = 5

let count = firstBatch

console.log(count)

function countdown() {
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
}

let lab1 = 1
let lab2 = 2
let lab3 = 3

function logLapTime(){
    console.log(lab1+lab2+lab3)
}

let lapsCompleted = 0

function incrementLap() {
    lapsCompleted = lapsCompleted + 1
}

incrementLap()
incrementLap()
incrementLap()

console.log(lapsCompleted)

count = 0

function incrementBtn(){
    countEl = document.getElementById("count-el")
    count = count + 1
    countEl.innerText = count
}

function save(){
    console.log(count)
    record()
}

let message = "message"
let username = "hoyeon"

console.log(message+ ": " + username)

let messageUser = message + " : " + username

console.log(messageUser)

//let WelcomeEl = document.getElementById("welcome-el")
//let Myname = "hoyeon"
//let greeting = "welcome back!"

//WelcomeEl.innerText = Myname + " " + greeting
//WelcomeEl.innerText = WelcomeEl.innerText

function record() { 
    let PreviousEl = document.getElementById("previous-el")
    let CountEl = document.getElementById("count-el")
    PreviousEl.innerText += countEl.innerText + "-"
    CountEl.innerText = 0
}


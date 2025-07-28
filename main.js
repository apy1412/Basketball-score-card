let homeCount = 0;
let homeCountEl = document.getElementById("homeCount-el")

let guestCount = 0;
let guestCountEl = document.getElementById("guestCount-el")

function homeAddOne(){
    homeCount += 1
    homeCountEl.textContent = homeCount
}
function homeAddTwo(){
    homeCount += 2
    homeCountEl.textContent = homeCount
}
function homeAddThree(){
    homeCount += 3
    homeCountEl.textContent = homeCount
}

function guestAddOne(){
    guestCount += 1
    guestCountEl.textContent = guestCount
}
function guestAddTwo(){
    guestCount += 2
    guestCountEl.textContent = guestCount
}
function guestAddThree(){
    guestCount += 3
    guestCountEl.textContent = guestCount
}

function reset(){
    homeCount = 0
    guestCount =0
    homeCountEl.textContent = homeCount
    guestCountEl.textContent = guestCount

}
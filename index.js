let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")
let homeScore = 0
let guestScore = 0

function homeOne(){
    homeScore += 1
    homeEl.textContent=homeScore
}
function homeTwo(){
    homeScore += 2
    homeEl.textContent=homeScore
}
function homeThree(){
    homeScore += 3
    homeEl.textContent=homeScore
}
function guestOne(){
    guestScore += 1
    guestEl.textContent=guestScore
}
function guestTwo(){
    guestScore += 2
    guestEl.textContent=guestScore
}
function guestThree(){
    guestScore += 3
    guestEl.textContent=guestScore
}
function resetZero(){
    homeEl.textContent=0
    homeScore=0
    guestEl.textContent=0
    guestScore=0
}
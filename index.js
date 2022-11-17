let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")
let winnerEl = document.getElementById("winner-el")
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
function hm1(){
    homeScore -=1
    homeEl.textContent= homeScore
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
function gm1(){
    guestScore -=1
    guestEl.textContent= guestScore
}
function resetZero(){
    detrmine()
    homeEl.textContent=0
    homeScore=0
    guestEl.textContent=0
    guestScore=0
}
function detrmine(){
    if(homeScore < guestScore){
        winnerEl.innerText = "Guest Wins"
    }
    if(homeScore > guestScore){
    winnerEl.innerText = "Home Wins"
    }
    if(homeScore == guestScore){
    winnerEl.innerText = "Draw"
    }
}

let gameBtn = document.getElementById("playCards")
let startBtnEl = document.getElementById("startBtn")
let newBtnEl = document.getElementById("newBtn")
let resetBtnEl = document.getElementById("resetBtn")
let sumScoreEL = document.getElementById("sumScore")
let questPlay = document.getElementById("playQuestion")

const cards = [1,2,3,4,5,6,7,8,9,10,11,13]

startBtnEl.addEventListener("click",function(){
    let card01 = Math.floor(Math.random(cards)*cards.length)
    // let card02 = Math.floor(Math.random()*13)+1
    let card02 = Math.floor(Math.random(cards)*cards.length)
    

    // let difference = 0
    gameBtn.innerHTML  = `Cards: ${cards[card01]} ${cards[card02]}`
    // gameBtn.innerHTML = `Cards : ${cards[card01]} ${cards[card02]} ${cards[card01]} `
    sumScoreEL.innerHTML = ` Sum:${ cards[card01] + cards[card02]}`
    // console.log(card02)
    // console.log(card02)

   

    // if (sumScoreEL.innerHTML == 21)
    // questPlay.innerHTML = `is the winner`

  
   
}
)

newBtnEl.addEventListener("click",function(){
    gameBtn.innerHTML  = `Cards: ${cards[card01]} ${cards[card02]}`

})

resetBtnEl.addEventListener("click",function(){

})
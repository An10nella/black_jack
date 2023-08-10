let gameBtn = document.getElementById("playCards")
let startBtnEl = document.getElementById("startBtn")
let newBtnEl = document.getElementById("newBtn")
let resetBtnEl = document.getElementById("resetBtn")
let sumScoreEL = document.getElementById("sumScore")
let questPlay = document.getElementById("playQuestion")

const cards = [10,11]
let win = 21
startBtnEl.addEventListener("click",function(){
    let card01 = Math.floor(Math.random(cards)*cards.length)
    // let card02 = Math.floor(Math.random()*13)+1
    let card02 = Math.floor(Math.random(cards)*cards.length)
    

    // let difference = 0
    gameBtn.innerHTML  = `Cards: ${cards[card01]} ${cards[card02]}`
    sumScoreEL.innerHTML = ` Sum:${ cards[card01] + cards[card02]}`

    for(let i=0 ; i>cards.length ; i++){
        if (sumScoreEL == win){
            questPlay.innerHTML += `is the winner`
            console.log( questPlay)
            }
        
        // gameBtn.innerHTML  = `Cards: ${cards[card01]} ${cards[card02]} `

    }
    // gameBtn.innerHTML = `Cards : ${cards[card01]} ${cards[card02]} ${cards[card01]} `
    
    // console.log(card02)
    // console.log(card02)

   

   
  
   
}
)

newBtnEl.addEventListener("click",function(){
    gameBtn.innerHTML  = `Cards: ${cards[card01]} ${cards[card02]}`

})

resetBtnEl.addEventListener("click",function(){

})
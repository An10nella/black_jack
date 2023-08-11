let gameBtn = document.getElementById("playCards")
let startBtnEl = document.getElementById("startBtn")
let newBtnEl = document.getElementById("newBtn")
let resetBtnEl = document.getElementById("resetBtn")
let sumScoreEL = document.getElementById("sumScore")
let questPlay = document.getElementById("playQuestion")
let sumCount = 0


const cards = [10,11]
let win = 21
startBtnEl.addEventListener("click",function(){
    let card01 = Math.floor(Math.random(cards)*cards.length)
    // let card02 = Math.floor(Math.random()*13)+1
    let card02 = Math.floor(Math.random(cards)*cards.length)
    
    sumCount = cards[card01] + cards [card02] + Math.floor(Math.random() * 10) + 1
    console.log(su)

    // let difference = 0
    gameBtn.innerHTML  = `Cards: ${cards[card01]} ${cards[card02]} `
    sumScoreEL.innerHTML = ` Sum:${ sumCount}`


        if (sumScoreEL.innerHTML == win){
            questPlay.innerText = `Congratulations , You win!`
            
            }else {
                questPlay.innerText = `repeat`

            }
        
        // gameBtn.innerHTML  = `Cards: ${cards[card01]} ${cards[card02]} `

   
    // gameBtn.innerHTML = `Cards : ${cards[card01]} ${cards[card02]} ${cards[card01]} `
    
    // console.log(card02)
    // console.log(card02)

   

   
  
   
}
)

newBtnEl.addEventListener("click",function(){
    gameBtn.innerHTML = `Cards: Cards: ${cards[card01]} ${cards[card02] + Math.floor(Math.random() * 10) + 1} `
    sumScoreEL.innerHTML = `Sum:`
    questPlay.innerText = `Want to play a round?`

})

resetBtnEl.addEventListener("click",function(){
    sumCount = 0
    gameBtn.innerHTML = `Cards:`
    sumScoreEL.innerHTML =`Sum:`
    questPlay.innerText = `play?`
    // resetBtnEl.cardsCount = 


})
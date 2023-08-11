let gameBtn = document.getElementById("playCards")
let startBtnEl = document.getElementById("startBtn")
let newBtnEl = document.getElementById("newBtn")
let resetBtnEl = document.getElementById("resetBtn")
let sumScoreEL = document.getElementById("sumScore")
let questPlay = document.getElementById("playQuestion")
let sumCount = 0
let cardsCount = 0
let randomCard = 0

// const cards = [1,2,3,4,5,6,7,8,9,10,11]
let win = 21
startBtnEl.addEventListener("click",function(){
    let card01 = Math.floor(Math.random()*13)+1
    let card02 = Math.floor(Math.random()*13)+1
    // let card02 = Math.floor(Math.random(cards)*cards.length)
    

    // sumCount = cards[card01] + cards[card02]
    sumCount = card01 + card02
   
    gameBtn.innerHTML  = `Cards: ${card01} ${card02} `

    // gameBtn.innerHTML  = `Cards: ${cards[card01]} ${cards[card02]} `
    sumScoreEL.innerHTML = ` Sum:${ sumCount}`
    if (sumCount === win) {
        questPlay.innerText = `Congratulations, You win!`
      } else {
        questPlay.innerText = 'try again ?'
      }
      
    //     gameBtn.innerHTML  = `Cards: ${cards[card01]} ${cards[card02]} `

   
    // gameBtn.innerHTML = `Cards : ${cards[card01]} ${cards[card02]} ${cards[card01]} `
    
    // console.log(card02)
    // console.log(card02)

}
)

newBtnEl.addEventListener("click", function () {
    sumCount += randomCard
    randomCard = Math.floor(Math.random() * 13) + 1
    randCount = sumCount + randomCard
  //   console.log(randCount)
    gameBtn.innerHTML += ` ${randomCard}`
    sumScoreEL.innerHTML = ` Sum:  ${randCount} `
    questPlay.innerText = 'want to add more?'
  })

resetBtnEl.addEventListener("click",function(){
   
    sumCount = 0
    gameBtn.innerHTML = 'Cards:'
    sumScoreEL.innerHTML =`Sum:`
    questPlay.innerText = `Want to play again?`
    // resetBtnEl.cardsCount = 


})


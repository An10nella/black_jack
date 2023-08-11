let gameBtn = document.getElementById("playCards")
let startBtnEl = document.getElementById("startBtn")
let newBtnEl = document.getElementById("newBtn")
let resetBtnEl = document.getElementById("resetBtn")
let sumScoreEL = document.getElementById("sumScore")
let questPlay = document.getElementById("playQuestion")
let sumCount = 0
let cardsCount = 0

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
      
    //     gameBtn.innerHTML  = `Cards: ${cards[card01]} ${cards[card02]} `

   
    // gameBtn.innerHTML = `Cards : ${cards[card01]} ${cards[card02]} ${cards[card01]} `
    
    // console.log(card02)
    // console.log(card02)

}
)

newBtnEl.addEventListener("click",function(){
    sumCount += randomAddition
   
    let randomCard = Math.floor(Math.random() * 13) + 1
    // sumRand = card01 + card02 + randomCard
    // console.log(sumRand) 
    gameBtn.innerHTML += `  ${randomCard }`
    // gameBtn.innerHTML = `Cards: ${cards[card01]} ${cards[card02]} ${ Math.floor(Math.random() * 13) + 1} `
    
    sumScoreEL.innerHTML += `  ${randomCard}`
    questPlay.innerText = `Want to play a round?`
    

})

resetBtnEl.addEventListener("click",function(){
   
    sumCount = 0
    gameBtn.innerHTML = 'Cards:'
    sumScoreEL.innerHTML =`Sum:`
    questPlay.innerText = `Want to play again?`
    // resetBtnEl.cardsCount = 


})
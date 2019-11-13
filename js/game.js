const computerPlay = () =>{
    let items = ['paper', 'rock', 'scissor']
    let item = items[Math.floor(Math.random()*items.length)]
    console.log(`the computer chose ${item}`)
    return item
}
let playerSelection = 'scissor'
const computerSelection = computerPlay()

function playRound(playerSelection, computerSelection){

    // re-read switch section for this part
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        return 'A TIE???  Try again!'
    } else if (computerSelection.toLowerCase() =='rock' && playerSelection.toLowerCase() != 'paper') {
        return 'You Lose! Try again!'
    } else if (computerSelection.toLowerCase() == 'scissor' && playerSelection.toLowerCase() !='rock') {
        return 'You Lose! Try again!'
    } else if (computerSelection.toLowerCase() == 'paper' && playerSelection.toLowerCase() !='scissor') {
        return 'You Lose! Try again!'
    } else {
        return 'YOU WIN!'
    }
}
console.log(playRound(playerSelection, computerSelection))
const computerPlay = () =>{
    let items = ['paper', 'rock', 'scissor']
    let item = items[Math.floor(Math.random()*items.length)]
    return item
}

function playRound(playerSelection, computerSelection){
    // re-read switch section for this part
}

const playerSelection = 'rock'
const computerSelection = computerPlay()
console.log(playRound(playerSelection, computerSelection))
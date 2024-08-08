 console.clear()
 let playerText = document.getElementById('playertext')
 let restart = document.getElementById('rebtn')
 let boxes = Array.from(document.getElementsByClassName('box')) // creats an array from an array like function
 let winnerIndicator = getComputedStyle(document.body).getPropertyValue('--winning-blocks')

 const O_TEXT = 'O'
 const X_TEXT = 'X'
 let firstPlayer = X_TEXT
 let spaces = Array(9).fill(null) // this ensures that players can only use their respected move on one box at a time
 let count =0
 const Startgame = () =>{
     boxes.forEach(box => box.addEventListener('click', boxclicked))

 }
 function boxclicked(e){
     const id = e.target.id

     if(!spaces[id] && count<9){
         spaces[id] = firstPlayer
         e.target.innerText = firstPlayer

         if(playerHasWon() !==false){
             playerText.innerHTML = `${firstPlayer} has won!`
             let winning_blocks = playerHasWon()
             count =10

              winning_blocks.map(box => boxes[box].style.backgroundColor=winnerIndicator)
          
              return
        
         } 
         count++
         firstPlayer = firstPlayer == X_TEXT ? O_TEXT : X_TEXT
     }

     if(count === 9){
        playerText.innerHTML = 'Draw gane'
        boxes.forEach(box => box.style.color = 'red')
     }
 }

     const winning = [
         [0,1,2],
         [3,4,5],
         [6,7,8],
         [0,3,6],
         [1,4,7],
         [2,5,8],
         [0,4,8],
         [2,4,6],
     ]
    
     function playerHasWon(){
         for (const condition of winning) {
             let[a, b, c] = condition
            
             if(spaces[a] && (spaces[a]== spaces[b] && spaces[a] ==spaces[c])){
                 return [a,b,c]
             }
         }
         return false
     }

 restart.addEventListener('click', restaart)

  function restaart(){
     spaces.fill(null)
    count = 0
     boxes.forEach(box =>{
         box.innerText =''
         box.style.backgroundColor =''
         box.style.color = ''
     })
     playerText.innerHTML = 'TIC TAC TOE'
     firstPlayer =  X_TEXT  
  }
 Startgame()


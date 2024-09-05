
// when window reloads it will load the game 

window.onload = function() {
  setTimeout(function() {
    document.querySelector('.loader-container').style.display = 'none';
  }, 3500); 
};


let  score = JSON.parse(localStorage.getItem('score'))||
{
  wins:0,
  losses:0,
  ties:0 
};


  
function updation(){
    document.querySelector('.js-score')
    .innerHTML = `wins:${score.wins},losses:${score.losses},ties:${score.ties}`; 
}
   
 

function moveGame(){         
  const randNumber = Math.random();
 
  if(randNumber >= 0 && randNumber <1/3){
   compMove = 'Rock';
  }else if(randNumber >= 1/3 && randNumber < 2/3){
   compMove = 'Paper';
 } else if(randNumber >= 2/3 && randNumber < 1){
   compMove = 'Scissors';
 } 
 return compMove;
}
function playGame(Good)
{
          if(Good === 'Rock')
          {
            const compMove = moveGame();
            let result = '';
                if(compMove === 'Rock'){
                  result = 'Tie.';
                }else if(compMove === 'Paper'){
                  result = 'You lost ';
                }else if(compMove === 'Scissors'){
                  result = 'You won !';
                  }
                  if(result === 'You won !'){
                    score.wins += 1;
              }else if (result === 'You lost '){
                    score.losses += 1;
              }else if(result === 'Tie.'){
                    score.ties += 1;
              }
             
              updation();
              document.querySelector('.js-result')
              .innerHTML = result;
              
               document.querySelector('.js-moves')
              .innerHTML =  
              `You
              <img src="src/${Good}.png">      <img src="src/${compMove}.png">
              Computer`;
                              
          } else if(Good === 'Paper')
            {
              const compMove = moveGame();
              let result = '';
                  if(compMove === 'Rock'){
                    result = 'Tie.';
                  }else if(compMove === 'Paper'){
                    result = 'You lost ';
                  }else if(compMove === 'Scissors'){
                    result = 'You won !';
                    }
                    if(result === 'You won !'){
                      score.wins += 1;
                }else if (result === 'You lost '){
                      score.losses += 1;
                }else if(result === 'Tie.'){
                      score.ties += 1;
                }
                updation();
                document.querySelector('.js-result')
                .innerHTML = result;
                
                 document.querySelector('.js-moves')
                .innerHTML =  `You
                <img src="src/${Good}.png">       <img src="src/${compMove}.png">
                Computer`;
                                
            } else if(Good === 'Scissors')
              {
                const compMove = moveGame();
                let result = '';
                    if(compMove === 'Rock'){
                      result = 'Tie.';
                    }else if(compMove === 'Paper'){
                      result = 'You lost ';
                    }else if(compMove === 'Scissors'){
                      result = 'You won !';
                      }
                      if(result === 'You won !'){
                        score.wins += 1;
                  }else if (result === 'You lost '){
                        score.losses += 1;
                  }else if(result === 'Tie.'){
                        score.ties += 1;
                  }

                  localStorage.setItem('score', JSON.stringify(score));
                  updation();
                   
                 
                  
                    document.querySelector('.js-result')
                   .innerHTML = result;
                   
                    document.querySelector('.js-moves')
                   .innerHTML =   `You
                   <img src="src/${Good}.png">         <img src="src/${compMove}.png">
                   Computer`;
                     
                                       
              } 
        }
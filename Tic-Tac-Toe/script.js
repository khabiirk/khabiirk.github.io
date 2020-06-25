const gameBoard = (() => {
  var board = [];
  let turn1;
  let turn2;
  let turn;
  function getBoard(){
    return board;
  }
  function getTurn(){
    let r = [turn1, turn2, turn];
    return r;
  }
  function createBoard(){
    turn1 = true;
    turn2 = false;
    turn = 0;
    const b = document.querySelector('.board');
    for(let i = 0; i < 9; i++){
      let d = document.createElement('div');
      d.classList.add('play-cell');
      d.setAttribute('id', i);
      d.textContent = board[i];
      b.appendChild(d);
    }

  }
  const player = (move) =>{

    function play(cell){
    //  alert(typeof(board[parseInt(cell.id)]));
      if (typeof(board[parseInt(cell.id)]) == 'undefined'){
    //    alert('in');
        board[parseInt(cell.id)] = move;


        render();
      }
    }
    return {play};
  };

  function game(){
    const player1 = player('O');
    const player2 = player('X');
    let cell = document.querySelectorAll('.play-cell');

    for(let j = 0; j < 9; j++){
      let v = document.querySelector('.head');
      if(turn1){
        v.textContent = "Player 1 turn";
      }
      else if(turn2){
        v.textContent = "Player 2 turn";
      }
      cell[j].addEventListener('click', ()=>{

        if(turn1){
          player1.play(cell[j]);
          cell[j].setAttribute('value', 0);
          turn1 = false;
          turn2 = true;
          win_condition();
          turn++;
          v.textContent ='Player 2 turn';

        }
        else if(turn2){
          player2.play(cell[j]);
          cell[j].setAttribute('value', 1);
          turn2 = false;
          turn1 = true;
          win_condition();
          turn++;
          v.textContent ='Player 1 turn';
        }


      })
    }


  }

  function render(){
    //let f = gameBoard().getBoard;
    let d = document.querySelectorAll('.play-cell');
    for(let i = 0; i < board.length; i++){
      d[i].textContent = '';
      //alert(board[i]);
      d[i].textContent = board[i];
    }

    //alert(board[0]);
  }
  function win_condition(){



    if((board[0] == board[1]) && (board[1] == board[2]) && (board[0] == board[2]) && typeof(board[0]) != 'undefined'){

      if(board[0] == 'O'){
        alert("Player 1 wins");
      }
      else{
        alert("Player 2 wins");
      }
    }
    else if((board[3] == board[4]) && (board[4] == board[5]) && (board[3] == board[5])&& typeof(board[3]) != 'undefined'){

      if(board[3] == 'O'){
        alert("Player 1 wins");
      }
      else{
        alert("Player 2 wins");

    }
  }
    else if((board[6] == board[7]) && (board[7] == board[8]) && (board[6] == board[8])&& typeof(board[6]) != 'undefined'){

      if(board[6] == 'O'){
        alert("Player 1 wins");
      }
      else{
        alert("Player 2 wins");

    }
  }
    else if((board[0] == board[4]) && (board[4] == board[8]) && (board[0] == board[8])&& typeof(board[4]) != 'undefined'){

      if(board[0] == 'O'){
        alert("Player 1 wins");
      }
      else{
        alert("Player 2 wins");

    }
  }
    else if((board[2] == board[4]) && (board[4] == board[6]) && (board[2] == board[6])&& typeof(board[2]) != 'undefined'){
      if(board[2] == 'O'){
        alert("Player 1 wins");
      }
      else{
        alert("Player 2 wins");

    }}

    else if((board[0] == board[3]) && (board[3] == board[6]) && (board[0] == board[6])&& typeof(board[0]) != 'undefined'){
      if(board[0] == 'O'){
        alert("Player 1 wins");
      }
      else{
        alert("Player 2 wins");

    }
  }
    else if((board[1] == board[4]) && (board[4] == board[7]) && (board[1] == board[7])&& typeof(board[1]) != 'undefined'){
      if(board[1] == 'O'){
        alert("Player 1 wins");
      }
      else{
        alert("Player 2 wins");

    }}
    else if((board[2] == board[5]) && (board[5] == board[8]) && (board[2] == board[8])&& typeof(board[2]) != 'undefined'){
      if(board[2] == 'O'){
        alert("Player 1 wins");
      }
      else{
        alert("Player 2 wins");

    }

  }
    else if(turn == 9){
      alert("Draw");
    }
    else {
      return false;
    }

    turn1 = false;
    turn2 = false;
    let d = document.querySelector('section');
    let bu = document.createElement('button');
    bu.textContent = 'Reset';

    d.appendChild(bu);
    //
    //

    bu = document.querySelector('button');
    bu.addEventListener('click', ()=>{
  //    for(let i = 0; i < board.length; i++){
  //      board.splice(i,1);
  //    }
      board.length = 0;

      console.table(board);

      let m = document.querySelector('.board');
      d.innerHTML = '';
      m.innerHTML = '';

      createBoard();

      //d.removeChild(r);
      render();
      game();
    });
    return true;


  }
  

  return {
    createBoard,
    render,
    game,
    getBoard,
    getTurn,

  };
})();


const start = (() => {
  gameBoard.createBoard()
  gameBoard.render();
  gameBoard.game();

})();

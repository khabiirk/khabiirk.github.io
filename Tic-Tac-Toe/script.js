const gameBoard = (() => {
  var board = new Array(9);
  let turn1;
  let turn2;
  let turn;
  let rec = 0;
  const COMBOS = [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
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
  function emptySpaces(){
    let e = []
    for(let c = 0; c < 9; c++){
      //alert(!board[c]);
      if(!board[c]){
        e.push(c)
      }
    }
    //alert(e);
    return e;
  }
  function iswinner(p){
    for(let i = 0; i < COMBOS.length; i++){
      let won = true;
      for(let j = 0; j < COMBOS[i].length; j++){
        let id = COMBOS[i][j];
        won = board[id] == p && won;
      }
      if (won){
        turn1 = "none";
        //alert("iswinner" + true)
        return true;
      }
    }
    //alert("iswinner " + false)
    return false;
  }

  function isTie(p){
    let isBoardFill = true;
    for(let i = 0; i < board.length; i++){
      isBoardFill = board[i] && isBoardFill;
    }
    if(isBoardFill){
      //alert("istie" + true)
      turn1 = "none";
      return true;
    }
    //alert("istie" + false)
    return false;
  }

  function minimax(p){
    //alert('going here');

    if(iswinner('O')){
      //alert('winner');
      return {evaluation: -10};
    }
    else if(iswinner('X')){
      return {evaluation: +10};
    }
    else if(isTie('Player 1')){
      return {evaluation: 0};
    }
    let EMPTY = emptySpaces();
    //console.table(EMPTY);
    let moves = []


    for (var i = 0; i < EMPTY.length; i++){
      let id = EMPTY[i];
      let move = {};

      move.id = id;
      let savedBoardSpace = board[id];
      board[id] = p;
      //render();

      if(p == "X"){

        //alert('here');

        move.evaluation = minimax('O').evaluation;
      }
      else{

        move.evaluation = minimax('X').evaluation;
      }
      //(move.evaluation);

      board[id] = savedBoardSpace;
      moves.push(move);
      //console.log("Evaluation is " + move.evaluation);
    }
  //  console.log("out " + i);
  //  console.table(moves);
    let bestMove;
    if(p == "X"){
      //alert('Here X')
      let max = -9999999;
      for(let count = 0; count < moves.length; count++){
        if(moves[count].evaluation > max ){
          //alert("in");
          max = moves[count].evaluation;
          bestMove = moves[count];
        }
      }
      //alert(bestMove);
    }
    else{
      //alert('Here O')
      let min = 999999999;
      for(let count = 0; count < moves.length; count++){
        if(moves[count].evaluation < min){

          min = moves[count].evaluation;
          bestMove = moves[count];
        }
      }
      //alert(bestMove);
    }
  //  console.log(bestMove.evaluation);
    rec++
  //  console.log(rec + "st");

  //  console.table(bestMove);
    return bestMove;


  }
  const player = (move) =>{

    function play(c){
    //  alert(typeof(board[parseInt(cell.id)]));
      if (typeof(board[parseInt(c)]) == 'undefined'){
    //    alert('in');
        board[parseInt(c)] = move;



        render();
      }
    }
    return {play};
  };

  function game(){
    const player1 = player('O');
    const player2 = player('X');
    let a = document.createElement('Button');
    let m = document.querySelector('section');
    a.classList.add('a');
    var aiCheck = false;
    a.textContent = "AI";
    m.appendChild(a);
    a.addEventListener('click', ()=>{
      aiCheck = true;


    });

    let cell = document.querySelectorAll('.play-cell');


    turn1 = "Player 1"

    for(let j = 0; j < 9; j++){
      let v = document.querySelector('.head');
      if(turn1 != "none"){
        v.textContent = turn1 + " turn";
      }

      cell[j].addEventListener('click', ()=>{

        a.classList.add("remove")
        if(turn1 == "Player 1"){
          //alert("dd");
          player1.play(cell[j].id);
          cell[j].setAttribute('value', 0);
          let l = iswinner('O');
          turn1 = "Player 2";
          v.textContent = turn1 + " turn";
          if(l){
            alert('Player 1 win');
            turn1 = "none";

          }

          let ai;
          if(aiCheck){
            ai = minimax('X').id;
            console.log(ai);
            player2.play(ai);
            turn1 = "Player 1";
            let y = iswinner('X');
            if(y){
              alert('You lose');
              turn1 = "none";

            }
            if(isTie()){
              alert('Draw');
              turn1 = "none";
            }


          }



        }
        else if (turn1 == "Player 2") {
          player2.play(cell[j].id);
          turn1 = "Player 1";
          let y = iswinner('X');
          v.textContent = turn1 + " turn";
          if(y){
            alert('You lose');
            turn1 = "none";

          }
          if(isTie()){
            alert('Draw');
            turn1 = "none";
          }
        }

        if(turn1 == "none"){
          let d = document.querySelector('section');
          let bu = document.createElement('button');
          bu.textContent = 'Reset';
          turn1 = 'h';

          d.appendChild(bu);
          //
          //


          bu.addEventListener('click', ()=>{
        //    for(let i = 0; i < board.length; i++){
        //      board.splice(i,1);
        //    }
            board.length = 0;
            turn1 = "Player 1";

            console.table(board);

            let m = document.querySelector('.board');
            d.innerHTML = '';
            m.innerHTML = '';

            createBoard();

            //d.removeChild(r);
            render();
            game();
          });

        }

  //        v.textContent ='Player 2 turn';

//        }
//        else if(turn2){
//          player2.play(cell[j]);
//          cell[j].setAttribute('value', 1);
//          turn2 = false;
//          turn1 = true;
//          win_condition();
//          turn++;
//          v.textContent ='Player 1 turn';
//        }


      })
    }


  }

  function render(){
    //let f = gameBoard().getBoard;
    let d = document.querySelectorAll('.play-cell');
    for(let i = 0; i < board.length; i++){
      d[i].textContent = '';
      //alert(board[i]);
      if(board[i] == "X"){
        d[i].style.color = "red";
      }
      d[i].textContent = board[i];
    }

    //alert(board[0]);
  }
  function win_condition(){

    let winner;

    if((board[0] == board[1]) && (board[1] == board[2]) && (board[0] == board[2]) && typeof(board[0]) != 'undefined'){

      if(board[0] == 'O'){
        alert("Player 1 wins");
        winner = 'Player 1';
      }
      else{
        alert("Player 2 wins");
        winner = 'Player 2'
      }
    }
    else if((board[3] == board[4]) && (board[4] == board[5]) && (board[3] == board[5])&& typeof(board[3]) != 'undefined'){

      if(board[3] == 'O'){
        alert("Player 1 wins");
        winner = 'Player 1';
      }
      else{
        alert("Player 2 wins");
        winner = 'Player 2';

    }
  }
    else if((board[6] == board[7]) && (board[7] == board[8]) && (board[6] == board[8])&& typeof(board[6]) != 'undefined'){

      if(board[6] == 'O'){
        alert("Player 1 wins");
        winner = 'Player 1';
      }
      else{
        alert("Player 2 wins");
        winner = 'Player 2';

    }
  }
    else if((board[0] == board[4]) && (board[4] == board[8]) && (board[0] == board[8])&& typeof(board[4]) != 'undefined'){

      if(board[0] == 'O'){
        alert("Player 1 wins");
        winner = 'Player 1';
      }
      else{
        alert("Player 2 wins");
        winner = 'Player 2';

    }
  }
    else if((board[2] == board[4]) && (board[4] == board[6]) && (board[2] == board[6])&& typeof(board[2]) != 'undefined'){
      if(board[2] == 'O'){
        alert("Player 1 wins");
        winner = 'Player 1';
      }
      else{
        alert("Player 2 wins");
        winner = 'Player 2';

    }}

    else if((board[0] == board[3]) && (board[3] == board[6]) && (board[0] == board[6])&& typeof(board[0]) != 'undefined'){
      if(board[0] == 'O'){
        alert("Player 1 wins");
        winner = 'Player 1';
      }
      else{
        alert("Player 2 wins");
        winner = 'Player 2';

    }
  }
    else if((board[1] == board[4]) && (board[4] == board[7]) && (board[1] == board[7])&& typeof(board[1]) != 'undefined'){
      if(board[1] == 'O'){
        alert("Player 1 wins");
        winner = 'Player 1';
      }
      else{
        alert("Player 2 wins");
        winner = 'Player 2';

    }}
    else if((board[2] == board[5]) && (board[5] == board[8]) && (board[2] == board[8])&& typeof(board[2]) != 'undefined'){
      if(board[2] == 'O'){
        alert("Player 1 wins");
        winner = 'Player 1';
      }
      else{
        alert("Player 2 wins");
        winner = 'Player 2';

    }

  }
    else if(turn == 9){
      alert("Draw");
      winner = "Draw";
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
    return winner;


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

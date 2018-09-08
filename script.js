$(document).ready(function () {

  let counter = 0;
  let xWins = 0;
  let oWins = 0;
  let draws = 0;
  let total = 0;
  let player1 = $('.player1');
  let player2 = $('.player2');
  let name1 = $('.name1');
  let name2 = $('.name2');
  let reload = $('.reload');
  let turn1 = $('.player1turn');
  let turn2 = $('.player2turn');
  let playerName1;
  let playerName2;

  player1.click(function() {
    playerName1 = prompt ('enter name');
    name1.append(playerName1);
    alert(`${$(name1).text()} is playing for X `);
  });

  player2.click(function () {
    playerName2 = prompt('enter name');
    name2.text(playerName2);
    alert (`${$(name2).text()} is playing for O`);
  });

  let mainFunction = function(value) {
    if (counter%2 == 0) {
      $(value).text('x').append('<img src="x.png">');
      $(turn2).text("►");
      $(turn1).text("");
      }
      else {
      $(value).text('o').append('<img src="o.png">');
      $(turn1).text("◀︎");
      $(turn2).text("");
      }
      counter++;
      if (counter > 4){
      checkWinner();
      // checkWinner2();
    }
  };



  $('.grid-container').on('click', '*',function() {
    mainFunction(this);
    $(this).off();
    console.log(counter);
  });

  function checkWinner() {
    let cell1 = $('.TL').text();
    let cell2 = $('.TC').text();
    let cell3 = $('.TR').text();
    let cell4 = $('.CL').text();
    let cell5 = $('.CC').text();
    let cell6 = $('.CR').text();
    let cell7 = $('.BL').text();
    let cell8 = $('.BC').text();
    let cell9 = $('.BR').text();

// compares text value of elements and determines the winner
    if ((cell1 == 'x' && cell2 == 'x' && cell3 == 'x') || (cell4 == 'x' && cell5 == 'x' && cell6 == 'x') || (cell7 == 'x' && cell8 == 'x' && cell9 == 'x') || (cell1 == 'x' && cell5 == 'x' && cell9 == 'x') || (cell7 == 'x' && cell5 == 'x' && cell3 == 'x') || (cell1 == 'x' && cell4 == 'x' && cell7 == 'x') || (cell2 == 'x' && cell5 == 'x' && cell8 == 'x') || (cell3 == 'x' && cell6 == 'x' && cell9 == 'x')) {
      alert (`${playerName1} is the winner!`);
      total++;
      xWins++;
      $('.xWins').html(xWins);
      $('.totalCount').html(total);
    } else if ((cell1 == 'o' && cell2 == 'o' && cell3 == 'o') || (cell4 == 'o' && cell5 == 'o' && cell6 == 'o') || (cell7 == 'o' && cell8 == 'o' && cell9 == 'o') || (cell1 == 'o' && cell5 == 'o' && cell9 == 'o') || (cell7 == 'o' && cell5 == 'o' && cell3 == 'o') || (cell1 == 'o' && cell4 == 'o' && cell7 == 'o') || (cell2 == 'o' && cell5 == 'o' && cell8 == 'o') || (cell3 == 'o' && cell6 == 'o' && cell9 == 'o')) {
      alert(`${playerName2} is the winner!`);
      oWins++;
      total++;
      $('.totalCount').html(total);
      $('.oWins').html(oWins);
    } else if (counter == 9) {
      alert(`it's a draw!`);
      draws++;
          total++;
          $(".totalCount").html(total);
      $(".draws").html(draws);
    }
    else {
      return false;
    }
  }

  reload.click(function () {
    $('.TL, .TC, .TR, .CL, .CC, .CR, .BL, .BC, .BR').empty();
  counter = 0;
  });
});

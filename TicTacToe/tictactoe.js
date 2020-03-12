var turn= 'X'

function change() {
  if (turn == 'X') { // true
    // turn == 'O'; // false
    turn = 'O'; // turn changes it's value to O
  } else {
    turn = 'X'; // turnn changes it's value to X
  }

  // Change the current player  
  document.getElementById("currentplayer").innerText = "Current Player: " + turn;
}


function myFunction(event) {
    event.target.innerText = turn;
    checkForWin();   
    change();       
}

function checkForWin() {
  var blockArray = document.getElementsByTagName("td");
  // Rows 1 - 3
  if ((blockArray[0].innerText != "") 
      && blockArray[0].innerText == blockArray[1].innerText
      && blockArray[0].innerText == blockArray[2].innerText
      && blockArray[1].innerText == blockArray[2].innerText) {
    document.getElementById("winner").innerText = turn + " wins!";
  }
  
  if ((blockArray[3].innerText != "") 
      && blockArray[3].innerText == blockArray[4].innerText
      && blockArray[3].innerText == blockArray[5].innerText
      && blockArray[4].innerText == blockArray[5].innerText) {
    document.getElementById("winner").innerText = turn + " wins!";
  }
  

  if ((blockArray[6].innerText != "") 
      && blockArray[6].innerText == blockArray[7].innerText
      && blockArray[6].innerText == blockArray[8].innerText
      && blockArray[7].innerText == blockArray[8].innerText) {
    document.getElementById("winner").innerText = turn + " wins!";
  }
  

  // Columns 1 - 3

  if ((blockArray[0].innerText != "") 
      && blockArray[0].innerText == blockArray[3].innerText
      && blockArray[0].innerText == blockArray[6].innerText
      && blockArray[3].innerText == blockArray[6].innerText) {
    document.getElementById("winner").innerText = turn + " wins!";
  }
  
  if ((blockArray[1].innerText != "") 
      && blockArray[1].innerText == blockArray[4].innerText
      && blockArray[1].innerText == blockArray[7].innerText
      && blockArray[4].innerText == blockArray[7].innerText) {
    document.getElementById("winner").innerText = turn + " wins!";
  }
  

  if ((blockArray[2].innerText != "") 
      && blockArray[2].innerText == blockArray[5].innerText
      && blockArray[2].innerText == blockArray[8].innerText
      && blockArray[5].innerText == blockArray[8].innerText) {
    document.getElementById("winner").innerText = turn + " wins!";
  }

  // Diagonal top left to bottom right
  
  if ((blockArray[0].innerText != "") 
    && blockArray[0].innerText == blockArray[4].innerText
    && blockArray[0].innerText == blockArray[8].innerText
    && blockArray[4].innerText == blockArray[8].innerText) {
    document.getElementById("winner").innerText = turn + " wins!";
  }
  // Diagonal bottom left to top right
  if ((blockArray[2].innerText != "") 
    && blockArray[2].innerText == blockArray[4].innerText
    && blockArray[2].innerText == blockArray[6].innerText
    && blockArray[4].innerText == blockArray[6].innerText) {
    document.getElementById("winner").innerText = turn + " wins!";
  }

}

window.addEventListener("load", function() {

    //one
    document.getElementById("one").addEventListener("click", myFunction); 

    //two
    document.getElementById("two").addEventListener("click", myFunction); 

    //three
    document.getElementById("three").addEventListener("click", myFunction); 

    //four
    document.getElementById("four").addEventListener("click", myFunction); 

    //five
    document.getElementById("five").addEventListener("click", myFunction); 

    //six
    document.getElementById("six").addEventListener("click", myFunction); 

    //seven
    document.getElementById("seven").addEventListener("click", myFunction); 

    //eight
    document.getElementById("eight").addEventListener("click", myFunction); 

    //nine
    document.getElementById("nine").addEventListener("click", myFunction); 

});

  function displayInput(input){
document.getElementById("result").value += input;
  }

  function removeResult(){
document.getElementById("result").value= "0";
  }
  
  function calculateResult(){
var finalInputs = document.getElementById("result").value;
var calculatedResult = eval(finalInputs); 
document.getElementById("result").value = calculatedResult; 
  }
  function powerSquare(input){
    document.getElementById("result").value= input**2;
  }

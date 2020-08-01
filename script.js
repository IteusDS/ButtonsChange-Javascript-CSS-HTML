var blue ="#0074D9";
var lime ="#01ff70";
var yellow   ="#FFDC00";
var red ="#FF4136";
var pink ="pink";
var blue1 ="#2a1adb";
var orange = "#ed9302";
var black = "black";
var txt1 = "white";

var buttonBlue = document.getElementById("blue");
var buttonLime = document.getElementById("lime");
var buttonYellow = document.getElementById("yellow");
var buttonRed = document.getElementById("red");
var buttonBlue1 = document.getElementById("blue1");
var buttonOrange = document.getElementById("orange");
var buttonBlack = document.getElementById("black");
var buttonPink = document.getElementById("pink");
var buttonBlack1 =document.getElementById("txt1");


var last="";
var body = document.getElementById("body");


function color(value) 
{
  if (last === value){
  buttonBlue.style.border ="none";
  buttonLime.style.border ="none";
  buttonYellow.style.border ="none";
  buttonRed.style.border ="none";
  buttonBlue1.style.border ="none";
  buttonOrange.style.border ="none";
  buttonPink.style.border ="none";
  buttonBlack.style.border ="none";
  body.style.backgroundColor ="white";
last="";} 
else {
  if(value === blue) {
    buttonBlue.style.border = "0.5vw dotted white;"
    buttonLime.style.border = "none";
    buttonYellow.style.border = "none";
    buttonRed.style.border = "none";
  buttonBlue1.style.border ="none";
  buttonOrange.style.border ="none";
  buttonPink.style.border ="none";
  buttonBlack.style.border ="none";
   buttonBlack1.style.color= "#ffffff"} 
    
  else if  (value === lime) {
    buttonLime.style.border = "0.5vw dotted white;"
    buttonBlue.style.border = "none";
    buttonYellow.style.border = "none";
    buttonRed.style.border = "none";
      buttonBlue1.style.border ="none";
  buttonOrange.style.border ="none";
  buttonPink.style.border ="none";
  buttonBlack.style.border ="none";
   buttonBlack1.style.color= "#ffffff";
  
} else 
  if(value === yellow ) {
    buttonYellow.style.border = "0.5vw dotted white";
    buttonLime.style.border = "none";
    buttonBlue.style.border = "none";
    buttonRed.style.border = "none";
      buttonBlue1.style.border ="none";
  buttonOrange.style.border ="none";
  buttonPink.style.border ="none";
  buttonBlack.style.border ="none";
   buttonBlack1.style.color= "#000000";
  }
else if(value === red ) {
    buttonRed.style.border = "0.5vw dotted white;"
    buttonLime.style.border = "none";
    buttonBlue.style.border = "none";
    buttonYellow.style.border = "none";
      buttonBlue1.style.border ="none";
  buttonOrange.style.border ="none";
  buttonPink.style.border ="none";
  buttonBlack.style.border ="none";
   buttonBlack1.style.color= "#ffffff";}

else if(value === blue1 ) {
    buttonBlue1.style.border = "0.5vw dotted white;"
    buttonLime.style.border = "none";
    buttonBlue.style.border = "none";
    buttonYellow.style.border = "none";
      buttonRed.style.border ="none";
  buttonOrange.style.border ="none";
  buttonPink.style.border ="none";
  buttonBlack.style.border ="none";
   buttonBlack1.style.color= "#ffffff";}


  else if(value === orange ) {
    buttonOrange.style.border = "0.5vw dotted white;"
    buttonLime.style.border = "none";
    buttonBlue.style.border = "none";
    buttonYellow.style.border = "none";
      buttonRed.style.border ="none";
  buttonBlue1.style.border ="none";
  buttonPink.style.border ="none";
  buttonBlack.style.border ="none";
   buttonBlack1.style.color= "#000000";}

  else if(value === pink ) {
    buttonPink.style.border = "0.5vw dotted white;"
    buttonLime.style.border = "none";
    buttonBlue.style.border = "none";
    buttonYellow.style.border = "none";
      buttonRed.style.border ="none";
  buttonBlue1.style.border ="none";
  buttonOrange.style.border ="none";
  buttonBlack.style.border ="none";
  buttonBlack1.style.color= "#ffffff";}

  
  else if(value === black ) {
    buttonBlack.style.border = "0.5vw dotted white;"
    buttonLime.style.border = "none";
    buttonBlue.style.border = "none";
    buttonYellow.style.border = "none";
      buttonRed.style.border ="none";
  buttonBlue1.style.border ="none";
  buttonOrange.style.border ="none";
  buttonPink.style.border ="none";
  buttonBlack1.style.color= "#ffffff";}






body.style.backgroundColor = value;
last = value;
}
}



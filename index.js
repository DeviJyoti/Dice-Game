// Ye method hum tb use krte h jb hum jquery ko top me add krte hai html me
// $(document).ready(function(){
//   $("h1").css("color","red");
// });

//ye method hum tb use krte h jb hum jquery ko bottom me add krte hai
// $("h1").css("color","red");


 //dice challenge solution using javascript
var randomeNumber1 = Math.floor((Math.random() * 6) + 1);
var randomeNumber2 = Math.floor((Math.random() * 6) + 1);
 if(randomeNumber1>randomeNumber2){
   document.getElementById("h1").innerHTML = "Player 1 win!";
 }
 else if(randomeNumber2>randomeNumber1){
   document.getElementById("h1").innerHTML = "Player 2 win!";
 }
 else{
      document.getElementById("h1").innerHTML = "Draw!";
 }

 //for dice 1
if(randomeNumber1==1){
  document.getElementById("img1").src = "images/dice1.png";
}
if(randomeNumber1==2){
  document.getElementById("img1").src = "images/dice2.png";
}
if(randomeNumber1==3){
  document.getElementById("img1").src = "images/dice3.png";
}
if(randomeNumber1==4){
  document.getElementById("img1").src = "images/dice4.png";
}
if(randomeNumber1==5){
  document.getElementById("img1").src = "images/dice5.png";
}
if(randomeNumber1==6){
  document.getElementById("img1").src = "images/dice6.png";
}
//for dice 2
if(randomeNumber2==1){
 document.getElementById("img2").src = "images/dice1.png";
}
if(randomeNumber2==2){
 document.getElementById("img2").src = "images/dice2.png";
}
if(randomeNumber2==3){
 document.getElementById("img2").src = "images/dice3.png";
}
if(randomeNumber2==4){
 document.getElementById("img2").src = "images/dice4.png";
}
if(randomeNumber2==5){
 document.getElementById("img2").src = "images/dice5.png";
}
if(randomeNumber2==6){
 document.getElementById("img2").src = "images/dice6.png";
}

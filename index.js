var randomNumber1=Math.random();
randomNumber1=Math.floor(randomNumber1*6+1);  //1-6

var randomDiceImage= "dice" + randomNumber1 + ".png"         //dice1.png-dice6.png

var diceImage= "images/" + randomDiceImage;                 //images/dice1.png-dice6.png

var image1= document.querySelectorAll("img")[0];

   image1.setAttribute("src", diceImage);                   //attribute is changes accoring to the code



var randomNumber=Math.random();
randomNumber=Math.floor(randomNumber*2*3+1);                          //1-6

var randomDiceImage2="images/dice" + randomNumber + ".png";          //images/dice1.png-dice6.png

var image2= document.querySelector(".img2");
image2.setAttribute("src", randomDiceImage2);                  // attribute is changes accoring to the code



if(randomNumber1>randomNumber)
{
  document.querySelector("h1").innerHTML="🚩Player1 Wins";
}
else if (randomNumber>randomNumber1) {
  document.querySelector("h1").innerHTML="Player2🚩 Wins";
}
else{
  document.querySelector("h1").innerHTML="🚩Draw🚩";
}

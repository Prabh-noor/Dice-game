var randomNumber1= Math.floor((Math.random()*6)+1);  //1-6
var randomImg= "images/dice" + randomNumber1 + ".png"; //src from dice1 to dice2
document.querySelector(".img1").setAttribute("src", randomImg); //changing the src on every refresh

var randomNumber2= Math.floor((Math.random()*6)+1);  //For img2
var randomImg= "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", randomImg);

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML= "Player 1 Wins!";
}
else if(randomNumber2>randomNumber1)
{
    document.querySelector("h1").innerHTML= "Player 2 Wins!";
}
else
{
    document.querySelector("h1").innerHTML= "Draw!";
}

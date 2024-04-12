var randamnumber1=Math.floor(Math.random() *6) + 1;

var randomimage= "dice" + randamnumber1 + ".png";

var imageselecter="images/" + randomimage;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",imageselecter)

var randamnumber2=Math.floor(Math.random() *6) + 1;

var randomimage2= "images/dice" + randamnumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomimage2)

if(randamnumber1>randamnumber2){
    document.querySelector("h1").innerHTML="player1 win"
}
else if(randamnumber1<randamnumber2){
    document.querySelector("h1").innerHTML="player2 win"
}
else{
    document.querySelector("h1").innerHTML="Draw"
}
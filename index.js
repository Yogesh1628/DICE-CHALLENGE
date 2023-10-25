var num1 =Math.floor(Math.random() * 6) + 1;

var num2 =Math.floor(Math.random() * 6) + 1;

var newsource1= ".//images/" + "dice"+ num1+ ".png" ;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",newsource1);


var newsource2= ".//images/" + "dice"+ num2+ ".png" ;

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",newsource2);

if(num1>num2)
{
    document.querySelector("h1").innerHTML=("Player 1 Wins");
}
else if(num1<num2)
{
    document.querySelector("h1").innerHTML=("Player 2 Wins");
}
else
{
    document.querySelector("h1").innerHTML=("DRAW !");
}







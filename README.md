//# love_calculator
//My mini-projects I created while learning Javascript.

console.log(prompt("What is your name?"));
console.log(prompt("What is your partner name?"));
function loveCalculator(){
    var num = Math.floor(100*Math.random())+1;
    if(num===100){
        alert("you are made for each other with 100 love score");
         }
    else if(75<num<99){
        alert("you both fell for each other, spend more time , ur score is between 75-99");
    }
       else if(50<num<74){
       alert("make that confiession today. u both are interested but spend more time to know each other, ur score is between 50-75");
           
    }
       else if(30<num<49){
     alert("it may work out but u should not give up. it may seem tough but its not , ur love score is between 30-50");
    }
       else if(0<num<29){
        alert("try harder to make ur love a strong bond as it is below 30");
    }
}
loveCalculator();

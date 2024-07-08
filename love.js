<script>
console.log(prompt("What is your name?"));
console.log(prompt("What is your partner name?"));
function loveCalculator(){
    var num = (Math.floor(100*Math.random())+1);
    if(num===100){
        console.log("you are made for each other with 100 love score");
         }
    else if(75<num<99){
        console.log("you both fell for each other, spend more time , ur score is between 75-99 "+""+"i.e,"+num);
    }
       else if(50<num<74){
      console.log("make that confiession today. u both are interested but spend more time to know each other, ur score is between 50-75 "+""+"i.e,"+num);

       
    }
       else if(30<num<49){
    console.log("it may work out but u should not give up. it may seem tough but its not , ur love score is between 30-50 "+""+"i.e,"+num);
    }
       else if(0<num<29){
       console.log("try harder to make ur love a strong bond as it is below 30 "+""+"i.e,"+num);
    }
}
loveCalculator();
</script>

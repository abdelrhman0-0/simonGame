var gamePattern=[];
var buttonColor=["red","blue","green","yellow"];
var userClickedPattern=[];
var level=0;


$(".btn").click(function(){
  var userChosenColor =$(this).attr("id");
userClickedPattern.push(userChosenColor);

playSound(userChosenColor);
animatePress(userChosenColor)
checkAnswer(userClickedPattern.length-1);
});


function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
      $("body").addClass("game-over");
      $("h1").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}






function nextSequence(){
userClickedPattern=[];
var randomNumber=Math.floor(Math.random()*4);
var  randomChosenColor=buttonColor[randomNumber];
gamePattern.push(randomChosenColor);
$("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomChosenColor);


level++;
$("h1").text("Level "+level);


};

// if -else
$(document).one("keydown",function(){
  nextSequence();


});





function startOver(){
  level=0;
  gamePattern=[];
  $(document).one("keydown",function(){
    nextSequence();


  });

}





function playSound(name){
  var buttonSound=new Audio("sounds/"+name+".mp3");
  buttonSound.play();
}

function animatePress(currentColor){
$("#"+currentColor).addClass("pressed");
setTimeout(function () {
  $("#"+currentColor).removeClass("pressed");
}, 100);

}


let buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];

var userClickedPattern = []



var level = 0;

var started = false;

$(document).keypress( function() {
    if(!started) {
        $("level-tittle").text('Level' + level);
        nextSquence();
        started = true;
    }
})



$(".btn").on('click', function() {
    var userChooseColor = $(this).attr("id") ;
    userClickedPattern.push(userChooseColor)
    console.log(userClickedPattern)
    playSound(userChooseColor)
    checkAnswer(userClickedPattern.length - 1)
})

function checkAnswer(currentLevel) {
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("sukses")
        if(userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSquence()
            }, 1000)
        }
    } else {
        console.log('wrong');

        var wrong = new Audio("sounds/wrong.mp3")
        $('body').addClass('.game-over')
        setTimeout(function() {
            $('body').removeClass(".game-over")
        }, 20000);

        wrong.play()
        $('.level-tittle').text("Game Over, Press Any Key to Restart")
       
        startOver()

    }
}


function nextSquence() {

    userClickedPattern = []

    level++

    $("level-tittle").text('Level' + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
  
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour)  
   
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false
}



function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
    
}

function animatePress(currentColours) {
    var button = $("#" + currentColours)
    button.addClass('.pressed');
    setTimeout(function() {
        button.removeClass('.pressed')
    }, 100)
}






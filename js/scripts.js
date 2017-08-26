//business logic :contructors and prototype
var player1="";
var player2="";

var throwdice = function () {
  return Math.floor(Math.random()*6)+1; //math.random () returns a pseudo-random number between 0-1
}                                       //The Math.floor() function returns the largest integer less than or equal to a given number.

function Player(turn) {
  this.roll = 0;
  this.score = 0;
  this.totalscore = 0;
  this.turn = turn;
  this.playerName;
}

Player.prototype.rollone = function() {
  if (this.roll === 1) {
  this.score = 0;
  alert("You rolled a 1! Your turn is over" + " "+ this.playerName)
  } else {
  this.score += this.roll;
  }
}

//hold
Player.prototype.hold = function () {
  this.totalscore += this.score;
  this.score = 0;
  alert("your turn is over, pass the Dice" + " " + this.playerName);
}

//check for 100
Player.prototype.winnerCheck = function () {
  if (this.totalscore >= 100) {
    alert(this.playerName + " Winner!");
  }
}

Player.prototype.newGame = function () {
  this.roll = 0;
  this.score = 0;
  this.totalscore = 0;
  this.playerName ="";
}

var clearValues = function(){
  $(".player1Name").val("");
  $(".player2Name").val("");
}

// User Interface
$(document).ready(function() {

  $("button#start").click(function(event){
    player1 = new Player(true);
    player2 =  new Player(false);
    $(".roll-dice").show();
    $(".playernames").hide();

    var player1Name = $(".player1Name").val();
    $("#player1Name").text(player1Name);

    var player2Name = $(".player2Name").val();
    $("#player2Name").text(player2Name);

    player1.playerName=player1Name;
    player2.playerName=player2Name;

  });
  //roll dice
  $("button#player1-roll").click(function(event){
    player1.roll = throwdice();
    $("#roll-1").text(player1.roll);
    player1.rollone();
    $("#round-total-1").text(player1.score);
  });

  $("button#player1-hold").click(function(event){
    player1.hold();
    $("#total-score-1").text(player1.totalscore);
    $("#round-total-1").empty();
    $("#roll-1").empty();
    player1.winnerCheck();
  });

  $("button#player2-roll").click(function(event){
    player2.roll = throwdice();
    $("#roll-2").text(player2.roll);
    player2.rollone();
    $("#round-total-2").text(player2.score);
  });

  $("button#player2-hold").click(function(event){
    player2.hold();
    $("#total-score-2").text(player2.totalscore);
    $("#round-total-2").empty();
    $("#roll-2").empty();
    player2.winnerCheck();
  });

});

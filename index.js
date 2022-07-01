// alert("added");


//detecting button pres
for (var i = 0; i < document.querySelectorAll(".drum ").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    makesound(this.innerHTML);
    animation(this.innerHTML);
    //this.style.color="white";
  });
}


//detecting keyboard pres
document.addEventListener("keydown", function(event) {
  makesound(event.key);
  animation(event.key);
});


// function to make sound
function makesound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
      case "W":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
      case "A":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
      case "S":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
      case "D":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
      case "J":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
      case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "L":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    default:

  }
}

function animation(currentkey){
  document.querySelector("."+currentkey).classList.add("pressed");

  setTimeout(function(){
    document.querySelector("."+currentkey).classList.remove("pressed");
  },100);
}

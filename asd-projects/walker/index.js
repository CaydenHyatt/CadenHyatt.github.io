/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
var walker = { 
  "positionX": 0,
   "speedX": 0,
   "positionY": 0,
   "speedY": 0,
  }

  // Game Item Objects
  var KEY = {
    'LEFT': 37,
    'UP': 38,
    'RIGHT': 39,
    'DOWN': 40,
  };

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);    // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);
 
    ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem()
    redrawGameItem()

  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
   if (event.which === KEY.UP){
    console.log("upArrow Pressed");
    walker.speedY = -5;
   }
   if (event.which === KEY.LEFT) {
    console.log("leftArrow Pressed");
    walker.speedX = -5;
   }
   if (event.which === KEY.RIGHT) {
    console.log("rightArrow Pressed");
    walker.speedX = +5;
   }
   if (event.which === KEY.DOWN) {
    console.log("DownArrow Pressed");
    walker.speedY = +5;
   }
  }

  function handleKeyUp(){
   walker.speedX = 0;
   walker.speedY = 0;
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  function repositionGameItem() {
  walker.positionX += walker.speedX;
  walker.positionY += walker.speedY;
  }
  function redrawGameItem() {
  $("#walker").css("left", walker.positionX);
  $("#walker").css("right", walker.positionX);
  $("#walker").css("top", walker.positionY);
  $("#walker").css("bottom", walker.positionY);
  }
  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }

  
}

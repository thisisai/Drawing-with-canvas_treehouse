//Problem: No user interaction causes no change to application
//Solution: When user interacts cause changes appropriately
var color = $(".selected").css("background-color");
var $canvas = $('canvas');
var context = $canvas[0].getContext("2d");
var lastEvent;
var isMouseDown = true;

//When clicking on control list items
$(".controls").on('click', 'li', function(){
  //Deselect sibling elements
  $(this).siblings().removeClass("selected");
  //Select clicked element
  $(this).addClass("selected");
  //cache current color
  color = $(this).css("background-color");
});
  
//When new color is pressed
$("#revealColorSelect").click(function(){
  //Show color select or hide the color select
  changeColor();
  $("#colorSelect").toggle();
});

//update the new color span
function changeColor() {
  var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();
  $("#newColor").css("background-color", "rgb(" + r + "," + g +", " + b + ")");
}

//When color sliders change
$("input[type=range]").change(changeColor);

//When add color is pressed
$('#addNewColor').click(function(){
  //Append the color to the controls ul
  var $newColor = $('<li></li>');
  $newColor.css("background-color", $("#newColor").css("background-color") );
  $('.controls ul').append($newColor);
  
  //Select the new color
  $newColor.click();
});
  
//On mouse events on the canvas
$canvas.mousedown(function(event){
  lastEvent = event;
  isMouseDown = true;
}).mousemove(function(event){
  //Draw lines
  if(isMouseDown){
    context.beginPath();
    context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
    context.lineTo(event.offsetX, event.offsetY);
    context.stroke();
    context.strokeStyle = color;
    lastEvent = event;
  }
}).mouseup(function(event){
  isMouseDown = false;
}).mouseleave(function(){
  isMouseDown = false;
});















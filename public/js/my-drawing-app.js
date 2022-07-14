/* The code for our drawing application!
Feel free to delete any/all of it and replace with your own functionality. */

var path;
var currentColor = 'black'
var currentWidth = 5

tool.onMouseDown = function(event) { //This code in this function is called whenever the mouse is clicked.
    path = new Path();     // Create a new path each time.
    path.add(event.point);
    path.strokeColor = currentColor;
    path.strokeWidth = currentWidth;
    console.log(event.point); //this commands log to the Console the coordinates of the mouse click. Feel free to delete it!
}

tool.onMouseDrag = function(event) {
    path.add(event.point); //Add points to the path as the user drags their mouse.
}

$('#brush').on('click', function (e) { //jquery click event code for our "pencil" button.
  console.log('brush')
    currentColor = 'black';  //change the color to black
    currentWidth = 5;       //change the width to 5
})
$('#thick-green').on('click', function (e) { //jquery button click code for our "green paint" button.
    currentColor = 'green';
    currentWidth = 15;
})

$('#eraser').on('click', function (e) { //jquery button click code for our eraser button.
  if ($('#my-canvas').hasClass('chalkboard-g')) {
    currentColor = "#3E5C32";
  } else if ($('#my-canvas').hasClass('chalkboard-b')) {
    currentColor = "#2C2E2B";
  } else {
      currentColor = 'white';
  }

    currentWidth = 20;
})



/*CHANGING TO BLACK CHALKBOARD*/
$('#bChalk').on('click', function (e) {
  console.log('clicked-bChalk')
  if (!$('#my-canvas').hasClass('chalkboard-b')) { //will only toggle classes if not currently on a black chalkboard
    if ($('#my-canvas').hasClass('chalkboard-g')) { //if green chalkboard is activated, remove the class
      $('#my-canvas')
              .toggleClass('chalkboard-g')
    }
    $('#my-canvas')
            .toggleClass('chalkboard-b')
  }
})

/*CHANGING TO GREEN CHALKBOARD*/
$('#gChalk').on('click', function (e) {
  console.log('green')
  if (!$('#my-canvas').hasClass('chalkboard-g')) {
    if ($('#my-canvas').hasClass('chalkboard-b')) {
      $('#my-canvas')
              .toggleClass('chalkboard-b')

    }
    $('#my-canvas')
            .toggleClass('chalkboard-g')
  }
})

/*CHANGING TO WHITE CANVAS*/
$('#wCanvas').on('click', function (e) {
  console.log('white')
   if ($('#my-canvas').hasClass('chalkboard-g')) { //removes green chalk class if activated
    $('#my-canvas')
            .toggleClass('chalkboard-g')
  } else if ($('#my-canvas').hasClass('chalkboard-b')) { //removes black chalk class if activated
    $('#my-canvas')
            .toggleClass('chalkboard-b')
  }
})

$('#palette').on('click', function (e) {
  console.log('color extractor! :D')
  $('#my-canvas')
          .toggleClass('move-canvas')
  $('#color-extractor')
          .toggleClass('move-c-extractor')

})

$('#insert-image').on('click', function (e) {
  console.log('insert image')
  $('#colorzz')
          .toggleClass('display-c-palette')
  console.log($('#c-palette').hasClass('display-c-palette'))

  $('#insert-image')
          .toggleClass('old-car')
  $("#extractor-text").hide();


})


/*
var cnv = document.getElementById("my-canvas");
 var ctx = cnv.getContext("2d");

 for(var i=5; i <- 605; i=i+6)
 {
   ctx.moveTo(i,5);
   ctx.lineTo(i, 605);

   ctx.moveTo(5, i);
   ctx.lineTo(605, i);

   ctx.strokeStyle = "#f0f0f0";
   ctx.stroke();
 }

 ctx.beginPath();
 for(var i=5; i <=605; i=i+30)
 {
   ctx.moveTo(i,5);
   ctx.lineTo(i,605);

   ctx.moveTo(5, i);
   ctx.lineTo(605, i);

   ctx.strokeStyle = "#c0c0c0";
   ctx.stroke();
 }
*/

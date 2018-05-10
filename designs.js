/*jshint esversion: 6 */

// Select color input
let $color = $('#colorPicker');

// Select the table
let $table = $('#pixelCanvas');

// Select size input
let $size = $('#sizePicker');
let $Height = $('#inputHeight');
let $Width = $('#inputWidth');

// When size is submitted by the user, call makeGrid()
$size.submit(function (event) {
  $table.children().remove();
  event.preventDefault();
  makeGrid();
});

/**
Selecting the table and making the background that value of that choosen
color, using the colorPicker id and pixelCanvas id
*/
$table.mouseover(function () {
    $(this).find('td').on('click', function () {
      $(this).css('background-color', $color.val());
    });
  });


function makeGrid() {
  // Your code goes here!
  for (let h = 0; h < $Height.val(); h++) {
    $table.append('<tr></tr>');
    for (let w = 0; w < $Width.val(); w++) {
      $('tr:last').append('<td></td>');
    }
  }
}

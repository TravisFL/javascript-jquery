$(document).ready(function() {
	// start of the for loop
	var block = $(".block");

	for(var i=1;i<256;i++) {
	$(".container").append(block.clone(true));
}   //end of the for loop	
	
$("#clear").on("click",function() {
	$(".container").empty();
	//$("#form").val("");

});

$("#button").on("click",function() {
	var box = parseInt(prompt("Enter a number from 16 - 125"));

	//variables to gather width
var widthX = 800;
var widthY = box;
var width = (widthX / widthY);
	//variables to gather height
var heightX = 800;
//var heightY = $("#form").val();
var heightY = box;
var height = (heightX / heightY);

	// function to clone block div and append to container div
	//var boxCount = ($("#form").val() * $("#form").val());
	var boxCount = (box * box);

	var blockX = block.css({"width": width,"height": height});

	for(var i=1;i<=boxCount;i++) {
	$(".container").append(blockX.clone(true));
}

$(".block").mouseenter(function() {
	$(this).css("background-color", "black");
	});
/* Multiple color change option -- Dont delete
	$(".block").mouseenter(function() {
	var randomColorChange = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
	$(this).css("background-color", randomColorChange);
	});
*/
}); // <-- ends button on click function

}); // <-- ends document.ready function

/* Multiple color change option -- Dont delete
$(".block").mouseenter(function() {
	var randomColorChange = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
	$(this).css("background-color", randomColorChange);
	});
*/

// 1 Color change option start
$(".block").mouseenter(function() {
	$(this).css("background-color", "black");
	});

 // 1 Color change option end 




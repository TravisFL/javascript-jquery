

$(document).ready(function() {
	
	var block = $(".block");

	for(var i=1;i<256;i++) {
	$(".container").append(block.clone(true));
}	

$("#button").on("click",function() {
	$(".block").hide();
	var boxCount = $("#form").val();
	for(var i=1;i<boxCount;i++) {

	$(".container").append(block.clone(true));
	}
});

});

//Multiple color change option
$(".block").mouseenter(function() {
	var randomColorChange = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
	$(this).css("background-color", randomColorChange);
	});


/* 1 Color change option start
$(".block").mouseenter(function() {
	$(this).css("background-color", "red");
	});
$(".block").mouseleave(function() {
	$(this).css("background-color", "black");
	});
 1 Color change option end */




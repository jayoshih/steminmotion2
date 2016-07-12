'use strict';
// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	$("#default_panel").css("display", "block");
	$(".program-btn").click(openProgramPanel);
});

function openProgramPanel(event){
	$(".panel_program").css("display", "none");
	console.log(event.target.getAttribute("id").split("_")[0]);
	$("#" + event.target.getAttribute("id").split("_")[0] + "_panel").css("display", "block");
}
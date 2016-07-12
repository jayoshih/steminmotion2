'use strict';
var start;

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	$("#submit_url").keydown(updatePreview);
	$(".sd_nav").click(function(event){
		var page = event.target.id.split("_")[1];
		console.log($("#" + page));
		$(".sd_page").css("display", "none");
		$("#" + page).css("display", "block");
	});
	$("#default-page").css("display", "block");
});

function updatePreview(){
	$("#submit_preview").attr("src", $("#submit_url").val().trim());
}

$(document).ready(function(){
	/*
	$(".open").on("click", function(){
		$(".popup-overlay, .popup-content").toggleClass("active");
		//$("#olay").addClass("active");

		console.log("Open");
	});
	*/
	$(".open").on("click", roll2);

	//removes the "active" class to .popup and .popup-content when the "Close" button is clicked 

});


var laksImg = $( "#laks" );
var msgBox = $( "#msg" );
var justShown = false;

var msgArray = [
	"Sup.",
	"Happy Birthday, Laks!",
	"Damnit.",
	"You made it.",
	"Not only to get to 31.",
	"But way more than that.",
	"As the pic is witness.",
	"What do I mean?",
	"It's pretty easy.",
	"You stayed cool all this time!",
	"Yea.",
	"Boy.",
	"Very cool.",
	"Very cool indeed.",
	"Anyway.",
	"It's cool that you are cool.",
	"I love you.",
	"As a token of my appreciation, please click on the link above."
];

curMsgIdx = 0;
timeoutId = null;

function hideBox()
{
	timeoutId = null;
	//msgBox.css("display", "none");
	msgBox.css("visibility", "hidden");
}

function showBox()
{
	//msgBox.css("display", "inline-block");
		msgBox.css("visibility", "visible");

}

function roll2()
{
	console.log("Invoking roll2();");
	
	var isFirstShowing = (curMsgIdx == 0);
	var noMoreShowing = (curMsgIdx == (msgArray.length-1));

	
	if (justShown && isFirstShowing) {
		justShown = false;
		$(".popup-overlay, .popup-content").toggleClass("active");
		
		console.log("Last round finished");


		return;
	}
	
	if (noMoreShowing) {
			$("#ticklink").addClass("vis");
			console.log("Last round");

	}
	
	if (isFirstShowing) {
		console.log("First showing");
		$(".popup-overlay, .popup-content").toggleClass("active");

	}
	
	msgBox.text(msgArray[curMsgIdx]);


	curMsgIdx = (curMsgIdx+1) % msgArray.length;
	justShown = true;

}

function roll()
{	
	console.log("Invoking roll();");
	
	// If invoked during timeout hide and that's it
	if (timeoutId != null) {
		window.clearTimeout(timeoutId);
		hideBox();
		return;
	}
	
	
	msgBox.text(msgArray[curMsgIdx]);
	
	var isFirstShowing = (curMsgIdx == 0);
	// Nothing was being shown; show something
	if (isFirstShowing) {
		console.log("Showing");
		showBox();
	}
	
	var noMoreShowing = (curMsgIdx == (msgArray.length-1));
	// Stuff was shown; stop showing it soon
	if (noMoreShowing) {
		// set timer here
			console.log("Hiding");
			timeoutId = window.setTimeout(hideBox, 4000);
	}
	
	console.log("From ", curMsgIdx);
	curMsgIdx = (curMsgIdx+1) % msgArray.length;
	console.log("To ", curMsgIdx);
	 
}

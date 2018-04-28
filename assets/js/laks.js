var laksImg = $( "#laks" );
var msgBox = $( "#popup" );

var msgArray = [
	"First message",
	"Second message",
	"Third message",
];

curMsgIdx = 0;
timeoutId = null;

function hideBox()
{
	timeoutId = null;
	msgBox.css("display", "none");
}

function showBox()
{
	msgBox.css("display", "inline-block");
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

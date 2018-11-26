window.onload=function(){
	document.getElementById('xfer').addEventListener('click', function(){
		var gcode = document.getElementById("code").value
	chrome.storage.local.set({
		textcode: gcode
},	function(){
		chrome.tabs.executeScript({
			file: "background.js"
		});
	});
});
}

window.onload=function(){
	var icon = document.getElementById("code");
	icon.addEventListener("focus", focusFunc, true);
	icon.addEventListener("blur", blurFunc, true);
}	

function focusFunc(){
	document.getElementById("icon").src="images/parroticonopen.png";
}

function blurFunc(){
	document.getElementById("icon").src="images/parroticon.png";
}


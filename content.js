function load(){
	var text="";
	chrome.storage.local.get(['textcode'], function(result){
		text=result.textcode;
		document.getElementById("code").innerHTML=text;
});
}
load();

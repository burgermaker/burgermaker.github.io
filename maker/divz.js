function updatedivz(){
	var x = document.getElementsByClassName("builder")[0].getElementsByClassName("ingredient");
	var n;
	for(i = 0; i < x.length; i++){
	n = 99-i;
	x[i].setAttribute("style","z-index: " + n + "; margin-top: -25px;");
	}
}

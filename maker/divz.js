function updatedivz() {
	var x = document.getElementsByClassName("builder")[0].getElementsByClassName("ingredient");
	var n;
	for (i = 0; i < x.length; i++) {
		n = 99 - i;
		x[i].setAttribute("style", "z-index: " + n + "; margin-top: -25px;");
	}
}

if (getParameterByName("name") != null && getParameterByName("burger") != null) {
	var name = getParameterByName("name").toString();
	var cont = getParameterByName("burger").toString();
	document.querySelectorAll("#Default")[0].innerHTML = "<em>\"" + name + "\"</em>";
	insertBurger(getParameterByName("burger"));
} else {
	addNewDiv(3);
}

enterEv();

activateCopy();

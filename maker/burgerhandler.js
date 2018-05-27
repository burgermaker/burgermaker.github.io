var htoggled = false;
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

if(getParameterByName("in") != null){
  addBurger(getParameterByName("in").toString());
}

function addNewDiv(iter){
  for(var i=1; i <= iter; i++){
    document.getElementsByClassName("builder")[0].innerHTML += "<div id=IngredientDiv class=\"dropzone js-drop\"></div>";
  }
}

function highlight(){
	var arr = [].slice.call(document.querySelectorAll("#ingredientlist")[0].children);
	if(!htoggled){
	arr.forEach(function(element) {
  element.style.filter = "hue-rotate(180deg)"
});
	htoggled = true;
	} else {
	arr.forEach(function(element) {
  element.style.filter = "hue-rotate(0deg)"
});
	htoggled = false;
	}
}

addNewDiv(3);
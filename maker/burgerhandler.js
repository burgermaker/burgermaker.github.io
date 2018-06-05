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

if(getParameterByName("name") != null){
  getParameterByName("name").toString();
  getParameterByName("burger").toString();
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

function enterEv(){
  var input = document.getElementById("myNumber");
  input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      document.getElementById("myBtn").click();
      enterEv();
    }
  });
}

function getDivInfo(a){
  if(document.querySelectorAll("#IngredientDiv")[a].children[0] != null){
    return(document.querySelectorAll("#IngredientDiv")[a].children[0].getAttribute("src").split("/")[1].split(".")[0]);
  } else {
    return(null);
  }
}

function getDivCount(){
  return(document.querySelectorAll("#IngredientDiv").length);
}

function getInsertedDivs(){
  return(document.querySelectorAll("#IngredientDiv"));
}

function stringify(){
  var str = "";
  for(var i = 0; i < getDivCount(); i++){
    switch(getDivInfo(i)){
      case "bb bacon":
        str += "a";
        break;
      case "bb bottom bun":
        str += "b";
        break;
      default:
        str += "0";
    }
  }
  return(str);
}
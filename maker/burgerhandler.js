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

addNewDiv(3);
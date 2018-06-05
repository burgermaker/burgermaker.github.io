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
    // Get the input field
  var input = document.getElementById("myNumber");
  console.log("oof");
  // Execute a function when the user releases a key on the keyboard
  input.addEventListener("keyup", function(event) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Trigger the button element with a click
      document.getElementById("myBtn").click();
      console.log("asddjw")
      enterEv();
    }
  });
}
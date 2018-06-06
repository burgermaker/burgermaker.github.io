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

function addNewDiv(iter) {
  for (var i = 1; i <= iter; i++) {
    document.getElementsByClassName("builder")[0].innerHTML += "<div id=IngredientDiv class=\"dropzone js-drop\"></div>";
  }
}

function highlight() {
  var arr = [].slice.call(document.querySelectorAll("#ingredientlist")[0].children);
  if (!htoggled) {
    arr.forEach(function (element) {
      element.style.filter = "hue-rotate(180deg)"
    });
    htoggled = true;
  } else {
    arr.forEach(function (element) {
      element.style.filter = "hue-rotate(0deg)"
    });
    htoggled = false;
  }
}

function enterEv() {
  var input = document.getElementById("myNumber");
  input.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      document.getElementById("myBtn").click();
      enterEv();
    }
  });
}

function getDivInfo(a) {
  if (document.querySelectorAll("#IngredientDiv")[a].children[0] != null) {
    return (document.querySelectorAll("#IngredientDiv")[a].children[0].getAttribute("src").split("/")[1].split(".")[0]);
  } else {
    return (null);
  }
}

function getDivCount() {
  return (document.querySelectorAll("#IngredientDiv").length);
}

function getInsertedDivs() {
  return (document.querySelectorAll("#IngredientDiv"));
}

function stringify() {
  var str = "";
  for (var i = 0; i < getDivCount(); i++) {
    switch (getDivInfo(i)) {
      case "bb bacon":
        str += "a";
        break;
      case "bb bottom bun":
        str += "b";
        break;
      case "bb cheddar cheese":
        str += "c";
        break;
      case "bb colby jack cheese":
        str += "d";
        break;
      case "bb lettuce":
        str += "e";
        break;
      case "bb onions":
        str += "f";
        break;
      case "bb patty":
        str += "g";
        break;
      case "bb swiss cheese":
        str += "h";
        break;
      case "bb tomato":
        str += "i";
        break;
      case "bb top bun":
        str += "j";
        break;
      case "tide pod":
        str += "k";
        break;
      case "Bible":
        str += "l";
        break;
      case "Book of Mormon":
        str += "m";
        break;
      case "Croissant":
        str += "n";
        break;
      case "Fallout76":
        str += "o";
        break;
      case "Hopes and Dreams":
        str += "p";
        break;
      case "Ohyes":
        str += "q";
        break;
      case "Quran":
        str += "r";
        break;
      case "Severed Eyeball":
        str += "s";
        break;
      case "tf is this":
        str += "t";
        break;
      case "Vedas":
        str += "u";
        break;
      default:
        str += "0";
    }
  }
  return (str.replace(/0+$/, ""));
}

function toIng(c) {
  switch (c) {
    case 'a':
      return "bb bacon";
      break;
    case 'b':
      return "bb bottom bun";
      break;
    case 'c':
      return "bb cheddar cheese";
      break;
    case 'd':
      return "bb colby jack cheese";
      break;
    case 'e':
      return "bb lettuce";
      break;
    case 'f':
      return "bb onions";
      break;
    case 'g':
      return "bb patty";
      break;
    case 'h':
      return "bb swiss cheese";
      break;
    case 'i':
      return "bb tomato";
      break;
    case 'j':
      return "bb top bun";
      break;
    case 'k':
      return "tide pod";
      break;
    case 'l':
      return "Bible";
      break;
    case 'm':
      return "Book of Mormon";
      break;
    case 'n':
      return "Croissant";
      break;
    case 'o':
      return "Fallout76";
      break;
    case 'p':
      return "Hopes and Dreams";
      break;
    case 'r':
      return "Quran";
      break;
    case 's':
      return "Severed Eyeball";
      break;
    case 't':
      return "tf is this";
      break;
    case 'u':
      return "Vedas";
      break;
    default:
      return "Ohyes";
  }
}

function insertBurger(burger) {
  addNewDiv(burger.length);
  for (var i = 0; i < document.querySelectorAll("#IngredientDiv").length; i++) {
    var item = document.querySelectorAll("#IngredientDiv")[i];
    if (burger.charAt(i) == 0) {
      item.innerHTML = "";
    } else {
      item.innerHTML = "<img src =\"Ingredients/" + toIng(burger.charAt(i)) + ".png\" class=\"ingredient\" ondragstart=\"return false;\">"
    }
  }
}

function activateCopy() {
  new ClipboardJS('#copy');
  var myName = "";
  if (document.getElementById("myName").value != null) {
    myName = document.getElementById("myName").value;
  } else {
    myName = "";
  }
  document.querySelectorAll("#copy")[0].setAttribute("data-clipboard-text", "https://burgermaker.github.io/maker/test.html?name=" + myName + "&burger=" + stringify());
}

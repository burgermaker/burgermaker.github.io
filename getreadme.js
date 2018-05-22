var xhr = new XMLHttpRequest();

function processRequest(e) {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         console.log(xhr.responseText);
//     }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

xhr.open('GET', "https://raw.githubusercontent.com/burgermaker/burgermaker.github.io/master/README.md", true);
xhr.addEventListener("readystatechange", processRequest, false);
xhr.send();

await sleep(500);

var readget = xhr.responseText.toString();

//process readget with markup

var div = document.getElementById('main');
var node = document.createElement("P");
var textnode = document.createTextNode(readget);
node.appendChild(textnode);
document.getElementById("main").append(node);

var xhr = new XMLHttpRequest();

xhr.open('GET', "https://raw.githubusercontent.com/burgermaker/burgermaker.github.io/master/README.md", true);

function killele(x){
  x.parentNode.removeChild(x);
}

function mdreplace(str){
  document.getElementById(str).innerHTML = micromarkdown.parse(
  document.getElementById(str).innerHTML.toString());
  var images = document.getElementById("main").querySelectorAll('[alt]');
  images.forEach(killele);
}

function processRequest(e) {
  if (xhr.readyState == 4 && xhr.status == 200) {
      document.getElementById("main").innerHTML = "";
      var readget = xhr.responseText.toString();
      var div = document.getElementById('main');
      var node = document.createElement("h1");
      var textnode = document.createTextNode(readget);
      node.appendChild(textnode);
      document.getElementById("main").append(node);
      mdreplace("main");
      var brs = document.getElementById("main").getElementsByTagName('br');
      brs[0].parentNode.removeChild(brs[0]);
      brs[0].parentNode.removeChild(brs[0]);
      brs[0].parentNode.removeChild(brs[0]);
      brs[0].parentNode.removeChild(brs[0]);
  }
}

xhr.addEventListener("readystatechange", processRequest, false);

xhr.send();

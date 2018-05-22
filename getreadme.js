var xhr = new XMLHttpRequest();

xhr.open('GET', "https://raw.githubusercontent.com/burgermaker/burgermaker.github.io/master/README.md", true);

function processRequest(e) {
  if (xhr.readyState == 4 && xhr.status == 200) {
      document.getElementById("main").innerHTML = "";
      var readget = xhr.responseText.toString();
      //process readget
      var div = document.getElementById('main');
      var node = document.createElement("P");
      var textnode = document.createTextNode(readget);
      node.appendChild(textnode);
      document.getElementById("main").append(node);
  }
}

xhr.addEventListener("readystatechange", processRequest, false);

xhr.send();

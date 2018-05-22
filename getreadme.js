var xhr = new XMLHttpRequest();

function processRequest(e) {
    if (xhr.readyState == 4 && xhr.status == 200) {
        console.log(xhr.responseText);
    }
}

xhr.open('GET', "https://raw.githubusercontent.com/burgermaker/burgermaker.github.io/master/README.md", true);
xhr.addEventListener("readystatechange", processRequest, false);
xhr.send();

var div = document.getElementById('main');

div += xhr.responseText.toString();

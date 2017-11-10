function addElemento() {
    var list = document.getElementById('lista');
    var texto = document.getElementById('texto').value;
    var item = document.createElement('li')

    item.appendChild(document.createTextNode(texto));
    list.appendChild(item);
    item.style.color = "#ff0000";

    item.onclick = function () {
        item.style.color = "#00ff00";
    };

    document.getElementById('texto').value = "";
}

var texto = document.getElementById("texto");
texto.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        addElemento();
    }
});
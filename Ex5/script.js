window.onload = function() {
    set();
};

function set(){
    document.getElementById("estados").selectedIndex = "-1";
}

function troca() {
    var sel = document.getElementById("estados");
    var opcao = sel.options[sel.selectedIndex].value;
    var nome;
    
    switch(opcao){
        case "AL":
            nome = "Alagoas";
        break;
        case "BA":
            nome = "Bahia";
        break;
        case "CE":
            nome = "Ceará";
        break;
        case "MA":
            nome = "Maranhão";
        break;
        case "PB":
            nome = "Paraíba";
        break;
        case "PE":
            nome = "Pernambuco";
        break;
        case "PI":
            nome = "Piauí";
        break;
        case "RN":
            nome = "Rio Grande do Norte";
        break;
        case "SE":
            nome = "Sergipe";
        break;
    }

    document.getElementById("nome").innerHTML = "Nome: " + nome;
    document.getElementById("bandeira").src = opcao + ".png";
    
}

function calcular(){
    var peso = document.getElementById("peso").value;
    var sel = document.getElementById("sel");
    var opcao = sel.options[sel.selectedIndex].value;
    var pesoPlanet;

    if (peso == ""){
        alert("Informe um Peso!");
        document.getElementById("peso").focus();
        return;
    }

    switch(opcao){
        case 
            "0": pesoPlanet = peso*0.37;
        break;
        case 
            "1": pesoPlanet = peso*0.88;
        break;
        case 
            "2": pesoPlanet = peso*0.38;
        break;
        case 
            "3": pesoPlanet = peso*2.64;
        break;
        case 
            "4": pesoPlanet = peso*1.15;
        break;
        case 
            "5": pesoPlanet = peso*1.17;
        break;
    }

    pesoPlanet = Math.round(pesoPlanet);

    document.getElementById("pesoPlaneta").innerHTML = "Peso no planeta escolhido: " + pesoPlanet +" kilos.";
}
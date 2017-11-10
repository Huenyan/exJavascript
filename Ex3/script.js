$(".result").slideUp(0);

function calcular(){
    $(".result").slideUp(0);

    var altura = document.getElementById("altura").value;
    var peso = document.getElementById("peso").value;
    var imc;
    var classi;
    var color;

    if (altura == ""){
        alert("Informe uma Altura.");
        document.getElementById("altura").focus();
        return;
    }

    if (peso == ""){
        alert("Informe um Peso.");
        document.getElementById("peso").focus();
        return;
    }

    imc = (peso/(altura*altura));
    imc = Math.round(imc * 100) / 100;

    if (imc < 16){
        classi = "Magreza grave";
        color = "#C00000";
    }
    else if(imc >= 16 && imc < 17){
        classi = "Magreza moderada";
        color = "#ED7D31";
    }
    else if(imc >= 17 && imc < 18.5){
        classi = "Magreza leve";
        color = "#44546A";
    }
    else if(imc >= 18.5 && imc < 25){
        classi = "Saudável";
        color = "#00B050";
    }
    else if(imc >= 25 && imc < 30){
        classi = "Sobrepeso";
        color = "#576579";
    }
    else if(imc >= 30 && imc < 35){
        classi = "Obesidade Grau I";
        color = "#ED7D31";       
    }
    else if(imc >= 35 && imc < 40){
        classi = "Obesidade Grau II (severa)";
        color = "#C00000";       
    }
    else if(imc >= 40){
        classi = "Obesidade Grau III (mórbida)";
        color = "#C00000";
    }

    document.getElementById("resultado").innerHTML = ("Resultado: " + imc);
    document.getElementById("classificacao").innerHTML = ("Classificação: " + classi);
    document.getElementById("classificacao").style.color = color; 

    $(".result").slideDown(500);
}
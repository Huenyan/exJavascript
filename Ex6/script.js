$(document).ready(function(){
    $('.cpf').mask('000.000.000-00', {reverse: true});
});

function validar(){
    var nome = document.forms["form"]["nome"].value;
    var cpf = document.forms["form"]["cpf"].value;
    var data = document.forms["form"]["data"].value;
    var sexo = document.forms["form"]["sexo"].value;

    var colorNome = "#00ff00";
    var colorCPF = "#00ff00";
    var colorData = "#00ff00";
    var colorSexo = "#00ff00";

    var spanNome = "";
    var spanCPF = "";
    var spanData = "";
    
    if (nome==null || nome==""){
        colorNome = "#ff0000";
        spanNome = "Nome não informado!";
    }else if (nome.length < 3){
        colorNome = "#ff0000";
        spanNome = "Nome curto!";
    }

    if (cpf==null || cpf==""){
        colorCPF = "#ff0000";
        spanCPF = "CPF não informado!";
    }else if (!TestaCPF($('.cpf').cleanVal())){
        colorCPF = "#ff0000";
        spanCPF = "CPF invalido!";
    }

    if (data==null || data==""){
        colorData = "#ff0000";
        spanData = "Data não informada!";
    }
    
    document.getElementById("divNome").style.borderStyle = "solid"; 
    document.getElementById("divCPF").style.borderStyle = "solid"; 
    document.getElementById("divData").style.borderStyle = "solid"; 
    document.getElementById("divSexo").style.borderStyle = "solid"; 

    document.getElementById("divNome").style.borderColor = colorNome;
    document.getElementById("divCPF").style.borderColor = colorCPF; 
    document.getElementById("divData").style.borderColor = colorData; 
    document.getElementById("divSexo").style.borderColor = colorSexo; 

    document.getElementById("spanNome").innerHTML = spanNome;
    document.getElementById("spanCPF").innerHTML = spanCPF;
    document.getElementById("spanData").innerHTML = spanData;
}

function TestaCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
	if (strCPF == "00000000000") return false;
    
	for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
	Resto = (Soma * 10) % 11;
	
    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;
	
	Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;
	
    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}
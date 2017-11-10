function calcular(){
    var idade = document.getElementById("idade").value;
    var anos;
    var anosTrunc;
    var meses = 0;
    var dias;

    var tAnos = " anos ";
    var tMeses = " meses e ";
    var tDias = " dias ";

    if (idade >= 365){
        anos = idade/365;
        anosTrunc = Math.trunc(anos);
        dias = idade - (anosTrunc*365); 

        while (dias >= 30){
            meses++;
            dias = dias -30;
        }

        if (anosTrunc == 1){
            tAnos = " ano ";
        }

        if (meses == 1){
            tMeses = " mes e ";
        }

        if (dias == 1){
            tDias = " dia ";
        }
    }

    alert(anosTrunc + tAnos + meses + tMeses + dias + tDias);
}
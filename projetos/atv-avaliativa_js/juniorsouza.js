function triAngolano(){
    let A = parseFloat(document.getElementById("calvicie-a").value);
    let B = parseFloat(document.getElementById("calvicie-base").value);
    let C = parseFloat(document.getElementById("calvicie-c").value);
    let altura = document.getElementById("calvicie-altura").value;
    let area = ((B*altura)/2);
    let perim = A + B + C;
    // condicional ternário ?:
    let validador = ((A < 0) || (B < 0) || (C < 0) || (altura < 0)) ? alert("Número negativo não amigão, insira de novo minha joia") : 
    (document.getElementById("result-area").value = area , document.getElementById("result-perim").value = perim);
}

function ftor(){
    let farenreint = document.getElementById("calvicie-fahrenheit").value;
    let raumur = ((farenreint - 32) * 4 / 9);
    document.getElementById("result-reaumur").value = raumur.toFixed(3);
} 

function ktocf(){
    let kelvin = document.getElementById("calvicie-kelvin").value;
    let rcelsius = (kelvin - 273.15);
    let rfareinrait = ((kelvin - 273.15) * 1.8 + 32);
    document.getElementById("result-celsius").value = rcelsius.toFixed(2);
    document.getElementById("result-Fahrenheit").value = rfareinrait.toFixed(2);
}

function seleciona(aba){
    let lista = document.getElementsByClassName("bagunsa");
    for( let i = 0; i < lista.length; i++ ){
        document.getElementById("taz-" + i).style.display ="none";
        document.getElementById("bt" + i).classList.remove("ativa");
}
document.getElementById("taz-" + aba).style.display="grid";
document.getElementById("bt" + aba).classList.add("ativa");
}

document.getElementById("gera").addEventListener("click", triAngolano);
document.getElementById("calvicie-kelvin").addEventListener("change", ktocf);
document.getElementById("calvicie-fahrenheit").addEventListener("change", ftor);

window.onload = seleciona (0);

document.getElementById("bt0").addEventListener("click", function(){seleciona(0)});
document.getElementById("bt1").addEventListener("click", function(){seleciona(1)});
document.getElementById("bt2").addEventListener("click", function(){seleciona(2)});
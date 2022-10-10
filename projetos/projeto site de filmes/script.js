// função de selecionar abas
function seleciona(aba){
    let lista = document.getElementsByClassName("abas");
    for( let i = 0; i < lista.length; i++ ){
        document.getElementById("aba-" + i).style.display ="none";
        document.getElementById("link" + i).classList.remove("ativa");
}
document.getElementById("aba-" + aba).style.display="grid";
document.getElementById("link" + aba).classList.add("ativa");
}

window.onload = seleciona (0);

document.getElementById("link0").addEventListener("click", function(){seleciona(0)});
document.getElementById("link1").addEventListener("click", function(){seleciona(1)});
document.getElementById("link2").addEventListener("click", function(){seleciona(2)});



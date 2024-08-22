function insert(num){
    
    var numero = document.getElementById('RESULTADO').innerHTML;
    document.getElementById('RESULTADO').innerHTML = numero + num;
}
function clean(){
    document.getElementById('RESULTADO').innerHTML = "";
}
function back(){
    var resultado = document.getElementById('RESULTADO').innerHTML;
    document.getElementById('RESULTADO').innerHTML = resultado.substring(0,resultado.length - 1);
}
function calcular(){
    var resultado = document.getElementById('RESULTADO').innerHTML;
    if (resultado){
        document.getElementById('RESULTADO').innerHTML = eval(resultado)
    }
    else{
        document.getElementById('RESULTADO').innerHTML = "Nada..."
    }
}

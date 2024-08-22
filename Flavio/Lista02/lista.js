
function EX01CALC() {
    let N1 = document.getElementById("EX01Numero").value;
    if (N1 == 0) {
        document.getElementById("EX01res").innerHTML = (N1 + " é igual a 0");
    } else if (N1 > 0) {
        document.getElementById("EX01res").innerHTML = (N1 + " é positivo");
    } else {
        document.getElementById("EX01res").innerHTML = (N1 + " é negativo");
    }
}
function EX02CALC() {
    let N1 = document.getElementById("EX02Numero1").value;
    let N2 = document.getElementById("EX02Numero2").value;
    if (N1 == N2) {
        document.getElementById("EX02res").innerHTML = ("Os 2 são iguais");
    } else if (N1 > N2) {
        document.getElementById("EX02res").innerHTML = ("Os valores são diferente, e " + N1 + " é maior que " + N2);
    }
    else {
        document.getElementById("EX02res").innerHTML = ("Os valores são diferente, e " + N2 + " é maior que " + N1);
    }
}
function EX03CALC() {
    let N1 = parseInt(document.getElementById("EX03Numero").value);
    switch(N1){
        case 1:
            document.getElementById("EX03res").innerHTML = "um";
            break;
        case 2:
            document.getElementById("EX03res").innerHTML = "dois";
            break;
        case 3:
            document.getElementById("EX03res").innerHTML = "três";
            break;
        case 4:
            document.getElementById("EX03res").innerHTML = "quatro";
            break;
        case 5:
            document.getElementById("EX03res").innerHTML = "cinco";
            break;
        default:
            document.getElementById("EX03res").innerHTML = ("É para digitar um valor entre 1 e 5, Não " + N1);
            break;
    }
}
function EX04CALC() {
    let N1 = parseFloat(document.getElementById("EX04Numero").value);
    
    if (N1 == 0) {
        document.getElementById("EX04res").innerHTML = "Veículo Free, cara de sorte";
    } else {
        let comb = document.getElementsByName("EX04combustivel");
        if (comb[0].checked) {
            //Álcool
            let resdes = (25 / 100) * N1
            let res = N1 - resdes 
            document.getElementById("EX04res").innerHTML = ("Seu Veículo Ira ganhar R$" + resdes +" de desconto, ele ira ficar um total de R$" + res); 
        } else if (comb[1].checked) {
            //Gasolina
            let resdes = (21 / 100) * N1
            let res = N1 - resdes 
            document.getElementById("EX04res").innerHTML = ("Seu Veículo Ira ganhar R$" + resdes +" de desconto, ele ira ficar um total de R$" + res);
        } else {
            //Diesel
            let resdes = (14 / 100) * N1
            let res = N1 - resdes 
            document.getElementById("EX04res").innerHTML = ("Seu Veículo Ira ganhar R$" + resdes +" de desconto, ele ira ficar um total de R$" + res);
        }
    }
}
function EX05CALC() {
    let nome = document.getElementById("EX05Nome").value;
    let N1 = parseFloat(document.getElementById("EX05Numero2").value);
    let salinf = document.getElementsByName("EX05salario");
    if (N1 == 0) {
        document.getElementById("EX05res").innerHTML = ("Salário não identficado")
        } else {
        if (salinf[0].checked) {
            let resdes = (50 / 100) * N1
            let res = N1 + resdes
            document.getElementById("EX05res").innerHTML = ("Nome: " + nome + "<br/>Reajuste: " + resdes + "<br/>Salário atual: " + res);
        } else if (salinf[1].checked) {
            let resdes = (20 / 100) * N1
            let res = N1 + resdes
            document.getElementById("EX05res").innerHTML = ("Nome: " + nome + "<br/>Reajuste: " + resdes + "<br/>Salário atual: " + res);
        } else if (salinf[2].checked) {
            let resdes = (15 / 100) * N1
            let res = N1 + resdes
            document.getElementById("EX05res").innerHTML = ("Nome: " + nome + "<br/>Reajuste: " + resdes + "<br/>Salário atual: " + res);
        } else {
            let resdes = (10 / 100) * N1
            let res = N1 + resdes
            document.getElementById("EX05res").innerHTML = ("Nome: " + nome + "<br/>Reajuste: " + resdes + "<br/>Salário atual: " + res);
        }
    }
}
function EX06CALC() {
    let N1 = parseInt(document.getElementById("EX06Numero").value);
    switch(N1){
        case 1:
            document.getElementById("EX06res").innerHTML = "Janeiro";
            break;
        case 2:
            document.getElementById("EX06res").innerHTML = "Fevereiro";
            break;
        case 3:
            document.getElementById("EX06res").innerHTML = "Março";
            break;
        case 4:
            document.getElementById("EX06res").innerHTML = "Abril";
            break;
        case 5:
            document.getElementById("EX06res").innerHTML = "Maio";
            break;
        case 6:
            document.getElementById("EX06res").innerHTML = "Junho";
            break;
        case 7:
            document.getElementById("EX06res").innerHTML = "Julho";
            break;
        case 8:
            document.getElementById("EX06res").innerHTML = "Agosto";
            break;
        case 9:
            document.getElementById("EX06res").innerHTML = "Setembro";
            break;
        case 10:
            document.getElementById("EX06res").innerHTML = "Outubro";
            break;
        case 11:
            document.getElementById("EX06res").innerHTML = "Novembro";
            break;
        case 12:
            document.getElementById("EX06res").innerHTML = "Dezembro";
            break;
        case 13:
            document.getElementById("EX06res").innerHTML = "Infelizmente não temos o mês 13, mas assista esse video aqui: https://www.youtube.com/watch?v=D4LdafZyduk&t=92s";
            break;
        default:
            document.getElementById("EX06res").innerHTML = "Só possuimos 12 Meses";
            break;
        } 
}
function EX30CALC() {
    let nome = document.getElementById("EX30Nome").value;
    let idade = parseInt(document.getElementById("EX30Idade").value);
    let sal = parseFloat(document.getElementById("EX30Sal").value);
    let gen ;
    let genv = document.getElementsByName("EX30Sex");
    let res;
    if (genv[0].checked) {
        gen = "Masculino"
        if (idade >= 30) {
            res = 100
        } else {
            res = 50
        }
    } else {
        gen = "Feminino"
        if (idade >= 30) {
            res = 200
        } else {
            res = 80
        }
    }
    resres = (res + sal)
 document.getElementById("EX30res").innerHTML = ("Olá "+nome+" Seu salário passou de R$"+sal+" para R$"+resres) 
}
function EX31CALC() {
    let N1 = parseFloat(document.getElementById("EX31Numero1").value);
    let N2 = parseFloat(document.getElementById("EX31Numero2").value);
    let N3 = parseFloat(document.getElementById("EX31Numero3").value);
    if (N1 === N2 || N1 === N3 || N2 === N3) {
        document.getElementById("EX31res").innerHTML = "Os valores digitados são iguais, revise os códigos!";
    } else {
        let numerosOrdenados = [N1, N2, N3].sort((a, b) => a - b);
        document.getElementById("EX31res").innerHTML = ("Seus números foram ordenados -> "+numerosOrdenados)
    }
    
}
function EX09CALC() {
    // Verifique se os campos de entrada estão vazios
    if (document.getElementById("EX09Numero1").value === "" || document.getElementById("EX09Numero2").value === "") {
        alert("Por favor, preencha os dois campos de entrada com números.");
        return;
    }

    // Converta os valores de entrada para números
    let N1 = parseFloat(document.getElementById("EX09Numero1").value);
    let N2 = parseFloat(document.getElementById("EX09Numero2").value);

    // Obtenha o operador selecionado
    let OP = document.getElementById("EX09Simb").value;

    // Verifique se o operador é válido
    if (OP !== "+" && OP !== "-" && OP !== "*" && OP !== "/") {
        alert("Por favor, selecione um operador válido (+, -, *, /).");
        return;
    }

    // Calcule o resultado
    let res;
    switch (OP) {
        case "+":
            res = N1 + N2;
            break;
        case "-":
            res = N1 - N2;
            break;
        case "*":
            res = N1 * N2;
            break;
        case "/":
            // Verifique se o denominador é diferente de zero
            if (N2 === 0) {
                alert("Divisão por zero não é permitida.");
                return;
            }
            res = N1 / N2;
            break;
    }

    // Exiba o resultado
    document.getElementById("EX09res").innerHTML = res;
}

function ladosTriangulo(){
    let t1 = parseInt(document.getElementById('Tri1').value)
    let t2 = parseInt(document.getElementById('Tri2').value)
    let t3 = parseInt(document.getElementById('Tri3').value)
    let res = document.getElementById('top')
    if(t1 + t2 > t3 && t1 + t3 > t2 && t2 + t3 > t1){
        if(t1 === t2 && t2 === t3){
            res.innerHTML = 'Triângulo Equilátero'
        } else if(t1 !== t2 && t1 !== t3 && t2!== t3){
            res.innerHTML = 'Triângulo Escaleno'
        }else{
            res.innerHTML = 'Triângulo Isósceles'
        }
    } 
}
function verificar() {
    let lvl = document.querySelector('input[name="radsex"]:checked').value;
    let res = document.getElementById('resp');
    let horasT = Number(document.getElementById('txthora').value);
    let calc = lvl * horasT;
    res.innerHTML = `Você recebe ${calc}`;
}
function EX35CALC() {
    let idade = parseInt(document.getElementById("EX35Numero").value);
    let res;
    if (idade <= 7 && idade >= 5) {
        res = "Você é um nadador Infantil A"
    } else if (idade <= 11 && idade >= 10) {
        res = "Você é um nadador Infantil B"
    } else if (idade >= 11 && idade <= 13) {
        res = "Você é um nadador Juvenil A"
    } else if (idade >= 14 && idade <= 17) {
        res = "Você é um nadador Juvenil B"
    } else if (idade >= 18 && idade <= 25) {
        res = "Você é um nadador Sênior"
    } else {
        res = "Idade fora da faixa etária"
    }
    document.getElementById("EX35res").innerHTML = res
}
function EX36verificar() {
    let conta = document.querySelector('input[name="36radsex"]:checked').value;
    let res = document.getElementById('EX36resp');
    let pagar = Number(document.getElementById('EX36txthora').value);
    let calc = conta * pagar;
    let resp = calc.toFixed(2)
    res.innerHTML = `Total a pagar ${resp}`;
}
function EX37CALC() {
    let nome = document.getElementById("EX37Nome").value;
    let sex = document.getElementsByName("EX37Sex");
    let h = parseFloat(document.getElementById("EX37Numero1").value);
    let idade = parseInt(document.getElementById("EX37Numero2").value);
    let res;
    if (sex[0].checked) {
        if (h > 1,70) {
            if (idade <= 20) {
                res = ((72.7*h)-58)
            } else if (idade > 20 && idade < 40) {
                res = ((72.7*h)-53)
            } else {
                res = ((72.7*h)-45)
            }
        } else {
            if (idade < 40) {
                res = ((72.7*h)-50)
            } else {
                res = ((72.7*h)-58)
            }
        }
    } else {
        if (h >= 1,50) {
            res = ((62.1*h)-44.7)
        } else {
            if (idade >= 35) {
                res = ((62.1*h)-45)
            } else {
                res = ((62.1*h)-49)
            }
        }
    }
    let resp = res.toFixed(2)
    document.getElementById("EX37resp").innerHTML = ("Olá "+ nome + "<br/>Seu peso ideal é " + resp)
}
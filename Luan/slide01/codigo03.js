console.log(x);
//Erro: ReferenceError: Cannot access 'x' before initialization
let x = 5;
console.log(x);
function exemploLet() {
    let x = 10;
    if (true) {
        let x = 20;
        console.log(x);//20
    }
    console.log(x);//10
}
function exemploConst() {
    const x = 10;
    x = 20;
    //Isso resultaria em um erro porque x é uma constante
    console.log(x);//10
}
console.log(x);
//Erro: ReferenceError: Cannot access 'x' before initialization
const x = 5;
console.log(x);//5
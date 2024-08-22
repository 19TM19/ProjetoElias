function exemploVar() {
    var x = 10;
    if (true) {
        var x = 20;
        console.log(x);//20
    }
    console.log(x);//20
}
console.log(x);//undefined
var x = 5;
console.log(x);//5

//INTERPRETAÇÂO CODIGO
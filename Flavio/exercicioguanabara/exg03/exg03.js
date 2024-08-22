function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    if (ini.Value.length == 0 || fim.Value.length == 0 || passo.Value.length == 0) {
        window.alert('[ERRO 404] Falta dados!')
    } else {
        window.alert('funciono')
    }
}
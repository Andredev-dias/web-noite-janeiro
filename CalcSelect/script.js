function calcular(){
    var n1 = parseFloat(document.getElementById('n1').value)
    var n2 = parseFloat(document.getElementById('n2').value)
    var operador = document.getElementById('operador').value
    var resultado
   
    switch (operador) {
        case '+':
            resultado = n1 + n2
            break;
        case '-':
            resultado = n1 - n2
            break;
        case '*':
            resultado = n1 * n2
            break;
        case '/':
            if(n2 !== 0){
                resultado = (n1 / n2).toFixed(2)
            }else{
                resultado = 'Não se divide por 0'
            }
        default: "Operador inválido"
            break;
    }
    // console.log(resultado, operador)
    document.getElementById('respCalculo').textContent = 'Resultado: ' + resultado
}
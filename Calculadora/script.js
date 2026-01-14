function soma(){
    var numero1 = parseFloat(document.getElementById("n1").value)
    var numero2 = parseFloat(document.getElementById("n2").value)
    var resp = document.getElementById("resp")
    // nao pode deixar console log nos codigos
    // console.log(typeof numero1, typeof numero2)
    resp.textContent = numero1 + numero2
}

function sub(){
    var numero3 = parseFloat(document.getElementById("n3").value)
    var numero4 = parseFloat(document.getElementById("n4").value)
    var resp = document.getElementById("respSub")
    resp.innerHTML = numero3 - numero4
}

function mult(){
    
}

function div(){
    // condicional, que se o primeiro numero digitado for === 0, 
    // textContent = "Nao existe divisao por 0"
}

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
   var primeiro = parseFloat(document.getElementById("n5").value)
   var segundo = parseFloat(document.getElementById("n6").value)
   document.getElementById("respMult").innerHTML = primeiro * segundo
}

function div(){
    var num1 = parseFloat(document.getElementById("n7").value)
    var num2 = parseFloat(document.getElementById("n8").value)
    
    if(num2 !== 0){
        document.getElementById("respDiv").innerHTML = (num1 / num2).toFixed(2)
    }else{
        document.getElementById("respDiv").innerHTML = "Não há divisão por 0, digite outro número!!!"
        // alert("Não há divisão por 0, digite outro número!!!")
    }
}

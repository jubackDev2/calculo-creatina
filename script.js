function calcularCreatina() {
   
    var pesoDaPessoa = document.getElementById('txtpeso');
    var res = document.getElementById('res');
    var creatina = 0.06;
    var peso =  Number(pesoDaPessoa.value)
    var calculo = creatina*peso;


    if(isNaN(peso) || peso <= 0){
       window.alert("digite um valor valido")
    }else {
        res.innerHTML = `voce precisa de ${calculo.toFixed(2)}g de creatina`
            res.style.backgroundColor = 'orange'
    }
  
   


   


}
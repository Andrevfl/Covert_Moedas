function Clicou(){
    var Valor = document.getElementById('valor')
    parseFloat(Valor.value)
    
    var Convert = Valor.value * 5.52
    var ValorFormatado = Convert.toFixed(2)
    
    
    exibirResposta(ValorFormatado)
    
  
  }
  function exibirResposta(ValorFormatado){
    var resposta = document.getElementById('ress')
    resposta.innerHTML = `O resultado da conversão é ${ValorFormatado}`
  }
  
  
  
  
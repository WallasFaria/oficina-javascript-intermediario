function numerosMenoresQue(maximo) {
  return function(numeros) {
    return numeros.filter(function (num) { 
      return num < maximo
    })
  }
} 

function numerosEntre(minimo) {
  return {
    e: function(maximo) {
      return function (numeros) {
        return numeros.filter(function (num) {
          return num >= minimo && num <= maximo 
        })
      }
    }
  }
}

function numerosMaioresQue(minimo) {
  return function(numeros) {
    return numeros.filter(function (num) {
      return num > minimo
    })
  }
}

function mostreOs(...filtros) {
  return {
    doArray: function(numeros) {
      filtros.forEach(filtro => console.log(filtro(numeros)))
    }
  }
}

export { numerosMenoresQue, numerosEntre, numerosMaioresQue }
export default mostreOs
export const numerosMenoresQue = (maximo) => 
  (numeros) => numeros.filter(num => num < maximo)

export const numerosEntre = (minimo) => ({ e: (maximo) =>
  (numeros) => numeros.filter(num => num >= minimo && num <= maximo)
})

export const numerosMaioresQue = (minimo) =>
  (numeros) => numeros.filter(num => num > minimo)

export default (...filtros) => ({
  doArray: (numeros) => 
    filtros.forEach(filtro => console.log(filtro(numeros)))
})

import mostreOs, {numerosMenoresQue, numerosMaioresQue, numerosEntre} from './responsta'

const numeros = [20, 345, 100, 3251, 32, 453, 684, 2521, 425, 94];

mostreOs(
  numerosMenoresQue(100),
  numerosEntre(250).e(500),
  numerosMaioresQue(1000)
).doArray(numeros)

/*
Dever mostrar no console:

numeros menores que: 20, 32, 94
numeros entre 250 e 500: 345, 453, 425
numeros maiores que: 3251, 2521
*/
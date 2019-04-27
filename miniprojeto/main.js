import validador, {
  tamanhoMinimo,
  peloMenosUmNumero,
  peloMenosUmaLetraMinuscula,
  peloMenosUmaLetraMaiuscula
} from './validador'

const senha = 'sssss1DdDDD'

const senhaValida = validador.testa(senha).contendo(
  tamanhoMinimo(8),
  peloMenosUmNumero,
  peloMenosUmaLetraMinuscula,
  peloMenosUmaLetraMaiuscula
)

console.log(senhaValida)
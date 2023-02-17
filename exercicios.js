// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui

  const altura = prompt(`Altura:`)
  const largura = prompt(`Largura:`)

  const area = altura * largura
  console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui

  const anoAtual = prompt(`Ano atual:`)
  const anoDeNascimento = prompt(`Ano nascimento:`)

  const idade = anoAtual - anoDeNascimento
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

    return imc = peso / (altura * altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

  const nome = prompt(`Nome:`)
  const idade = prompt(`Idade:`)
  const email = prompt(`Email:`)

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt(`Cor 1:`)
  const cor2 = prompt(`Cor 2:`)
  const cor3 = prompt(`Cor 3:`)
  
  const cores = [cor1, cor2, cor3]

  console.log(cores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

  return string = string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

  return qtdIngresso = custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

  return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  
  return ultimo = array[array.length - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

  const novoArray = array.slice() // copiar array
  const ultimoItem = novoArray.pop() // armazenar último elemento em variável
  const primeiroItem = novoArray.shift()  // armazenar primeiro elemento de cópia em variável
  novoArray.unshift(ultimoItem) // adiciona o valor de último na primeira posição da array
  novoArray.push(primeiroItem) // adiciona o valor do primeiro na última posição da array
  
  return novoArray // retorna a array com primeiro e último valor alterados.
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

  return string1.toLowerCase() === string2.toLowerCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

  const anoAtual = Number(prompt(`Informe o ano atual:`))
  const anoNascimento = Number(prompt(`Informe o ano de nascimento:`))
  const anoEmissaoId = Number(prompt(`Ano de emissão de sua identidade:`))

  const idade = anoAtual - anoNascimento

  const menorDe20 = (idade <= 20) && (anoEmissaoId + 5) <= anoAtual
  const de20a50 = (idade > 20 && idade <= 50) && (anoEmissaoId + 10) <= anoAtual
  const maiorDe50 = idade > 50 && (anoEmissaoId + 15) < anoAtual

  console.log(menorDe20 || de20a50 || maiorDe50)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

  const anoBissextoUm = (ano % 400 === 0)
  const anoBissextoDois = (ano % 4 === 0) && !(ano % 100 === 0 && ano % 400 !== 0)

  return (anoBissextoUm || anoBissextoDois) 
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

  const maiorDeIdade = (prompt(`Você tem mais de 18 anos?`))
  const ensinoMedio = (prompt(`Você possui ensino médio completo?`))
  const dispoHorario = (prompt(`Você possui disponibilidade de horário?`))

  const condicao = (maiorDeIdade === 'sim') && (ensinoMedio === 'sim') && (dispoHorario === 'sim')

  console.log(condicao)
}
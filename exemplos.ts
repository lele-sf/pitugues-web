(window as any).Exemplos = {
  OlaMundo: `escreva("Olá, mundo!")`,

  OperacoesBasicas: `
a = 10
b = 4

escreva("Valor de A: " + texto(a))
escreva("Valor de B: " + texto(b))

soma = a + b     # Soma os dois valores
sub  = a - b     # Subtrai os dois valores
mult = a * b     # Multiplica os dois valores
div  = a / b     # Divide os dois valores

escreva("A soma dos números é igual a: " + texto(soma))
escreva("A subtração dos números é igual a: " + texto(sub))
escreva("A multiplicação dos números é igual a: " + texto(mult))
escreva("A divisão dos números é igual a: " + texto(div))
`,

  Condicional: `
letra = leia("Digite uma letra:")

# É necessário verificar letras minúsculas e maiúsculas
se (
  letra == "A" ou letra == "E" ou letra == "I" ou letra == "O" ou letra == "U" ou
  letra == "a" ou letra == "e" ou letra == "i" ou letra == "o" ou letra == "u"
):
  escreva("A letra " + letra + " é uma vogal!")
senão:
  escreva("A letra " + letra + " não é uma vogal!")
`,

  Classe: `
classe Animal:
  funcao correr():
    escreva("Correndo Loucamente")

classe Cachorro(Animal):
  funcao latir():
    escreva("Au Au Au Au")

nomeDoCachorro = Cachorro()
nomeDoCachorro.correr()
nomeDoCachorro.latir()
`,
  MergeSort: ``,
  Bhaskara: ``,
  Fibonacci: ``,
  Perceptron: ``,
  FilaEstatica: ``,
};

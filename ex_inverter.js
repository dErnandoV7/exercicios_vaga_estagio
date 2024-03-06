// Usei os metodos split e join, mas foi somente para transformar a string em um array e depois transformar o array em uma string novamente.

let string = "Ernando"
string = string.split("")

const stringInvertida = () => {
    const length = string.length - 1

    for (let i = 0; i < length / 2; i++) {
        const caracter = string[i]

        string[i] = string[length - i]
        string[length - i] = caracter
    }
    string = string.join("")
}

stringInvertida()

console.log(string)
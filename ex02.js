const number = 35
const arrayFibonacci = []

const FunctionFibonacci = () => {

    const fibonacci = (num1, num2) => {
        if (num2 > number) return

        arrayFibonacci.push(num1, num2)

        return fibonacci(num2, (num1 + num2))
    }

    fibonacci(0, 1)

    const isFibonacci = arrayFibonacci.includes(number)

    if (isFibonacci) {
        console.log(`O número ${number} ESTÁ na sequência de Fibonacci`)
        return
    }

    console.log(`O número ${number} NÃO ESTÁ na sequência de Fibonacci`)
    return
}

FunctionFibonacci()
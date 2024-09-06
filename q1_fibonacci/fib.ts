const is_fib = (n: number): boolean => {
    let a = 0;
    let b = 1;

    while (a < n) {
        const temp = a;
        a = b;
        b = temp + b;
    }
    return a === n;
}

const fib = (n: number): number => {
    switch (n) {
        case 0:
            return 0;
        case 1:
            return 1;
        default:
            return fib(n-1) + fib(n-2);
    }
}
const fib_num = process.env.NUM_FIBONACCI as string 
const n = Number.parseInt(fib_num); // Número desejado

is_fib(n) ? console.log(`${n} é um número da sequência de Fibonacci`) : console.log(`${n} não é um número da sequência de Fibonacci`)
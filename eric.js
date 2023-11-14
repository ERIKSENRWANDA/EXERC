function factorialRecursive(n) {
    if (n === 0) {
        return 1; 
    } else {
        return n * factorialRecursive(n - 1);
    }
}

const number = 5; 
const result = factorialRecursive(number);
console.log(`The factorial of ${number} is: ${result}`);

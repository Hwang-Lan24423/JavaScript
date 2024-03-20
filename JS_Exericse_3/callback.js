function isEven(number) {
    return number % 2 === 0;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = numbers.filter(isEven);
console.log(evenNumbers); //Output: [2, 4, 6, 8, 10]
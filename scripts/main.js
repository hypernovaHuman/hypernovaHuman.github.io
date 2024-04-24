// Print the first 10 square numbers (1*1 = 1, 2*2 = 4, etc.)
// Count down from 5 to 1 then say "Blastoff!"
// Print the even numbers from 1 to 50 (including 50)
// Print the sum of 1 through 100.
// Print the first 10 factorials. The factorial of a number n is n multiplied by each integer less than it, down to 1, written as n!
// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// etc.

console.log("Task One");
for (let i = 1; i <= 10; i++) {
    console.log(i * i)
}

console.log("Task Two");
for (let i = 5; i >= 1; i--) {
    console.log(i);
}
console.log("Blastoff!");

console.log("Task Three");
for (let i = 0; i <= 50; i += 2) {
    console.log(i);
}

console.log("Task Four");
let sum = 0
for (let i = 1; i <= 100; i += 1) {
    sum += i;
}
console.log(sum);

console.log("Task Five");
for (let n = 1; n <= 10; n += 1) {

    let iFactorial = 1;
    for (let i = 1; i <= n; i += 1) {
        iFactorial *= i;
    }
    console.log(iFactorial);
}








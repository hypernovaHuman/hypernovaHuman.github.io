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
    console.log(i * i);
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
let sum = 0;
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

// Add the array arr with the same values as above, and write a loop to log each element to the console.
// Using a normal forward for-loop (for (let i = 0; i < arr.length; i++)), use .at() to log each element of arr in reverse order (i.e. 5, 1, 4, 1, 3)
// Starting with an empty array in a new variable, create a loop that adds the first 10 cube numbers (e.g. 1*1*1==1**3=1, 2*2*2==2**3==8, etc.) to the array, then log the array itself.
// Starting with an empty array in a new variable, add the first 10 fibonacci numbers to the array, then log the array itself.
// Starting with an empty array in a new variable, add the elements of arr to it in reverse order.

console.log("Task Six");
let arr = [3,1,4,1,5];
for (let i = 0; i <= arr.length; i++) {
    console.log(arr[i]);
}

console.log("Task Seven");
for (let i = 0; i < arr.length; i++) {
    console.log(arr.at(-1 * i - 1));
}

console.log("Task Eight");
let cubic = [];
for (let i = 0; i <= 10; i++) {
   cubic.push(i*i*i);
}
console.log(cubic);

console.log("Task Nine");
let fibonacci = [0, 1];
for (let i = 0; i <= 10; i++) {
    fibonacci.push(fibonacci.at(-1) + fibonacci.at(-2));
}
console.log(fibonacci);

console.log("Task Ten");
let nova = [];
for (let i = 0; i < arr.length; i++) {
    nova.push(arr.at(-1 * i -1));
}
console.log(nova);

        






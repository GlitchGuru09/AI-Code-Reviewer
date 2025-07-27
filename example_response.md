<!-- NOTE: Open the same file in preview for better understanding -->
The function you've written, `function sum(){ return a+b }`, has a problem: `a` and `b` are not defined within its
scope. If you were to call this function, you would get a `ReferenceError` because `a` and `b` don't exist.

To make this function work correctly, you need to *pass* `a` and `b` into the function as **arguments** (also called
parameters).

Here are a few ways to define a `sum` function, depending on what you want to add:

---

### 1. Summing Exactly Two Numbers (Most Common Interpretation)

This is the most direct fix for your code. You define parameters (e.g., `num1` and `num2`) that will receive the values
when the function is called.

```javascript
function sum(num1, num2) {
return num1 + num2;
}

// How to use it:
console.log(sum(5, 3)); // Output: 8
console.log(sum(10, -2)); // Output: 8
```

**Explanation:**
* `num1` and `num2` are placeholders for the values you want to add.
* When you call `sum(5, 3)`, `num1` becomes `5` and `num2` becomes `3`.

---

### 2. Summing an Arbitrary Number of Values (More Flexible)

If you want the `sum` function to be able to add *any* number of values (two, three, five, etc.), you can use the **rest
parameter (`...`)**. This collects all arguments passed into an array.

```javascript
function sum(...numbers) { // 'numbers' will be an array containing all arguments
let total = 0;
for (const num of numbers) {
total += num;
}
return total;
}

// How to use it:
console.log(sum(1, 2)); // Output: 3
console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(10, 20, 30, 40)); // Output: 100
console.log(sum()); // Output: 0 (no numbers passed)
```

---

### 3. Summing an Arbitrary Number of Values (Using `reduce` - Modern JavaScript)

This is a more concise and often preferred way to sum items in an array in modern JavaScript, building on the previous
example:

```javascript
function sum(...numbers) {
// .reduce() is an array method that applies a function against an accumulator
// and each element in the array (from left to right) to reduce it to a single value.
// 0 is the initial value of the accumulator.
return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

// How to use it:
console.log(sum(1, 2)); // Output: 3
console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(10, 20, 30, 40)); // Output: 100
console.log(sum()); // Output: 0
```

---

**Why passing arguments is important:**

* **Reusability:** The function can be used with different numbers without modification.
* **Readability:** It's clear what values the function operates on.
* **Encapsulation:** The function doesn't rely on global variables, which can lead to hard-to-debug issues.

Choose the version that best fits your needs! The first one is great for simple two-number additions, and the
second/third are more powerful for adding many numbers.
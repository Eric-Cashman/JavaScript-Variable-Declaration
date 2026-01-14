let fullName = "John Doe";
fullName = "Jane Doe";
console.log(fullName);

/* 
 * Keyword: let
 * 
 * Why: The fullName variable changes from John Doe 
 * to Jane Doe. 
 * 
 * What if I used const: The code would throw an Error because the name
 * John Doe would still be looking for John Doe and not Jane Doh would give it an error.
 */


const age = 30;
if (age > 18) {
  const adult = true;
  console.log(adult);
}

/* 
 * Keyword: const, and const 
 * 
 * Why: Neither 'age' nor 'adult' are reassigned anywhere in the code. 
 * Age is set to 30 and never changes. The Adult variable 
 * is set to true inside the if block and never changes. Using const also 
 * provides block-scoping for Adult, keeping it contained within the if block.
 * 
 * What if I used let: The code would work without errors, but we'd lose 
 * the protection that 'const' provides. With 'let', these variables could 
 * be accidentally reassigned later in the code that could cause bugs. 
 */


const loopArray = [];
for (let i = 0; i < 5; i++) {
  loopArray.push(i);
}
console.log(loopArray);

/* 
 * Keyword: const for loopArray, let for i
 * 
 * Why: For 'loopArray', we use const because we're not reassigning the 
 * array itself. Just modifying its contents with push(). The const 
 * keyword prevents reassignment but allows mutation of array contents. 
 * 
 * For 'i', we use 'let' because it gets reassigned on every loop iteration 
 * (i++ is shorthand for i = i + 1).
 * 
 * What if I used the other keyword: If we used 'let' for loopArray, the 
 * code would work, but we'd lose protection against accidentally reassigning 
 * the entire array.
 * 
 *  If we used 'const' for i, we'd get a TypeError on the 
 * first loop iteration when trying to increment i, because const doesn't 
 * allow reassignments.
 */


let MAXIMUM = 100;
MAXIMUM = 200;

/* 
 * Keyword: let
 * 
 * Why: The variable name MAXIMUM uses all uppercase letters, which is a 
 * naming convention indicating this should be a constant value that never 
 * changes. A maximum value, by definition, should remain fixed. Using 'const' 
 * enforces this at the language level and prevents accidental changes. The 
 * original reassignment line contradicted the purpose of having a constant, 
 * so I removed it.
 * 
 * What if I used consts: The code would run without errors and the reassignment 
 * would work, but this defeats the purpose of having a MAXIMUM constant. 
 * Using 'let' would allow this "maximum" value to be changed anywhere in 
 * the code, making it not really a maximum at all. This could lead to bugs 
 * and confusion for other developers reading the code.
 */


let colors = ["Red", "Green", "Blue"];
colors = ["Yellow", "Pink", "Purple"];
console.log(colors);

/* 
 * Keyword: let
 * 
 * Why: The colors variable is being completely reassigned to a new array 
 * on line 2. This is different from modifying array contents.
 * we're replacing the entire array with a brand new one.
 * 
 * What if I used const: The code would throw a TypeError on 
 * the line where we try to reassign colors to the new array. 
 */
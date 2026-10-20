/** 
 * Use this for new code.
 * 
 * Explain what the function is trying to accomplish.
 * 
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    // Insert your code here.
    let pet = "cat";
    let age = 2;
    ns.tprint("I'm Sam."); // 'I\'m Sam' would also work, is less readable.
    ns.tprint('I have a cat called "Tabby".'); // '' to contain things that is surrounded by "".
    ns.tprint(`My ${pet} is ${age} years old.`); // inside ``, you can use ${variableName} to call another variable inside a string.
}
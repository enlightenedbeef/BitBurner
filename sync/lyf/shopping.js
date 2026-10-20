/** 
 * Use this for new code.
 * 
 * Multiline string
 * 
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    // Insert your code here.
    const shoppingList = "1. Apples\n2. Bananas\n3. Cherries"; // \n denotes a new line
    ns.tprintf(shoppingList); // ns.tprintf() prints the string without printing the script name.
}
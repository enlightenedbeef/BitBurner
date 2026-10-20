/**
 * Create a variable and print its value.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    let number = 7; // let declares the variable, number is the variable's name, and 7 is its value.
    ns.tprint(number); // printing number
}
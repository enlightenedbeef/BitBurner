/** 
 * Use this for new code.
 * 
How many characters are in Tabby's full name? * 
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    // Insert your code here.
    const name = "Tabby Whiskers";
    ns.tprintf(name.length);
    ns.tprint("supercalifragilisticexpialidocious".length);
    ns.tprint("The quick brown fox jumps over the lazy dog.".length);
}
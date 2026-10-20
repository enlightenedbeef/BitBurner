/** 
 * Use this for new code.
 * 
 * Explain what the function is trying to accomplish.
 * 
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    // Insert your code here.
    const word = String(ns.args[0]);
    // const word = await ns.prompt("Word of Choice.", {type: "text"});
    let l1 = '\n \_\_\_\_\_\_\_                    ';
    let l2 = `\n\< ${word} \>                   `;
    let l3 = '\n \-\-\-\-\-\-\-                    ';
    let l4 = '\n        \\   \^\_\_\^            ';
    let l5 = '\n         \\  \(oo\)\\\_\_\_\_\_\_\_    ';
    let l6 = '\n            \(\_\_\)\\       \)\\\/\\';
    let l7 = '\n                \|\|\-\-\-\-w \|   ';
    let l8 = '\n                \|\|     \|\|   ';
    
    ns.tprintf(`\n${l1}${l2}${l3}${l4}${l5}${l6}${l7}${l8}`);
}
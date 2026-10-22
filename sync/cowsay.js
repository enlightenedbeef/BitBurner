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
    let l1 = '\n \_\_\_\_\_\_\_                    ' 
           + `\n\< ${word} \>                   ` 
           + '\n \-\-\-\-\-\-\-                    ' 
           + '\n        \\   \^\_\_\^            ' 
           + '\n         \\  \(oo\)\\\_\_\_\_\_\_\_    ' 
           + '\n            \(\_\_\)\\       \)\\\/\\' 
           + '\n                \|\|\-\-\-\-w \|   ' 
           + '\n                \|\|     \|\|   ';
    
    ns.tprintf(`\n${l1}`);
}

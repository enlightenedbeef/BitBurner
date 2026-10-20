/** 
 * Use this for new code.
 * 
 * A profile of Tabby the cat.
 * 
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    // Insert your code here.
    const cyan = "\u001b[36m"; 
    const red = "\u001b[31m";
    const magenta = "\u001b[35m";
    const reset = "\u001b[0m";
    const name = "Name: Tabby Whiskers";
    const pic = "Pic: 😺";
    const toy = "Toy: 🧶"
    const like = `${cyan}Likes${reset}: fish, ${magenta}${toy}${reset}`; // ${colour} gets reset with ${reset}
    const hate = `${red}Hates${reset}: broccoli`;
    ns.tprintf(`\n${name}\n${pic}\n${like}\n${hate}`);
}

// escape codes list: https://www.lihaoyi.com/post/BuildyourownCommandLinewithANSIescapecodes.html#rich-text
// https://gist.github.com/fnky/458719343aabd01cfb17a3a4f7296797
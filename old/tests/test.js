/** @param {NS} ns */
export async function main(ns) {
    // Custom color coding.
   const cyan = "\u001b[36m";
   const green = "\u001b[32m";
   const red = "\u001b[31m";
   const reset = "\u001b[0m";
   ns.print(`${red}Ugh! What a mess.${reset}`);
   ns.print(`${green}Well done!${reset}`);
   ns.print(`${cyan}ERROR Should this be in red?${reset}`);
   const magenta = "\u001b[35m";
   ns.tprint("SUCCESS");
   ns.tprint("WARN");
   ns.tprint("WARNING");
   ns.tprint("INFO");
   ns.tprint("FAIL");
   ns.tprint("ERROR");
   ns.tprint(`${magenta}TEST: Do you enjoy *^*&^%R?`);
   }
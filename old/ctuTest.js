/** @param {NS} ns */
export async function main(ns) {

    const cyan = "\u001b[36m";
    const green = "\u001b[32m";
    // const red = "\u001b[31m";
    const reset = "\u001b[0m";
    
    // loop for testing color change based on var value
    while (true) {
      ns.clearLog();
      var rand = Math.random();
      if (rand < 0.5){
        var redgreen = "\u001b[31m";
      }else {
        var redgreen = "\u001b[32m";
      }
      ns.print(`${redgreen} ${rand} ${reset}`);
      ns.print(`${green}Well done!${reset}`);
      ns.print(`${cyan}ERROR Should this be in red?${reset}`);
    
    
      await ns.asleep(10);
    }
    }
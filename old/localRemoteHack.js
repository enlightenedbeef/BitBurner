/** @param {NS} ns */
export async function main(ns) {

    // const THREADCOUNT = ns.args[0];
    const TARGET = ns.args[0];
    var freeRam = ns.getServerMaxRam(TARGET) - ns.getServerUsedRam(TARGET);
    var scriptRAM = Math.floor(ns.getScriptRam("_weaken.js") + ns.getScriptRam("_grow.js") + ns.getScriptRam("_hack.js"));
    ns.tprint(scriptRAM);
    var threadMult = (freeRam / scriptRAM)
    var weakenCount = threadMult * 2;
    var growCount = threadMult * 10;
    var hackCount = threadMult * 1;
    
      ns.run("_weaken.js", { threads: weakenCount, spawnDelay: 500 }, TARGET);
      ns.run("_grow.js", { threads: growCount, spawnDelay: 500 }, TARGET);
      ns.run("_hack.js", { threads: hackCount, spawnDelay: 500 }, TARGET);
      ns.exit();
    
    
    }
/** @param {NS} ns */
export async function main(ns) {
    const TARGET = "host";
    const HACK_SCRIPT = './spectreStrike/remoteHack.js';
    const TARGET_RAM = ns.getServerMaxRam(TARGET);
    const FREE_RAM = TARGET_RAM - ns.getServerUsedRam(TARGET);
    const THREADCOUNT = Math.floor(FREE_RAM / SCRIPT_RAM); // floor is round down, ceil is up, round is whats closer
     for (let x = 0; x > THREADCOUNT;);
      ns.exec(HACK_SCRIPT, TARGET, THREADCOUNT, TARGET);
  }
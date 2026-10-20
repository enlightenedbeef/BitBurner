/** @param {NS} ns */
export async function main(ns) {
    const TARGET = ns.args[0];
    const HACK_SCRIPT = "spectreStrike/remoteHack.js";
    const TARGET_RAM = ns.getServerMaxRam(TARGET);
    const SCRIPT_RAM = ns.getScriptRam(HACK_SCRIPT);
    const FREE_RAM = TARGET_RAM - ns.getServerUsedRam(TARGET);
    const THREADCOUNT = Math.floor(FREE_RAM / SCRIPT_RAM); // floor is round down, ceil is up, round is whats closer
    ns.scp(HACK_SCRIPT, TARGET);
    ns.exec(HACK_SCRIPT, TARGET, THREADCOUNT, TARGET);
  }
/** @param {NS} ns */
export async function main(ns) {
    // const TARGET = ns.args[0];
    // const MY_LEVEL = ns.getHackingLevel();
    // const TARGET_LEVEL = ns.getServerRequiredHackingLevel(TARGET);
    //
    // region: netScan
    // 
      var nodeSet = new Set(["home"]);
      // scan net
      for (let node of nodeSet) {
        let neighbours = ns.scan(node);
        for (let neighbour of neighbours) {
          nodeSet.add(neighbour);
        };
      };
      // filter out rooted servers
        
        for (let rootedServers of nodeSet) {
          if (rootedServers.hasRootAccess(node)) {
            
          }
        }
      // filter out too high level servers, but keep data
      
      // 
  
  
    //
    // endregion
    // 
    
    //
    // region: portOpener
  
  
  
  
    //
    // endregion
    // 
  
  
    // 
    // region : root
  // 
    // checks for root access
    if (ns.hasRootAccess(TARGET)) {
      ns.tprint(`WARN: ${TARGET}'s already rooted!`);
  
    } else    if (TARGET_LEVEL > MY_LEVEL) {
        // checks hack level vs hack requirement
        ns.tprint(`FAIL: ${TARGET}'s Security Level too high! Your need ${TARGET_LEVEL - MY_LEVEL} more levels!`);
      } else {
  
        ns.tprint(`INFO: Attempting to nuke ${TARGET}.`);
  
        //deploys nuke
        ns.nuke(TARGET);
  
        if (ns.hasRootAccess(TARGET)) {
          ns.tprint(`INFO: Nuke successful. ${TARGET}'s been rooted.`);
        } else {
          ns.tprint(`FAIL: ${TARGET}'s has failed to been rooted.`);
        }
      };
    // 
    // endregion
    // 
  
    // create backdoor
  
    //kills current script and after a .5s delay, runs deployManualHack.js
    ns.spawn("..spectreStrike/deployManualHack.js", { threads: 1, spawnDelay: 500 }, TARGET);
  }
    // if (ns.getServerRequiredHackingLevel(TARGET) >= ns.getPlayer().skills.hacking) <-- too long avoid use line 4 instead
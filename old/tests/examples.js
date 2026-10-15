/** @param {NS} ns */
export async function main(ns) {
    ns.tail();
    //region in vs of
    var servers = [
      "home",
      "n00dles",
      "foodnstuff",
      "sigma-cosmetics",
      "joesguns",
      "hong-fang-tea",
      "harakiri-sushi",
      "iron-gym"
    ];
    ns.print("In");
    for (let x in servers) { ns.print(x) };
    ns.print("vs Of");
    for (let x of servers) { ns.print(x) };
    //endregion 
  
  
  
  }
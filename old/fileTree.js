/** @param {NS} ns */
export async function main(ns) {
    ns.tail();
    ns.clearLog();
    var deets = ns.ls('home');
  
  
    var tree = "";
    for (let file of deets) {
      tree = tree + `├── ${file.replaceAll("/", "\n│   ├── ")} \n`;
    }
    
    ns.print(tree)
  }
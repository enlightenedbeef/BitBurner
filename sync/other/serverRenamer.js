/** @param {NS} ns */
export async function main(ns) {
    const oldName = String(ns.args[0]);
    const newName = String(ns.args[1]);
    ns.cloud.renameServer(oldName, newName);
}
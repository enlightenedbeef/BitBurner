/** @param {NS} ns */
export async function main(ns) {
    const oldName = ns.args[0];
    const newName = ns.args[1];
    ns.cloud.renameServer(oldName, newName);
}
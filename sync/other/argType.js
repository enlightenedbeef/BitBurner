export async function main(ns) {
    ns.tprint("Number of args: " + ns.args.length);
    for (var i = 0; i < ns.args.length; ++i) {
        ns.tprint(typeof ns.args[i]);
    }
}
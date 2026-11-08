import * as ljs from "./node_modules/littlejsengine/dist/littlejs.esm.js";
import * as wal from "./wal.js";
import *as su from "./suuuw.js";
let spd_aft;
export function real_game(player,a) {
    player.pos.x = 0;
    player.pos.y = 0;
    player.velocity.x=0;
    player.velocity.y=0;
    a=0;
    wal.wlls();
    su.door();
    su.ifdoor(player);
}
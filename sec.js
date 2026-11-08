import * as wal from "./wal.js";
import *as su from "./suuuw.js";
import * as ops from"./ops.js"
export let lives=10;
export function real_game(player,a) {
    player.pos.x = 0;
    player.pos.y = 0;
    player.velocity.x=0;
    player.velocity.y=0;
    a=0;
    wal.wlls();
    su.door();
    su.ifdoor(player);
    ops.ops();
}
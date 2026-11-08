import * as ljs from "./node_modules/littlejsengine/dist/littlejs.esm.js";

let dr = [];
let nub = 0;

export function door() {
    let rend = Math.random() * 100;
    for (let i = 0; i < rend; i++) {
        let rend1 = Math.random() * 200;
        let rend2 = Math.random() * 200;
        let dor = new ljs.EngineObject(ljs.vec2(rend1, rend2), ljs.vec2(1, 3));
        dor.color = ljs.rgb(0, 0, 1);
        dr.push(dor);
        nub += 1;
    }
}

export function ifdoor(player,spd) {
    for (let i = 0; i < dr.length; i++) {
        if (player && ljs.isOverlapping(player.pos, player.size, dr[i].pos, dr[i].size)) {
            player.velocity.x=0;
            player.velocity.y=0
            if (i === dr.length-1) {
                player.pos.x = dr[0].pos.x + 2;
                player.pos.y = dr[0].pos.y + 2;
            } else {
                player.pos.x = dr[i + 1].pos.x + 2;
                player.pos.y = dr[i + 1].pos.y + 2;
            }
            dr[i].destroy();
            dr.splice(i, 1);
            let rend1 = Math.random();
            let rend2 = Math.random();
            dr.push(new ljs.EngineObject(ljs.vec2(rend1, rend2),ljs.vec2(1, 3)));
            dr[dr.length-1].color = ljs.rgb(0, 0, 1);
        }
    }
}
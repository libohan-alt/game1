import * as ljs from "./node_modules/littlejsengine/dist/littlejs.esm.js";
let oops = [];

export function ops() {
    let rend = Math.random() * 100;
    for (let i = 0; i < rend + 10; i++) {
        let rend1 = Math.random() * 200;
        let rend2 = Math.random() * 200;
        oops.push(new ljs.EngineObject(ljs.vec2(rend1, rend2), ljs.vec2(0.5, 0.5)));
        oops[oops.length - 1].color = ljs.rgb(1, 0, 0);
    }
}
export function ooops(player,lives){
    for (let i = 0; i < oops.length; i++) {
        if (lives!=0&&player && ljs.isOverlapping(player.pos, player.size, oops[i].pos, oops[i].size)) {
            lives -= 1;
            player.pos.x=Math.random()*100;
            player.pos.y=Math.random()*100;
        }
        if(lives<=0){
            player.destroy();
            player.dead=true;
        }
    }
    return lives;
}
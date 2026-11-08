import * as ljs from "./node_modules/littlejsengine/dist/littlejs.esm.js";

let aaaaaaaaaaaaaaaaaaaa = false;
let arr = false;
let itm;
let rend1 = Math.random() * 10;
let rend2 = Math.random() * 10;
let arr_agl;
let arr_udn;
let tme;
let rnd;

export function rro() {
    itm = new (class extends ljs.EngineObject {
    render() {
        ljs.drawCircle(this.pos, this.size.x, this.color);
    }
})(ljs.vec2(rend1, rend2), ljs.vec2(0.4, 0.4));
}

export function rro_aty_prp() {
    if (!arr && !aaaaaaaaaaaaaaaaaaaa) {
        rnd = 0;
        arr_udn = rend2;
        arr_agl = 0;
        tme = 0;
        aaaaaaaaaaaaaaaaaaaa = true;
    }
}

export function rro_aty_mve() {
    if (!arr) {
        rro_aty_prp();
        tme = tme + ljs.timeDelta;
        arr_agl += ljs.timeDelta*10;
        itm.pos.x = rend1 + Math.sin(arr_agl);
        itm.pos.y = rend2 + Math.cos(arr_agl);
        itm.angle = arr_agl;
    }
}

export function rro_aty_ily(player) {
    if (itm && ljs.isOverlapping(player.pos, player.size, itm.pos, itm.size)) {
        arr = true;
    }
}

export function rro_aty_tue(player, ple) {
    if (arr) {
        let ple_x = ple.pos.x - itm.pos.x;
        let ple_y = ple.pos.y - itm.pos.y;
        rnd = Math.atan2(ple_y, ple_x);
        itm.angle = rnd;
        let weee_x = Math.cos(rnd);
        let weee_y = Math.sin(rnd);
        itm.pos.x = player.pos.x + weee_x;
        itm.pos.y = player.pos.y + weee_y;
    }
}
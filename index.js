import * as ljs from "./node_modules/littlejsengine/dist/littlejs.esm.js";
import * as aRR from "./arr.js"

let player;
let ple;
let a = 0;

function newitplease() {
    let rand1 = Math.random() * 50;
    let rand2 = Math.random() * 50;
    ple = new ljs.EngineObject(ljs.vec2(rand1, rand2), ljs.vec2(3, 3));
    ple.color=ljs.rgb(0.4,0.3,0.2);
}

function gameinit() {
    aRR.rro();
    ljs.setCanvasClearColor(ljs.rgb(125 / 255, 0, 200 / 255));
    player = new ljs.EngineObject(ljs.vec2(0, 0), ljs.vec2(1, 1));
    player.color = ljs.rgb(231 / 255, 123 / 255, 125 / 255);
    let rand1 = Math.random() * 50;
    let rand2 = Math.random() * 50;
    ple = new ljs.EngineObject(ljs.vec2(rand1, rand2), ljs.vec2(3, 3));
    ple.color=ljs.rgb(0.4,0.3,0.2);
}

function gameupdate() {
    aRR.rro_aty_mve();
    if (ljs.keyIsDown("ArrowLeft")) {
        player.pos.x -= 0.1;
    }
    if (ljs.keyIsDown("ArrowRight")) {
        player.pos.x += 0.1;
    }
    if (ljs.keyIsDown("ArrowUp")) {
        player.pos.y += 0.1;
    }
    if (ljs.keyIsDown("ArrowDown")) {
        player.pos.y -= 0.1;
    }
    if (ple && ljs.isOverlapping(player.pos, player.size, ple.pos, ple.size)) {
        ple.destroy();
        ple = null;
        a += 1;
    }
    if (!ple) {
        newitplease();
    }
    aRR.rro_aty_ily(player);
    if (ple) {
        aRR.rro_aty_tue(player, ple);
    }
}

function gameupdatepost() {
    ljs.setCameraPos(player.pos);
}

function gamerender() {
    const range = 200;

    for (let x = -range; x <= range; x++) {
        for (let y = -range; y <= range; y++) {
            if ((x + y) % 2 === 0) {
                ljs.drawRect(
                    ljs.vec2(x, y),
                    ljs.vec2(1, 1),
                    ljs.rgb(1, 1, 1, 0.08)
                );
            }
        }
    }
}

function gamerenderpost() {
    ljs.drawTextScreen(
        `得分：${a}`,
        ljs.vec2(10, 20),
        20,
        ljs.rgb(1, 1, 1),
        0,
        undefined,
        'left'
    );
}

ljs.engineInit(gameinit, gameupdate, gameupdatepost, gamerender, gamerenderpost);
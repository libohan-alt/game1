import * as ljs from "./node_modules/littlejsengine/dist/littlejs.esm.js";
import * as aRR from "./arr.js";
import * as wll from "./wal.js";
import * as sec from "./sec.js";
import * as su from "./suuuw.js"
let flag = false;
let spd_aft = 0;
let player;
let ple;
let a = 0;

function newitplease() {
    let rand1 = Math.random() * 50;
    let rand2 = Math.random() * 50;
    ple = new ljs.EngineObject(ljs.vec2(rand1, rand2), ljs.vec2(3, 3));
    ple.color = ljs.rgb(0.4, 0.3, 0.2);
}

function gameinit() {
    wll.wal()
    aRR.rro();
    ljs.setCanvasClearColor(ljs.rgb(125 / 255, 0, 200 / 255));
    player = new ljs.EngineObject(ljs.vec2(0, 0), ljs.vec2(1, 1));
    player.friction = 0.8;
    player.damping = 0.98;
    player.color = ljs.rgb(231 / 255, 123 / 255, 125 / 255);
    player.setCollision(true, true);
    player.mass = 1;
    let rand1 = Math.random() * 50;
    let rand2 = Math.random() * 50;
    ple = new ljs.EngineObject(ljs.vec2(rand1, rand2), ljs.vec2(3, 3));
    ple.color = ljs.rgb(0.4, 0.3, 0.2);
}

let spd = 0.98;

function gameupdate() {
    aRR.rro_aty_mve();
    if (ljs.keyIsDown("ArrowLeft")) {
        player.velocity.x -= spd * ljs.timeDelta;
        spd_aft = player.velocity.length();
    }
    if (ljs.keyIsDown("ArrowRight")) {
        player.velocity.x += spd * ljs.timeDelta;
        spd_aft = player.velocity.length();
    }
    if (ljs.keyIsDown("ArrowUp")) {
        player.velocity.y += spd * ljs.timeDelta;
        spd_aft = player.velocity.length();
    }
    if (ljs.keyIsDown("ArrowDown")) {
        player.velocity.y -= spd * ljs.timeDelta;
        spd_aft = player.velocity.length();
    }
    if (ljs.keyWasPressed("KeyL")) {
        a = 10;
    }
    if (ljs.keyWasPressed("KeyB")) {
        spd = 50;
    }
    if (ljs.keyWasPressed("KeyV")) {
        spd = 0.98;
    }
    spd_aft = player.velocity.length();
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
    if (a === 10 && !flag) {
        sec.real_game(player, a);
        flag = true;
    }
    su.ifdoor(player,spd);
}

function gameupdatepost() {
    ljs.setCameraPos(player.pos);
}

function gamerender() {
    const rangex1 = Math.floor(player.pos.x)-60;
    const rangey1 = Math.floor(player.pos.y)-60;
    const rangex2 =Math.floor(player.pos.x)+60;
    const rangey2 =Math.floor(player.pos.y)+60

    for (let x = rangex1; x <= rangex2; x++) {
        for (let y = rangey1; y <= rangey2; y++) {
            if ((x + y) % 2 === 0) {
                ljs.drawRect(
                    ljs.vec2(x, y),
                    ljs.vec2(1, 1),
                    ljs.rgb(1, 1, 0,0.1 )
                );
            }
        }
    }
}

function gamerenderpost() {
    ljs.drawTextScreen(
        `score：${a}`,
        ljs.vec2(10, 20),
        20,
        ljs.rgb(1, 1, 1),
        0,
        undefined,
        'left'
    );
    ljs.drawTextScreen(`speed:${spd_aft.toFixed(1)}`,
        ljs.vec2(10, 40),
        20,
        ljs.rgb(1, 1, 1),
        0,
        undefined,
        'left');
    ljs.drawTextScreen(
        `score：${a}`,
        ljs.vec2(10, 20),
        20,
        ljs.rgb(1, 1, 1),
        0,
        undefined,
        'left'
    );
    ljs.drawTextScreen(
        `speed:${spd_aft.toFixed(1)}`,
        ljs.vec2(10, 40),
        20,
        ljs.rgb(1, 1, 1),
        0,
        undefined,
        'left'
    );
    ljs.drawTextScreen(
        `pos: ${Math.round(player.pos.x)}, ${Math.round(player.pos.y)}`,
        ljs.vec2(10, 60),
        20,
        ljs.rgb(1, 1, 1),
        0,
        undefined,
        'left'
    );
}

ljs.engineInit(gameinit, gameupdate, gameupdatepost, gamerender, gamerenderpost);
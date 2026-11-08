import * as ljs from "./node_modules/littlejsengine/dist/littlejs.esm.js";

let stroke = 0.2;
let longth = 5;
let line = [];
let num = 0

export function wlls() {
    cln();
    let bound = 1000;
    let wallThickness = 5;
    let topWall = new ljs.EngineObject(ljs.vec2(0, bound), ljs.vec2(bound * 2 + 20, wallThickness));
    topWall.color = ljs.rgb(0, 0, 0);
    topWall.setCollision(true, true);
    topWall.mass = 0;
    let bottomWall = new ljs.EngineObject(ljs.vec2(0, -bound), ljs.vec2(bound * 2 + 20, wallThickness));
    bottomWall.color = ljs.rgb(0, 0, 0);
    bottomWall.setCollision(true, true);
    bottomWall.mass = 0;
    let leftWall = new ljs.EngineObject(ljs.vec2(-bound, 0), ljs.vec2(wallThickness, bound * 2 + 20));
    leftWall.color = ljs.rgb(0, 0, 0);
    leftWall.setCollision(true, true);
    leftWall.mass = 0;
    let rightWall = new ljs.EngineObject(ljs.vec2(bound, 0), ljs.vec2(wallThickness, bound * 2 + 20));
    rightWall.color = ljs.rgb(0, 0, 0);
    rightWall.setCollision(true, true);
    rightWall.mass = 0;
    line.push(topWall, bottomWall, leftWall, rightWall);
    num = 4;
}

export function wal() {
    drw_heng(15, 16);
    dre_shu(16, 15);

}

function drw_heng(nx, ny) {
    line.push(new ljs.EngineObject(ljs.vec2(nx, ny), ljs.vec2(longth, stroke)));
    line[num].color = ljs.rgb(0, 0, 0);
    line[num].setCollision(true, true);
    line[num].mass = 0;
    num += 1;
}

function dre_shu(nx, ny,) {
    line.push(new ljs.EngineObject(ljs.vec2(nx, ny), ljs.vec2(stroke, longth)));
    line[num].color = ljs.rgb(0, 0, 0);
    line[num].setCollision(true, true);
    line[num].mass = 0;
    num += 1;
}

export function cln() {
    for (let i = 0; i < num; i++) {
        line[i].destroy();
    }
    num = 0;
}
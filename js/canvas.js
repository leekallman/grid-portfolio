// sketch01
const fourTwo = document.querySelector('.four-two');

let graphics;
const sketch01 = function (a) {
    a.setup = function () {
        let w = fourTwo.offsetWidth;
        let h = fourTwo.offsetHeight;
        a.pixelDensity(1);
        a.createCanvas(w, h);

        graphics = a.createGraphics(w, h);
        graphics.fill('#000');
        graphics.textFont('Inter-var');
        graphics.textAlign(a.CENTER, a.CENTER);
        graphics.textSize(w);
        graphics.text('hi', w / 2, h / 1.5);
    };
    a.draw = function () {
        a.clear();
        a.background(255, 0, 0, 0);
        a.tileSize = 50;
        for (let x = 0; x < 10; x = x + 1) {
            for (let y = 0; y < 10; y = y + 1) {

                a.distortion = a.sin(a.frameCount * 0.05 + x * 0.5 + y * 0.3) * 50
                //source
                const sx = x * a.tileSize + a.distortion
                const sy = y * a.tileSize
                const sw = a.tileSize
                const sh = a.tileSize

                //destination
                const dx = x * a.tileSize
                const dy = y * a.tileSize
                const dw = a.tileSize
                const dh = a.tileSize
                a.image(graphics, dx, dy, dw, dh, sx, sy, sw, sh);
            };
        };
    };
    a.windowResized = function () {
        a.resizeCanvas(fourTwo.offsetWidth, fourTwo.offsetHeight);
    };
};
const mysketch01 = new p5(sketch01, fourTwo);

// // sketch02
// const ten = document.querySelector('.ten');
// let w1 = ten.offsetWidth;
// let h1 = ten.offsetHeight;

// let graphics2;
// let graphics3;

// var sketch02 = function (b) {
//     b.setup = function () {
//         b.pixelDensity(1);
//         b.createCanvas(w1, h1);

//         graphics2 = b.createGraphics(w1, h1);
//         graphics2.fill("#4CF5B4");
//         graphics2.textSize(80);
//         graphics2.textAlign(b.CENTER, b.CENTER);
//         graphics2.textFont('inter');
//         graphics2.textStyle(b.BOLD);
//         graphics2.text("available", w1 / 2, h1 / 2);

//         graphics3 = b.createGraphics(w1, h1);
//         graphics3.fill("#4CF5B4");
//         graphics3.textSize(80);
//         graphics3.textAlign(b.CENTER, b.CENTER);
//         graphics3.textFont('inter');
//         graphics3.textStyle(b.BOLD);
//         graphics3.text("for work", w1 / 2, h1 / 2);
//     };

//     b.draw = function () {
//         b.background("#73C4D8");

//         let val = b.sin(b.frameCount * 0.02) * 200

//         b.copy(graphics2, -100, 0, 600, 250, 0, 0, 250 + val, 250)
//         b.copy(graphics3, 0, 0, 600, 250, 250 + val, 0, 250 - val, 250)
//     };
//     b.windowResized = function () {
//         b.resizeCanvas(ten.offsetWidth, ten.offsetHeight);
//     };
// };
// var mysketch02 = new p5(sketch02, 'ten');

// const nineOne = document.querySelector('.nine-one');

// let numBalls = 13;
// let spring = 0.05;
// let gravity = 0.03;
// let friction = -0.9;
// let balls = [];

// const sketch02 = function (b) {
//     b.setup = function () {
//         let w2 = nineOne.offsetWidth;
//         let h2 = nineOne.offsetHeight;
//         b.createCanvas(w2, h2);
//         for (let i = 0; i < numBalls; i++) {
//             balls[i] = new Ball(
//                 b.random(b.width),
//                 b.random(b.height),
//                 b.random(30, 70),
//                 i,
//                 balls
//             );
//         }
//         b.fill("#000");
//     }

//     b.draw = function () {
//         b.clear();
//         b.background(255, 0, 0, 0);
//         balls.forEach(ball => {
//             ball.collide();
//             ball.move();
//             ball.display();
//             ball.draw();
//         });
//     }

//     class Ball {
//         constructor(xin, yin, din, idin, oin) {
//             this.x = xin;
//             this.y = yin;
//             this.vx = 0;
//             this.vy = 0;
//             this.diameter = din;
//             this.id = idin;
//             this.others = oin;
//         }

//         collide() {
//             for (let i = this.id + 1; i < numBalls; i++) {
//                 let dx = this.others[i].x - this.x;
//                 let dy = this.others[i].y - this.y;
//                 let distance = b.sqrt(dx * dx + dy * dy);
//                 let minDist = this.others[i].diameter / 2 + this.diameter / 2;
//                 if (distance < minDist) {
//                     let angle = b.atan2(dy, dx);
//                     let targetX = this.x + b.cos(angle) * minDist;
//                     let targetY = this.y + b.sin(angle) * minDist;
//                     let ax = (targetX - this.others[i].x) * spring;
//                     let ay = (targetY - this.others[i].y) * spring;
//                     this.vx -= ax;
//                     this.vy -= ay;
//                     this.others[i].vx += ax;
//                     this.others[i].vy += ay;
//                 }
//             }
//         }
//         draw() { }

//         move() {
//             this.vy += gravity;
//             this.x += this.vx;
//             this.y += this.vy;
//             if (this.x + this.diameter / 2 > b.width) {
//                 this.x = b.width - this.diameter / 2;
//                 this.vx *= friction;
//             } else if (this.x - this.diameter / 2 < 0) {
//                 this.x = this.diameter / 2;
//                 this.vx *= friction;
//             }
//             if (this.y + this.diameter / 2 > b.height) {
//                 this.y = b.height - this.diameter / 2;
//                 this.vy *= friction;
//             } else if (this.y - this.diameter / 2 < 0) {
//                 this.y = this.diameter / 2;
//                 this.vy *= friction;
//             }
//         }

//         display() {
//             b.ellipse(this.x, this.y, this.diameter, this.diameter);
//         }
//     }

//     b.windowResized = function () {
//         b.resizeCanvas(nineOne.offsetWidth, nineOne.offsetHeight);
//     };
// };
// const mysketch02 = new p5(sketch02, nineOne);

// lisa
const sketch03 = document.querySelector('.me');
const sandbox = new GlslCanvas(sketch03);

const frag = `
precision highp float;

uniform float u_time;
uniform vec2 resolution;
uniform vec2 mouse;
uniform vec3 spectrum;

uniform sampler2D image;

varying vec3 v_normal;
varying vec2 v_texcoord;

#define NUM_OCTAVES 5

float rand(vec2 n) { 
    return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

float noise(vec2 p){
    vec2 ip = floor(p);
    vec2 u = fract(p);
    u = u*u*(3.0-2.0*u);
    
    float res = mix(
        mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),
        mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);
    return res*res;
}

float fbm(vec2 x) {
    float v = 0.0;
    float a = 0.5;
    vec2 shift = vec2(100);
    // Rotate to reduce axial bias
    mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.50));
    for (int i = 0; i < NUM_OCTAVES; ++i) {
        v += a * noise(x);
        x = rot * x * 2.0 + shift;
        a *= 0.5;
    }
    return v;
}


void main(void)
{
    vec2 uv = v_texcoord;
    
    float strength = smoothstep(0.4, 0.1, uv.y);
    vec2 surface = strength * vec2(
    mix(-0.3, 0.3, fbm(5.0*uv + 0.5*u_time)), 
    mix(-0.3, 0.3, fbm(5.0*uv + 0.5*u_time))
    );
    
    uv += refract(vec2(0.0, 0.0), surface, 1.0/1.333);
    vec4 color = texture2D(image, uv);
    gl_FragColor = color;
}`;

sandbox.load(frag);
sandbox.setUniform('image', '../images/lisa.png');
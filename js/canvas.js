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
        graphics.fill('#fff');
        graphics.textFont('Syne-bold');
        graphics.textAlign(a.CENTER, a.CENTER);
        graphics.textSize(w);
        graphics.text('ö', w / 2, h / 2);
    };
    a.draw = function () {
        a.background("#000");
        a.tileSize = 50;
        for (let x = 0; x < 12; x = x + 1) {
            for (let y = 0; y < 12; y = y + 1) {

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
const mysketch01 = new p5(sketch01, 'fourTwo');

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

// // sketch03
// const seventeen = document.querySelector('.seventeen');
// const patterns = document.querySelector('.patterns')
// let w3 = seventeen.offsetWidth;
// let h3 = seventeen.offsetHeight;

// patterns.width = w3;
// patterns.height = h3;

// // const canvas2 = document.getElementById('defaultCanvas2');
// // console.log(canvas2)
// patterns.style.width = w3 + "px";
// patterns.style.height = h3 + "px";

// const context = patterns.getContext("2d");
// context.scale(2, 2);
// seventeen.appendChild(patterns);

// //hold and aim for the X, when we load/the cursor is not on the page - aimX = null
// let aimX = null;
// let aimY = null;
// let currentX = null;
// let currentY = null;

// let i = 0;
// const images = ["images/image1.jpg", "images/image2.jpg", "images/image3.jpg", "images/image4.jpg", "images/image5.jpg"].map(src => {
//     const image = document.createElement("img");
//     image.src = src;
//     return image;
// });

// document.addEventListener("mousemove", function(event) {
//     aimX = event.pageX;
//     aimY = event.pageY;
//     if (currentX === null){
//         currentX = event.pageX;
//         currentY = event.pageY;
//     };
// });

// document.addEventListener("click", function(){
//     i = i + 1;
//     if(i >= images.length){
//         i = 0;
//     };
// });

// const draw = function() {
//     if (currentX){
//         if(images[i].complete) {
//             context.drawImage(images[i], currentX - 200, currentY - 300, 400, 600);
//         };
//         currentX = currentX + (aimX - currentX) * 0.1;
//         currentY = currentY + (aimY - currentY) * 0.1;
//     };
//     requestAnimationFrame(draw);
// }; 
// draw();

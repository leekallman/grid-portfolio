const nineThree = document.querySelector(".nine-three")
const canvasTag = document.querySelector(".imgCanvas")
// basic settings for any kind of canvas, for retina screen
canvasTag.width = nineThree.offsetWidth
canvasTag.height = nineThree.offsetWidth

canvasTag.style.width = canvasTag.width + "px"
canvasTag.style.height = canvasTag.width + "px"

const context = canvasTag.getContext("2d")
context.scale(0.5, 0.5)

//hold and aim for the X, when we load/the cursor is not on the page - aimX = null
let aimX2 = null
let aimY2 = null
let currentX2 = null
let currentY2 = null

let i = 0
const images = ["../images/1-1.png", "../images/1-2.png", "../images/1-3.png", "../images/1-4.png", "../images/1-5.png"].map(src => {
    const image = document.createElement("img")
    image.src = src
    return image
})

canvasTag.addEventListener("mousemove", function (event) {
    aimX2 = event.pageX
    aimY2 = event.pageY
    if (currentX2 === null) {
        currentX2 = event.pageX
        currentY2 = event.pageY
    }
})

canvasTag.addEventListener("click", function () {
    i = i + 1
    if (i >= images.length) {
        i = 0
    }
})

const draw = function () {
    if (currentX2) {
        if (images[i].complete) {
            context.drawImage(images[i], currentX2 - 500, currentY2 - 500, 400, 600)
        }
        currentX2 = currentX2 + (aimX2 - currentX2) * 0.1
        currentY2 = currentY2 + (aimY2 - currentY2) * 0.1
    }
    requestAnimationFrame(draw)
}

draw();
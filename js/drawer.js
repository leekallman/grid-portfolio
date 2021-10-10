const oneTwo = document.querySelector(".one-two")
const canvasTag = document.querySelector(".imgCanvas")
canvasTag.width = oneTwo.offsetWidth
canvasTag.height = oneTwo.offsetWidth

canvasTag.style.width = canvasTag.width + "px"
canvasTag.style.height = canvasTag.width + "px"

const context = canvasTag.getContext("2d")
context.scale(0.5, 0.5)

let aimX2 = null
let aimY2 = null
let currentX2 = null
let currentY2 = null

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
            context.drawImage(images[i], currentX2 - 500, currentY2 + 100, 500, 400)
        }
        currentX2 = currentX2 + (aimX2 - currentX2) * 0.1
        currentY2 = currentY2 + (aimY2 - currentY2) * 0.1
    }
    requestAnimationFrame(draw)
}
let i = 0
const images = ["images/image1.jpg", "images/image2.jpg", "images/image3.jpg", "images/image4.jpg", "images/image5.jpg"].map(src => {
    const image = document.createElement("img")
    image.src = src
    image.onload = draw();
    return image
})
// letters
const letterBox = document.querySelector('.one-four');
const letters = ['D', 'I', 'V', 'E', 'R', 'S', 'I', 'T', 'Y', 'D', 'I', 'V', 'E', 'R', 'S', 'I', 'T', 'Y', 'D', 'I', 'V',
    'E', 'R', 'S', 'I', 'T', 'Y', 'D', 'I', 'V', 'E', 'R', 'S', 'I', 'T', 'Y', 'D', 'I', 'V', 'E', 'R', 'S', 'I', 'T', 'Y',
    'D', 'I', 'V'];

for (let i = 0; i < letters.length; i++) {
    const letter = document.createElement("p");
    letter.innerHTML = letters[i];
    letter.classList.add("letter");
    letterBox.appendChild(letter);
}
document.addEventListener("mousemove", function (event) {
    const x = event.pageX;
    const y = event.pageY;

    document.querySelectorAll(".letter").forEach(p => {
        let factor = p.offsetLeft / 2060
        const dx = (document.body.clientWidth * factor) + 10 - x;
        const dy = p.offsetTop + 10 - y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const score = Math.exp(dist * -0.01);

        p.style.transform = "scale(" + 3 * score + ")";
        p.style.fontWeight = (200 * Math.round(8 * score));
    });
});

// clock
function runClock() {
    let now = new Date();
    let hour = now.getHours() % 12;
    let min = now.getMinutes();
    let sec = now.getSeconds();
    let ms = now.getMilliseconds();

    const clock = document.querySelector('.clock');
    const hourHand = clock.querySelector('.hours');
    const minHand = clock.querySelector('.minutes');
    const secHand = clock.querySelector('.seconds');

    let hourRotation = 360 / 12 * hour + 0.5 * min - 90;
    let minRotation = 6 * min + 0.1 * sec - 90;
    let secRotation = 6 * sec + 0.006 * ms;

    hourHand.style.transform = 'rotate(' + hourRotation + 'deg)';
    minHand.style.transform = 'rotate(' + minRotation + 'deg)';
    secHand.style.transform = 'rotate(' + secRotation + 'deg)';

    requestAnimationFrame(runClock);
};
runClock();


// who I am
let phrases = [
    'I’m a digital creative and Frontend Developer..',
    'I’m a digital creative and Frontend Developer based in Stockholm.',
    'I’m a digital creative and Frontend Developer based in Stockholm. I’m a disguised nerd..',
    'I’m a digital creative and Frontend Developer based in Stockholm. I’m a nerd. So, I had to learn code.',
    'I’m a digital creative and Frontend Developer based in Stockholm. I’m a nerd. So, I had to learn code. I started self-studying web design and code in the spring of 2020.',
    'I’m a digital creative and Frontend Developer based in Stockholm. I started self-studying web design and code in the spring of 2019.',
    'I’m a digital creative and Frontend Developer based in Stockholm. I started self-studying web design and code in the spring of 2019. Currently, I’m studying Frontend Developer at Hyper Island.',
    'I’m a digital creative and Frontend Developer based in Stockholm. I started self-studying web design and code in the spring of 2019. Currently, I’m studying Frontend Developer at Hyper Island. I work in the fields of web design and graphic design.',
    'I’m a digital creative and Frontend Developer based in Stockholm. I started self-studying web design and code in the spring of 2019. Currently, I’m studying Frontend Developer at Hyper Island. I work in the fields of responsive web design, graphic design and art direction.',
    'I’m a digital creative and Frontend Developer based in Stockholm. I started self-studying web design and code in the spring of 2019. Currently, I’m studying Frontend Developer at Hyper Island. I work in the fields of responsive web design, graphic design and art direction. I come from the field of urban planning and architecture.',
    'I’m a digital creative and Frontend Developer based in Stockholm. I started self-studying web design and code in the spring of 2019. Currently, I’m studying Frontend Developer at Hyper Island. I work in the fields of responsive web design, graphic design and art direction. I recently transitioned from the field of urban planning and sustainable architecture.',
    'I’m a digital creative and Frontend Developer based in Stockholm. I started self-studying web design and code in the spring of 2019. Currently, I’m studying Frontend Developer at Hyper Island. I work in the fields of responsive web design, graphic design and art direction. I recently transitioned from the field of urban planning and sustainable architecture. I have a strong conviction that inclusion and diversity are key for qualitative and sustainable design.',
    'I’m a digital creative and Frontend Developer based in Stockholm. I started self-studying web design and code in the spring of 2019. Currently, I’m studying Frontend Developer at Hyper Island. I work in the fields of responsive web design, graphic design and art direction. I recently transitioned from the field of urban planning and sustainable architecture. I have a strong conviction that inclusion and diversity, throughout the process, are key for qualitative design, leading to both business growth, societal prosperity and indivudual growth.'
]
document.querySelector(".input").addEventListener("input", function () {
    let value = (this.value);
    let phrase = phrases[value];
    document.querySelector(".phrase").innerHTML = phrase;
});


let overlayEightTwo = document.querySelector('.overlay-eight-two');
let overlayOneOne = document.querySelector('.overlay-one-one');
let overlayTwoOne = document.querySelector('.overlay-two-one');
let overlaySevenOne = document.querySelector('.overlay-seven-one');
let overlayFourFive = document.querySelector('.overlay-four-five');
let overlayFiveOne = document.querySelector('.overlay-five-one');
let overlayNineOne = document.querySelector('.overlay-nine-one');
let overlayNineFour = document.querySelector('.overlay-nine-four');
let overlayElevenOne = document.querySelector('.overlay-eleven-one');
let overlayTwelveFour = document.querySelector('.overlay-twelve-four');

let oneOne = document.querySelector('.one-one');
let eightTwo = document.querySelector('.eight-two');
let twoOne = document.querySelector('.two-one');
let sevenOne = document.querySelector('.seven-one');
let fourFive = document.querySelector('.four-five');
let fiveOne = document.querySelector('.five-one');
let nineOne = document.querySelector('.nine-one');
let nineFour = document.querySelector('.nine-four');
let elevenOne = document.querySelector('.eleven-one');
let sixFour = document.querySelector('.six-four');
let twelveFour = document.querySelector('.twelve-four');

let modalOneOne = document.querySelector('.modal-one-one');
let modalEightTwo = document.querySelector('.modal-eight-two');
let modalTwoOne = document.querySelector('.modal-two-one');
let modalNineOne = document.querySelector('.modal-nine-one');
let modalNineFour = document.querySelector('.modal-nine-four');
let modalFourFive = document.querySelector('.modal-four-five');
let modalFiveOne = document.querySelector('.modal-five-one');
let modalSevenOne = document.querySelector('.modal-seven-one');
let modalElevenOne = document.querySelector('.modal-eleven-one');
let modalSixFour = document.querySelector('.modal-six-four');
let modalTwelveFour = document.querySelector('.modal-twelve-four');

oneOne.onmouseover = function () {
    overlayOneOne.classList.add("show")
}
eightTwo.onmouseover = function () {
    overlayEightTwo.classList.add("show")
}
twoOne.onmouseover = function () {
    overlayTwoOne.classList.add("show")
}
sevenOne.onmouseover = function () {
    overlaySevenOne.classList.add("show")
}
fourFive.onmouseover = function () {
    overlayFourFive.classList.add("show")
}
fiveOne.onmouseover = function () {
    overlayFiveOne.classList.add("show")
}
nineOne.onmouseover = function () {
    overlayNineOne.classList.add("show")
}
nineFour.onmouseover = function () {
    overlayNineFour.classList.add("show")
}
elevenOne.onmouseover = function () {
    overlayElevenOne.classList.add("show")
}
twelveFour.onmouseover = function () {
    overlayTwelveFour.classList.add("show")
}


oneOne.onmouseout = function () {
    overlayOneOne.classList.remove("show")
}
eightTwo.onmouseout = function () {
    overlayEightTwo.classList.remove("show")
}
twoOne.onmouseout = function () {
    overlayTwoOne.classList.remove("show")
}
sevenOne.onmouseout = function () {
    overlaySevenOne.classList.remove("show")
}
fourFive.onmouseout = function () {
    overlayFourFive.classList.remove("show")
}
fiveOne.onmouseout = function () {
    overlayFiveOne.classList.remove("show")
}
nineOne.onmouseout = function () {
    overlayNineOne.classList.remove("show")
}
nineFour.onmouseout = function () {
    overlayNineFour.classList.remove("show")
}
elevenOne.onmouseout = function () {
    overlayElevenOne.classList.remove("show")
}
twelveFour.onmouseout = function () {
    overlayTwelveFour.classList.remove("show")
}


// modal
overlayOneOne.onclick = function () {
    let opens = document.querySelectorAll(".open");
    opens.forEach(open => {
        open.classList.remove("open")
    });
    modalOneOne.querySelector('.modal-inner').scrollTop = 0;
    modalOneOne.classList.add("open")
}
modalOneOne.onclick = function () {
    modalOneOne.classList.remove("open")
}
modalOneOne.onmouseleave = function () {
    modalOneOne.classList.remove("open")
}

overlayEightTwo.onclick = function () {
    let opens = document.querySelectorAll(".open");
    opens.forEach(open => {
        open.classList.remove("open")
    });
    modalEightTwo.querySelector('.modal-inner').scrollTop = 0;
    modalEightTwo.classList.add("open")
}
modalEightTwo.onclick = function () {
    modalEightTwo.classList.remove("open")
}
modalEightTwo.onmouseleave = function () {
    modalEightTwo.classList.remove("open")
}

overlayTwoOne.onclick = function () {
    let opens = document.querySelectorAll(".open");
    opens.forEach(open => {
        open.classList.remove("open")
    });
    modalTwoOne.querySelector('.modal-inner').scrollTop = 0;
    modalTwoOne.classList.add("open")
}
modalTwoOne.onclick = function () {
    modalTwoOne.classList.remove("open")
}
modalTwoOne.onmouseleave = function () {
    modalTwoOne.classList.remove("open")

}
overlayNineOne.onclick = function () {
    let opens = document.querySelectorAll(".open");
    opens.forEach(open => {
        open.classList.remove("open")
    });
    modalNineOne.querySelector('.modal-inner').scrollTop = 0;
    modalNineOne.classList.add("open")
}
modalNineOne.onclick = function () {
    modalNineOne.classList.remove("open")
}
modalNineOne.onmouseleave = function () {
    modalNineOne.classList.remove("open")
}

overlayNineFour.onclick = function () {
    let opens = document.querySelectorAll(".open");
    opens.forEach(open => {
        open.classList.remove("open")
    });
    modalNineFour.querySelector('.modal-inner').scrollTop = 0;
    modalNineFour.classList.add("open")
}
modalNineFour.onclick = function () {
    modalNineFour.classList.remove("open")
}
modalNineFour.onmouseleave = function () {
    modalNineFour.classList.remove("open")
}

overlayFourFive.onclick = function () {
    let opens = document.querySelectorAll(".open");
    opens.forEach(open => {
        open.classList.remove("open")
    });
    modalFourFive.querySelector('.modal-inner').scrollTop = 0;
    modalFourFive.classList.add("open")
}
modalFourFive.onclick = function () {
    modalFourFive.classList.remove("open")
}
modalFourFive.onmouseleave = function () {
    modalFourFive.classList.remove("open")
}

overlaySevenOne.onclick = function () {
    let opens = document.querySelectorAll(".open");
    opens.forEach(open => {
        open.classList.remove("open")
    });
    modalSevenOne.querySelector('.modal-inner').scrollTop = 0;
    modalSevenOne.classList.add("open")
}
modalSevenOne.onclick = function () {
    modalSevenOne.classList.remove("open")
}
modalSevenOne.onmouseleave = function () {
    modalSevenOne.classList.remove("open")
}

overlayElevenOne.onclick = function () {
    let opens = document.querySelectorAll(".open");
    opens.forEach(open => {
        open.classList.remove("open")
    });
    modalElevenOne.querySelector('.modal-inner').scrollTop = 0;
    modalElevenOne.classList.add("open")
}
modalElevenOne.onclick = function () {
    modalElevenOne.classList.remove("open")
}
modalElevenOne.onmouseleave = function () {
    modalElevenOne.classList.remove("open")
}

overlayFiveOne.onclick = function () {
    let opens = document.querySelectorAll(".open");
    opens.forEach(open => {
        open.classList.remove("open")
    });
    modalFiveOne.querySelector('.modal-inner').scrollTop = 0;
    modalFiveOne.classList.add("open")
}
modalFiveOne.onclick = function () {
    modalFiveOne.classList.remove("open")
}
modalFiveOne.onmouseleave = function () {
    modalFiveOne.classList.remove("open")
}

sixFour.onclick = function () {
    let opens = document.querySelectorAll(".open");
    opens.forEach(open => {
        open.classList.remove("open")
    });
    modalSixFour.querySelector('.modal-inner').scrollTop = 0;
    modalSixFour.classList.add("open")
}
modalSixFour.onclick = function () {
    modalSixFour.classList.remove("open")
}
modalSixFour.onmouseleave = function () {
    modalSixFour.classList.remove("open")
}

twelveFour.onclick = function () {
    let opens = document.querySelectorAll(".open");
    opens.forEach(open => {
        open.classList.remove("open")
    });
    modalTwelveFour.querySelector('.modal-inner').scrollTop = 0;
    modalTwelveFour.classList.add("open")
}
modalTwelveFour.onclick = function () {
    modalTwelveFour.classList.remove("open")
}
modalTwelveFour.onmouseleave = function () {
    modalTwelveFour.classList.remove("open")
}


// book2
const sixSix = document.querySelector('.six-six');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(sixSix.offsetWidth, sixSix.offsetHeight);
sixSix.appendChild(renderer.domElement);
renderer.setClearColor(0xffffff, 0);

const ambient = new THREE.AmbientLight(0x222222);
scene.add(ambient);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.9);
directionalLight.position.set(0, 0, 6)
scene.add(directionalLight);

const texture = new THREE.TextureLoader();

const urls = [
    "images/side.webp", "images/spine.webp",
    "images/bottom2.webp", "images/bottom2.webp",
    "images/front.webp", "images/back.webp"
]
const materials = urls.map(url => {
    return new THREE.MeshLambertMaterial({
        map: texture.load(url)
    })
})

const geometry = new THREE.BoxGeometry(4.5, 4, 0.4);

const cube = new THREE.Mesh(geometry, materials);
scene.add(cube);

camera.position.z = 6;

function animate2() {
    requestAnimationFrame(animate2);
    // cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}
animate2();

// kanye
let kanye = document.querySelector('.kanye');
kanye.onmouseover = function () {
    kanye.style.animation = "kanye 1s";
}
// module aliases
const { Engine, Render, World, Bodies, Composites, MouseConstraint } = Matter

Matter.use("matter-wrap")

// get the width/height of the window
const dpi = window.devicePixelRatio
const tenTwo = document.querySelector('.ten-two-inner')
const tenTwoO = document.querySelector('.ten-two')
const w = tenTwo.offsetWidth
const h = tenTwoO.offsetHeight

// create an matter.js engine
const engine = Engine.create()

// create a renderer
const renderer2 = Render.create({
    element: tenTwo,
    engine: engine,
    options: {
        width: w,
        height: h,
        pixelRatio: dpi,
        background: 'transparent',
        wireframes: false,
    }
})

const createShape = function (x, y) {
    const randomNum = Math.random()
    if (randomNum < 0.05) {
        return Bodies.rectangle(x, y, 50, 25, {
            density: 0.04,
            friction: 1,
            render: {
                sprite: {
                    texture: "images/react.webp",
                    xScale: 0.5,
                    yScale: 0.5
                }
            },
            plugin: {
                wrap: {
                    min: { x: 0, y: 0 },
                    max: { x: w, y: h }
                }
            }
        })
    } else if (randomNum > 0.05 && randomNum < 0.1) {
        return Bodies.rectangle(x, y, 50, 25, {
            render: {
                sprite: {
                    texture: "images/css.webp",
                    xScale: 0.5,
                    yScale: 0.5
                }
            },
            plugin: {
                wrap: {
                    min: { x: 0, y: 0 },
                    max: { x: w, y: h }
                }
            }
        })
    } else if (randomNum > 0.1 && randomNum < 0.15) {
        return Bodies.rectangle(x, y, 50, 25, {
            render: {
                sprite: {
                    texture: "images/html.webp",
                    xScale: 0.5,
                    yScale: 0.5
                }
            },
            plugin: {
                wrap: {
                    min: { x: 0, y: 0 },
                    max: { x: w, y: h }
                }
            }
        })
    } else if (randomNum > 0.15 && randomNum < 0.2) {
        return Bodies.rectangle(x, y, 50, 25, {
            render: {
                sprite: {
                    texture: "images/postman.webp",
                    xScale: 0.5,
                    yScale: 0.5
                }
            },
            plugin: {
                wrap: {
                    min: { x: 0, y: 0 },
                    max: { x: w, y: h }
                }
            }
        })
    } else if (randomNum > 0.2 && randomNum < 0.25) {
        return Bodies.rectangle(x, y, 50, 25, {
            render: {
                sprite: {
                    texture: "images/styledComponents.webp",
                    xScale: 0.5,
                    yScale: 0.5
                }
            },
            plugin: {
                wrap: {
                    min: { x: 0, y: 0 },
                    max: { x: w, y: h }
                }
            }
        })
    } else if (randomNum > 0.25 && randomNum < 0.3) {
        return Bodies.rectangle(x, y, 50, 25, {
            render: {
                sprite: {
                    texture: "images/git.webp",
                    xScale: 0.5,
                    yScale: 0.5
                }
            },
            plugin: {
                wrap: {
                    min: { x: 0, y: 0 },
                    max: { x: w, y: h }
                }
            }
        })
    } else if (randomNum > 0.3 && randomNum < 0.35) {
        return Bodies.rectangle(x, y, 50, 25, {
            render: {
                sprite: {
                    texture: "images/figma.webp",
                    xScale: 0.5,
                    yScale: 0.5
                }
            },
            plugin: {
                wrap: {
                    min: { x: 0, y: 0 },
                    max: { x: w, y: h }
                }
            }
        })
    } else if (randomNum > 0.35 && randomNum < 0.4) {
        return Bodies.rectangle(x, y, 50, 25, {
            render: {
                sprite: {
                    texture: "images/contentful.webp",
                    xScale: 0.5,
                    yScale: 0.5
                }
            },
            plugin: {
                wrap: {
                    min: { x: 0, y: 0 },
                    max: { x: w, y: h }
                }
            }
        })
    } else if (randomNum > 0.4 && randomNum < 0.45) {
        return Bodies.rectangle(x, y, 50, 25, {
            render: {
                sprite: {
                    texture: "images/netlify.webp",
                    xScale: 0.5,
                    yScale: 0.5
                }
            },
            plugin: {
                wrap: {
                    min: { x: 0, y: 0 },
                    max: { x: w, y: h }
                }
            }
        })
    } else if (randomNum > 0.45 && randomNum < 0.5) {
        return Bodies.rectangle(x, y, 50, 25, {
            render: {
                sprite: {
                    texture: "images/vanillaJavascript.webp",
                    xScale: 0.5,
                    yScale: 0.5
                }
            },
            plugin: {
                wrap: {
                    min: { x: 0, y: 0 },
                    max: { x: w, y: h }
                }
            }
        })
    } else if (randomNum > 0.5 && randomNum < 0.55) {
        return Bodies.rectangle(x, y, 50, 25, {
            render: {
                sprite: {
                    texture: "images/three.webp",
                    xScale: 0.5,
                    yScale: 0.5
                }
            },
            plugin: {
                wrap: {
                    min: { x: 0, y: 0 },
                    max: { x: w, y: h }
                }
            }
        })
    } else if (randomNum > 0.55 && randomNum < 0.6) {
        return Bodies.rectangle(x, y, 50, 25, {
            render: {
                sprite: {
                    texture: "images/p5.webp",
                    xScale: 0.5,
                    yScale: 0.5
                }
            },
            plugin: {
                wrap: {
                    min: { x: 0, y: 0 },
                    max: { x: w, y: h }
                }
            }
        })
    } else if (randomNum > 0.6 && randomNum < 0.65) {
        return Bodies.rectangle(x, y, 50, 25, {
            render: {
                sprite: {
                    texture: "images/graphQL.webp",
                    xScale: 0.5,
                    yScale: 0.5
                }
            },
            plugin: {
                wrap: {
                    min: { x: 0, y: 0 },
                    max: { x: w, y: h }
                }
            }
        })
    } else if (randomNum > 0.65 && randomNum < 0.7) {
        return Bodies.rectangle(x, y, 50, 25, {
            render: {
                sprite: {
                    texture: "images/node.webp",
                    xScale: 0.5,
                    yScale: 0.5
                }
            },
            plugin: {
                wrap: {
                    min: { x: 0, y: 0 },
                    max: { x: w, y: h }
                }
            }
        })
    } else if (randomNum > 0.7 && randomNum < 0.75) {
        return Bodies.rectangle(x, y, 50, 25, {
            render: {
                sprite: {
                    texture: "images/gatsby.webp",
                    xScale: 0.5,
                    yScale: 0.5
                }
            },
            plugin: {
                wrap: {
                    min: { x: 0, y: 0 },
                    max: { x: w, y: h }
                }
            }
        })
    } else if (randomNum > 0.75 && randomNum < 0.8) {
        return Bodies.rectangle(x, y, 50, 25, {
            render: {
                sprite: {
                    texture: "images/wordpress.webp",
                    xScale: 0.5,
                    yScale: 0.5
                }
            },
            plugin: {
                wrap: {
                    min: { x: 0, y: 0 },
                    max: { x: w, y: h }
                }
            }
        })
    } else if (randomNum > 0.8 && randomNum < 0.85) {
        return Bodies.rectangle(x, y, 50, 25, {
            render: {
                sprite: {
                    texture: "images/accessibility.webp",
                    xScale: 0.5,
                    yScale: 0.5
                }
            },
            plugin: {
                wrap: {
                    min: { x: 0, y: 0 },
                    max: { x: w, y: h }
                }
            }
        })
    } else if (randomNum > 0.85 && randomNum < 0.89) {
        return Bodies.rectangle(x, y, 50, 25, {
            render: {
                sprite: {
                    texture: "images/react.webp",
                    xScale: 0.5,
                    yScale: 0.5
                }
            },
            plugin: {
                wrap: {
                    min: { x: 0, y: 0 },
                    max: { x: w, y: h }
                }
            }
        })
    } else {
        return Bodies.rectangle(x, y, 50, 25, {
            render: {
                sprite: {
                    texture: "images/vanillaJavascript.webp",
                    xScale: 0.5,
                    yScale: 0.5
                }
            },
            plugin: {
                wrap: {
                    min: { x: 0, y: 0 },
                    max: { x: w, y: h }
                }
            }
        })
    }
}

const wallOptions = {
    isStatic: true,
    render: {
        visible: false
    }
}

const ground = Bodies.rectangle(w / 2, h + 50, w + 100, 100, wallOptions)
const leftWall = Bodies.rectangle(-50, h / 2, 100, h + 100, wallOptions)
const rightWall = Bodies.rectangle(w + 50, h / 2, 100, h + 100, wallOptions)
const ceiling = Bodies.rectangle(w / 2, -50, w + 100, 100, wallOptions)

const shapes = Composites.stack(50, 50, 8, 3, 20, 20, function (x, y) {
    return createShape(x, y)
})

const bigBall = Bodies.circle(w / 2, h / 2, Math.min(w / 4, h / 4), {
    isStatic: true,
    render: {
        fillStyle: '#000',
        strokeStyle: 'transparent'
    }
})
// add mouse control
const mouse = MouseConstraint.create(engine, {
    element: tenTwo,
    constraint: {
        render: {
            visible: false
        }
    }
})

// add all of the bodies to the world
World.add(engine.world, [
    mouse,
    shapes,
    bigBall,
    ground,
    ceiling,
    leftWall,
    rightWall
])
// run the engine
Engine.run(engine)
// run the renderer
Render.run(renderer2)


tenTwo.addEventListener("click", function (event) {
    const shape = createShape(event.clientX - 390, event.clientY - 380)
    World.add(engine.world, shape)
})

tenTwo.addEventListener("touchstart", function (event) {
    const shape = createShape(event.pageX, event.pageY)
    World.add(engine.world, shape)
})

window.addEventListener('deviceorientation', function (event) {
    engine.world.gravity = {
        x: (event.gamma / 50),
        y: (event.beta / 25)
    }

    Engine.update(engine)
})

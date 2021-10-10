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
            // frictionAir: 0.00001,
            // restitution: 0.8,
            render: {
                sprite: {
                    texture: "images/react.png",
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
                    texture: "images/css.png",
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
                    texture: "images/html.png",
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
                    texture: "images/postman.png",
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
                    texture: "images/styledComponents.png",
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
                    texture: "images/git.png",
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
                    texture: "images/figma.png",
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
                    texture: "images/contentful.png",
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
                    texture: "images/netlify.png",
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
                    texture: "images/vanillaJavascript.png",
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
                    texture: "images/three.png",
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
                    texture: "images/p5.png",
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
                    texture: "images/graphQL.png",
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
                    texture: "images/node.png",
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
                    texture: "images/gatsby.png",
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
                    texture: "images/wordpress.png",
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
                    texture: "images/accessibility.png",
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
                    texture: "images/react.png",
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
                    texture: "images/vanillaJavascript.png",
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

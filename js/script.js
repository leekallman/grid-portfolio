// // Panning
// let panTag = document.querySelector('.projectGrid');
// let currentX = 0;
// let currentY = 0;
// let aimX = 0;
// let aimY = 0;

// document.addEventListener("mousemove", function (event) {
//     const windowWidth = window.innerWidth;
//     const windowHeight = window.innerHeight;

//     const worldWidth = panTag.clientWidth;
//     const worldHeight = panTag.clientHeight;
//     const mouseX = event.pageX;
//     const mouseY = event.pageY;
//     const panWidth = worldWidth - windowWidth;
//     const panHeight = worldHeight - windowHeight;
//     const percentageX = mouseX / windowWidth;
//     const percentageY = mouseY / windowHeight;

//     aimX = -1 * panWidth * percentageX;
//     aimY = -1 * panHeight * percentageY;
// })


// const animate = () => {
//     currentX += (aimX - currentX) * 0.1;
//     currentY += (aimY - currentY) * 0.1;

//     panTag.style.left = currentX + "px";
//     panTag.style.top = currentY + "px";
//     requestAnimationFrame(animate)
// }
// animate();

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
letterBox.addEventListener("mousemove", function (event) {
    const x = event.pageX;
    const y = event.pageY;

    document.querySelectorAll(".letter").forEach(div => {
        // find the distance for every letter div
        const dx = div.offsetLeft + 10 - x;
        // every div 100x100 (-x is to ignore the cursor)
        const dy = div.offsetTop + 10 - y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        // distance(diagonal) is a^2 * b^2 = c^2
        const score = Math.exp(dist * -0.01);
        // convert the distance to a "score" between 0 - 1 through an exponential-curve

        // div.innerHTML = score.toFixed(2)
        div.style.transform = "scale(" + 3 * score + ")";
        div.style.fontWeight = (200 * Math.round(8 * score));
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

    let hourRotation = 360 / 12 * hour + 0.5 * min;
    let minRotation = 6 * min + 0.1 * sec;
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

// ellipses
const ellipse = document.querySelector('.ellipse2');
ellipse.addEventListener("mousemove", function () {
    ellipse.style.animation = "drop 0.2s forwards";
})
let overlayEightTwo = document.querySelector('.overlay-eight-two');
let overlayOneOne = document.querySelector('.overlay-one-one');
let overlayTwoOne = document.querySelector('.overlay-two-one');
let overlaySevenOne = document.querySelector('.overlay-seven-one');
let overlayFourFive = document.querySelector('.overlay-four-five');
let overlayFiveOne = document.querySelector('.overlay-five-one');
let overlayNineFour = document.querySelector('.overlay-nine-four');
let overlayElevenOne = document.querySelector('.overlay-eleven-one');

let oneOne = document.querySelector('.one-one');
let eightTwo = document.querySelector('.eight-two');
let twoOne = document.querySelector('.two-one');
let sevenOne = document.querySelector('.seven-one');
let fourFive = document.querySelector('.four-five');
let fiveOne = document.querySelector('.five-one');
let nineFour = document.querySelector('.nine-four');
let elevenOne = document.querySelector('.eleven-one');

let modalOneOne = document.querySelector('.modal-one-one');
let modalEightTwo = document.querySelector('.modal-eight-two');
let modalTwoOne = document.querySelector('.modal-two-one');
let modalNineFour = document.querySelector('.modal-nine-four');
let modalFourFive = document.querySelector('.modal-four-five');
let modalFiveOne = document.querySelector('.modal-five-one');
let modalSevenOne = document.querySelector('.modal-seven-one');
let modalElevenOne = document.querySelector('.modal-eleven-one');


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
nineFour.onmouseover = function () {
    overlayNineFour.classList.add("show")
}
elevenOne.onmouseover = function () {
    overlayElevenOne.classList.add("show")
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
nineFour.onmouseout = function () {
    overlayNineFour.classList.remove("show")
}
elevenOne.onmouseout = function () {
    overlayElevenOne.classList.remove("show")
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
    "../images/side.png", "../images/spine.png",
    "../images/bottom2.png", "../images/bottom2.png",
    "../images/front.png", "../images/back.png"
]
const materials = urls.map(url => {
    return new THREE.MeshLambertMaterial({
        map: texture.load(url)
    })
})

const geometry = new THREE.BoxGeometry(3.5, 4.5, 0.4);

const cube = new THREE.Mesh(geometry, materials);
scene.add(cube);

camera.position.z = 6;

function animate2() {
    requestAnimationFrame(animate2);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}
animate2();


// form
var form = document.getElementById("my-form");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        status.classList.add('success');
        status.innerHTML = "Thank you!";
        form.reset();
    }).catch(error => {
        status.classList.add('error');
        status.innerHTML = "Oops! There was a problem submitting your idea"
    });
}
form.addEventListener("submit", handleSubmit)
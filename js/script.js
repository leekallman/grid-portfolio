// Panning
let panTag = document.querySelector('.projectGrid');
let currentX = 0;
let currentY = 0;
let aimX = 0;
let aimY = 0;

document.addEventListener("mousemove", function (event) {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const worldWidth = panTag.clientWidth;
    const worldHeight = panTag.clientHeight;
    const mouseX = event.pageX;
    const mouseY = event.pageY;
    const panWidth = worldWidth - windowWidth;
    const panHeight = worldHeight - windowHeight;
    const percentageX = mouseX / windowWidth;
    const percentageY = mouseY / windowHeight;

    aimX = -1 * panWidth * percentageX;
    aimY = -1 * panHeight * percentageY;
})


const animate = () => {
    currentX += (aimX - currentX) * 0.05;
    currentY += (aimY - currentY) * 0.05;

    panTag.style.left = currentX + "px";
    panTag.style.top = currentY + "px";
    requestAnimationFrame(animate)
}
animate();


// book
const sixSix = document.querySelector('.six-six');
sixSix.addEventListener('mousemove', function (event) {
    const x = event.pageX;
    const y = event.pageY;
    const midX = x - window.innerWidth / 4;
    const midY = y - window.innerHeight / 4;

    const book = document.querySelector('.book')
    book.style.left = x + 'px';
    book.style.bottom = y + 'px';

    book.style.transform = 'rotateX(' + midY + 'deg)rotateY(' + midX + 'deg)';
});


// letters
const letterBox = document.querySelector('.three-three');
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
    document.querySelector(".phrase").html(phrase);
});

// ellipses
const ellipse = document.querySelector('.ellipse2');
ellipse.addEventListener("mousemove", function () {
    ellipse.style.animation = "drop 0.2s forwards";
    // ellipse.style.transition = 'all 0.1s ease-out'
})



// contacts
'use strict'

// create spans for every letter in contacts div
function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr) }

function makeSpans(selector) {
    var _document$querySelect = document.querySelectorAll(selector);
    var _document$querySelect2 = _toArray(_document$querySelect);
    var elements = _document$querySelect2.slice(0);

    return elements.map(function (element) {
        var text = element.innerText.split('');
        var spans = text.map(function (letter) {
            return '<span>' + letter + '</span>'
        }).join('');
        return element.innerHTML = spans
    });
};

// usage with single selector
makeSpans('.contacts');




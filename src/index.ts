import "./styles.scss";

import gsap from "gsap";

const w = window.innerWidth;
const h = window.innerHeight;
const w2 = w / 2;
const h2 = h / 2;

function randomFloat(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
function randomInt(min: number, max: number) {
  return Math.floor(
    Math.random() * (max - min + 1) + min
  );
}

const createCircle = (
  x: number,
  y: number,
  r: number
) => {
  const circle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );

  gsap.set(circle, {
    attr: {
      cx: x.toString(),
      cy: y.toString(),
      r: r.toString()
    }
  });

  gsap
    .timeline()
    .to(circle, {
      fill: `rgba(${randomInt(
        0,
        255
      )}, ${randomInt(0, 255)}, ${randomInt(
        0,
        255
      )}, 1)`
    })
    .to(circle, {
      delay: randomFloat(1, 5),
      r: 0,
      yoyo: true,
      repeat: -1
    });

  return circle;
};

const { body } = document;

const svgDOMEl = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "svg"
);
body.appendChild(svgDOMEl);

gsap.set(svgDOMEl, {
  attr: {
    height: h,
    width: w
  }
});

function createCircles(
  rCircle: number,
  r: number,
  total: number
) {
  for (let i = 0; i < 360; i += 360 / total) {
    svgDOMEl.appendChild(
      createCircle(
        w2 +
          rCircle * Math.cos((i * Math.PI) / 180),
        h2 +
          rCircle * Math.sin((i * Math.PI) / 180),
        r
      )
    );
  }
}

createCircles(100, 10, 10);
createCircles(200, 20, 30);
createCircles(300, 30, 50);

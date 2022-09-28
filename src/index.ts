import "./styles.scss";

import gsap from "gsap";

const svgDOMEl = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "svg"
);

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
      r: 0
    });

  return circle;
};

const { body } = document;

body.appendChild(svgDOMEl);
svgDOMEl.appendChild(createCircle(w2, h2, 100));

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

// import ScrollTrigger from "gsap/ScrollTrigger";
// import { gsap } from "gsap";

// gsap.registerPlugin(ScrollTrigger);

// const tl = gsap
//   .timeline()
//   // .timeScale(10)
//   .addLabel("p1")
//   .to(".box.a", {
//     xPercent: 100,
//     duration: 0.1
//     // delay: 2
//   })
//   .addLabel("p2")
//   .to(["a", "b", "c"], {
//     xPercent: 120,
//     duration: 0.1,
//     transform: "skew(15deg)"
//   })
//   .to(".box.b", {
//     xPercent: 100,
//     duration: 0.1,
//     transform: "skew(0)"
//   })
//   .addLabel("p3")
//   .to(".box.c", {
//     background: "#fabada",
//     duration: 0.2
//   })
//   .to(".box.c", {
//     filter: "drop-shadow(30px 10px 4px #4444dd)",
//     transform: "scale(0)",
//     rotation: 360 * 1,
//     duration: 0.2
//   });

// ScrollTrigger.create({
//   trigger: "#container",
//   end: "+=8000%",
//   animation: tl,
//   pin: true,
//   scrub: true
// });

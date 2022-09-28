import "./styles.scss";

import gsap, { Elastic } from "gsap";

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

const { body } = document;
const padding = 110;

for (
  let x = 0;
  x < window.innerWidth;
  x += padding
) {
  for (
    let y = 0;
    y < window.innerHeight;
    y += padding
  ) {
    const sqDOMEl = document.createElement("div");
    sqDOMEl.classList.add("box");

    gsap.set(sqDOMEl, {
      scale: 1, //randomFloat(0.15, 1),
      x,
      y
    });

    body.appendChild(sqDOMEl);
  }
}

const boxes = gsap.utils.toArray(".box");

boxes.forEach((box: any, index) =>
  gsap.set(box, {
    background: () => {
      const hsl = (boxes.length / index) * 360;
      return "hsl(" + hsl + ", 100%, 50%)";
    }
  })
);

gsap.to(".box", {
  delay: 0.2,
  duration: 5,
  rotation: 180,
  ease: Elastic.easeOut,
  background: "red",
  stagger: {
    // repeat: -1,
    // yoyo: true,
    amount: 4,
    from: "edges",
    grid: "auto"
  }
});

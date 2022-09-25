import "./styles.scss";

import { Quad, gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.defaults({
  duration: 2
});

const tl = gsap
  .timeline({ paused: !true })
  .to(".a", {
    xPercent: -100,
    backgroundColor: "yellow",
    ease: Quad.easeIn
  })
  .to(".b", {
    xPercent: -100
    // duration: 4
  });
// .to(".c", {
//   xPercent: -100
// });

const containerDOMEl: HTMLElement =
  document.querySelector("#container")!;

const height2 = containerDOMEl.offsetHeight * 10;

console.log(height2);

ScrollTrigger.create({
  animation: tl,
  start: "top top",
  end: () => "+=" + height2,
  trigger: "#container",
  scrub: true,
  pin: !true
});

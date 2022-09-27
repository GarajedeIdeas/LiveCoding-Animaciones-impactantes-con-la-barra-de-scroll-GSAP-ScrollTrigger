import "./styles.scss";

import ScrollTrigger from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

const tl = gsap
  .timeline()
  // .timeScale(10)
  .addLabel("p1")
  .to(".box.a", {
    xPercent: 100,
    duration: 0.1
    // delay: 2
  })
  .addLabel("p2")
  .to(["a", "b", "c"], {
    xPercent: 120,
    duration: 0.1,
    transform: "skew(15deg)"
  })
  .to(".box.b", {
    xPercent: 100,
    duration: 0.1,
    transform: "skew(0)"
  })
  .addLabel("p3")
  .to(".box.c", {
    background: "#fabada",
    duration: 0.2
  })
  .to(".box.c", {
    filter: "drop-shadow(30px 10px 4px #4444dd)",
    transform: "scale(0)",
    rotation: 360 * 1,
    duration: 0.2
  });

ScrollTrigger.create({
  trigger: "#container",
  end: "+=8000%",
  animation: tl,
  pin: true,
  scrub: true
});

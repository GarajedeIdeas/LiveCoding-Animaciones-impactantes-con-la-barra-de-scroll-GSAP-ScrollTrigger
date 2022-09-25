import "./styles.scss";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

const tl = gsap
  .timeline()
  .to(".box.a", {
    xPercent: 100,
    duration: 5
  })
  .to(".box.b", {
    yPercent: 100,
    duration: 15
  })
  .to(".box.c", {
    backgroundColor: "orange",
    duration: 15
  });

ScrollTrigger.create({
  // markers: true,
  animation: tl,
  trigger: "#container",
  start: "top top",
  end: "+=5000",
  pin: true,
  scrub: true
});

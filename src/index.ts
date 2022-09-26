import "./styles.scss";

import { Power4, gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const tl = gsap
  .timeline()
  .timeScale(8)
  .addLabel("l1")
  .to(".box.a", {
    xPercent: 100,
    duration: 5
  })
  .addLabel("l2")
  .to(".box.b", {
    yPercent: 100,
    rotation: 20,
    duration: 15,
    ease: Power4.easeOut
  })
  .to(".box.b", {
    opacity: 0,
    duration: 5
  })
  .addLabel("l3")
  .to(".box.c", {
    backgroundColor: "orange",
    duration: 15
  });

tl.seek("l2");

ScrollTrigger.create({
  // markers: true,
  animation: tl,
  trigger: "#container",
  start: "top top",
  end: "+=50000",
  pin: true,
  scrub: true
});

import "./styles.scss";

import { Elastic } from "gsap/all";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

const t1 = gsap.to(".box.b", {
  opacity: 0.5,
  duration: 1,
  onReverseComplete: () => {
    if (Math.random() > 0.5) {
      t1.resetTo("opacity", 0);
    } else {
      t1.resetTo("opacity", 1);
    }
  }
});

const tl = gsap
  .timeline()
  .to(".box.a", {
    top: "-100vh",
    delay: 1,
    duration: 1
  })
  .add(t1)
  .to(".box.c", {
    // yPercent: 100,

    opacity: 0,
    // ease: Elastic.easeIn,
    duration: 1
  });

ScrollTrigger.create({
  animation: tl,
  trigger: "#container",
  start: "top top",
  end: `+=${1205 * 5}`,
  pin: true,
  scrub: true
});

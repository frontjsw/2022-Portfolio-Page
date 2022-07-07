gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.saveStyles(".mobile, .desktop");

const tl1 = gsap.timeline();

tl1
  .to(".main_vis .txt1", {
    duration: 3,
    scale: 0.8,
    opacity: 0,
  })
  .fromTo(
    ".main_vis .txt2",
    {
      duration: 3,
      y: 50,
    },
    { duration: 3, y: 0, opacity: 1 }
  )
  .to(".main_vis .txt2", {
    duration: 3,
    scale: 0.8,
    opacity: 0,
  })
  .fromTo(
    ".main_vis .txt3",
    {
      duration: 3,
      y: 50,
    },
    { duration: 3, y: 0, opacity: 1 }
  )
  .to(".main_vis .txt3", {
    duration: 3,
    scale: 0.8,
    opacity: 0,
  });

ScrollTrigger.create({
  animation: tl1,
  trigger: ".main_vis",
  start: "top top",
  // end: "+=3000",
  pin: true,
  // markers: true,
  scrub: 1,
});

gsap.to(".publishing ul", {
  xPercent: -75,
  scrollTrigger: {
    trigger: ".publishing",
    markers: true,
    start: "top top",
    end: "+=2000",
    // end: () => "+=" + publeConW * 10,
    pin: true,
    scrub: 1,
  },
});
// .timeline({
//   scrollTrigger: {
//     trigger: ".publishing",
//     // markers: true,
//     start: "top top",
//     end: "+=12000",
//     pin: true,
//     scrub: 1,
//   },
// })

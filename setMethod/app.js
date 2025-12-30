// gsap.set(".box", {
//   opacity: 0,
//   background: "yellow",
// });
// gsap.to(".box", {
//   opacity: 1,
//   background: "crimson",
//   duration: 4,
//   y: 100,
//   repeat: -1,
//   yoyo: true,
// });

gsap.set(".box", {
  opacity: 0,
  borderRadius: 100,
});

gsap.to(".box", {
  opacity: 1,
  borderRadius: 0,
  y: -100,
  x: 100,
  duration: 2,
  yoyo: true,
  repeat: -1,
});

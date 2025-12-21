// gsap.from(".box1", {
//   y: 200,
//   duration: 3,
//   ease: "linear",
//   repeat: -1,
//   yoyo: true,
// });

// from to

// gsap.fromTo(
//   ".box2",
//   {
//     y: 200,
//     opacity: 0,
//   },
//   {
//     opacity: 1,
//     y: -200,
//     duration: 3,
//     ease: "linear",
//     borderRadius: 0,
//     repeat: -1,
//     yoyo: true,
//   }
// );

gsap.fromTo(
  ".box3",
  {
    y: -200,
    x: -100,
    opacity: 0,
    borderRadius: 100,
  },
  {
    y: 300,
    x: 200,
    opacity: 1,
    duration: 2,
    borderRadius: 0,
    repeat: -1,
    yoyo: true,
  }
);

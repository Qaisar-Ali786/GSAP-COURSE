// const tl = gsap.timeline();

// tl.to(".box1", {
//   duration: 2,
//   scale: 0,
//   opacity: 0,
//   delay: 1,
// })
//   .to(".box2", {
//     x: -200,
//     duration: 2,
//   })
//   .to(".box3", {
//     x: -200,
//     duration: 2,
//     borderRadius: 0,
//     rotate: 360,
//   })
//   .set(".box1", {
//     duration: 2,
//     scale: 1,
//     opacity: 1,
//   });

// refactor

const tl = gsap.timeline({
  defaults: {
    duration: 2,
  },
});

tl.to(".box1", {
  scale: 0,
  opacity: 0,
  delay: 1,
})
  .to(".box2", {
    x: -200,
  })
  .to(".box3", {
    x: -200,

    borderRadius: 0,
    rotate: 360,
  })
  .set(".box1", {
    scale: 1,
    opacity: 1,
  });


// document.addEventListener('DOMContentLoaded', () => {

//     new TypeIt('#title') //
//         .pause(1000)
//         .delete(7, { delete: 2000 })
//         .type('JavaScript')
//         .go();

// });



new TypeIt("#title", {
  speed: 50,
//   strings: ["Look at this thing go!", "Is it not cool?"],
  cursorChar: "⭐",
  cursor: {
    autoPause: false,
    animation: {
      options: {
        duration: 1000,
        easing: "linear",
        direction: "alternate",
      },
      frames: [
        {
          transformOrigin: "0.575em 0.7em",
          transform: "rotate(0deg) scale(1)",
        },
        {
          transformOrigin: "0.575em 0.7em",
          transform: "rotate(360deg) scale(2.5)",
        },
      ],
    },
  },
}).go();
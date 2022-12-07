const nav = document.querySelector("nav");
const burger = document.querySelector(".burger");

const intro = document.querySelector(".intro");
// const workDivOne = document.querySelector("#work div:nth-child(1)");
// const workDivTwo = document.querySelector("#work div:nth-child(2)");
// const workDivThree = document.querySelector("#work div:nth-child(3)");
// const workDivFour = document.querySelector("#work div:nth-child(4)");
// const work = document.querySelector("#work");

const mainContainer = document.querySelector(".main-container");

burger.addEventListener("click", () => nav.classList.toggle("toggle-nav"));

burger.addEventListener("click", () =>
  mainContainer.classList.toggle("toggle-container")
);

//            SCROLL EVENT
window.onscroll = () => {
  let top = window.pageYOffset;
  if (top > 200) {
    intro.classList.add("hidden");
  } else {
    intro.classList.remove("hidden");
  }
};

// workDivOne.addEventListener("mouseover", () =>
//   document
//     .querySelector("#work div h3")
//     .classList.toggle("rotate-class")
// );

// workDivOne.addEventListener("mouseout", () =>
//   document.querySelector("#work div h3").classList.toggle("rotate-class")
// );

// workDivThree.addEventListener("mouseout", () =>
//   document.querySelector("#work div h3").classList.toggle("rotate-class")
// );

// workDivFour.addEventListener("mouseout", () =>
//   document.querySelector("#work div h3").classList.toggle("rotate-class")
// );

// work.addEventListener("mouseover", (e) => {
//   console.log(e.target.classList[0]);
//   if (e.target.classList[0] === "work") {
//     e.target.querySelector("h3").classList.toggle("rotate-class");
//   }
// });

// work.addEventListener("mouseout", (e) => {
//   if (e.target.classList[0] === "work") {
//     e.target.querySelector("h3").classList.toggle("rotate-class");
//   }
// });

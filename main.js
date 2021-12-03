const accordions = document.querySelectorAll(".accordion");
const questions = document.querySelectorAll(".question");
const questionArrows = document.querySelectorAll(".question-arrow");
const arrows = document.querySelectorAll(".arrow");
const answers = document.querySelectorAll(".answer");

// REMOVE CLASSES FUN.
const removeClass = (selectors, classToRemove) => {
  selectors.forEach((selector) =>
    selector.classList.remove(`${classToRemove}`)
  );
};

accordions.forEach((accordion, i) => {
  accordion.addEventListener("click", () => {
    answers[i].classList.toggle("appear");
    answers[i].classList.toggle("disappear");

    questions[i].classList.toggle("active-accordion");

    arrows[i].classList.toggle("arrow-up");
    arrows[i].classList.toggle("arrow");

    const collapseAccordion = () => {
      answers[i].classList.add("disappear");
      // removeClass(questions[i], 'active-accordion');
      // removeClass(arrows[i], 'arrow-up');
      questions[i].classList.remove("active-accordion");
      arrows[i].classList.remove("arrow-up");
    };

    setTimeout(collapseAccordion, 3500);
  });
});

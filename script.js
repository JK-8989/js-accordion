let btn = document.getElementById('hamburger-bar');
let panelContainer = document.getElementsByClassName('panel-container');
let questions = document.getElementsByClassName('panel-question');
let answers = document.getElementsByClassName('panel-body');

for (let i = 0; i < panelContainer.length; i++) {
  panelContainer[i].addEventListener('click', () => {

    for (let j = 0; j < questions.length; j++) {
      questions[j].classList.remove('active');
    }
  });
};

console.log(questions)
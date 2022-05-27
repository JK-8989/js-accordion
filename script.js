let btn = document.getElementById('hamburger-bar');
let panelContainer = document.getElementsByClassName('panel-container');
let questions = document.getElementsByClassName('panel-question');
let answers = document.getElementsByClassName('panel-body');

for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener('click', (e) => {

    for (let j = 0; j < panelContainer.length; j++) {
      panelContainer[j].classList.remove('active');
      e.target.parentNode.classList.add('active');
      activateBody();
    } 
  });
};

activateBody = () => {
  for (let k  = 0; k < answers.length; k++){
    answers[k].style.display = 'none';
  };
  let activePanel = document.querySelector('.panel-container.active .panel-body');
  activePanel.style.display = 'block';
};
activateBody()

btn.addEventListener('click', ()=>{
  for (let i  = 0; i < answers.length; i++){
    answers[i].style.display = 'none';
  };
});

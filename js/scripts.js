const popup = document.getElementById('popup');
let counter = 0;
const messages = [
  {
    name: 'HTML',
    job: 'Billionaire and jester'
  },
  {
    name: 'CSS',
    job: 'Sleeper'
  },
  {
    name: 'JavaScript',
    job: 'Eater'
  },
  {
    name: 'PHP',
    job: 'Sleeper'
  },
];

const generatePopUp = ({ name, job }) => {
  setTimeout(() => {
    popup.innerHTML = '';
    const fragment = document.createDocumentFragment();
    const h3 = document.createElement('h3');
    h3.textContent = name;
    h3.classList.add('popup__title');
    const text = document.createElement('p');
    text.textContent = job;
    text.classList.add('popup__text');
    fragment.appendChild(h3);
    fragment.appendChild(text);
    popup.appendChild(fragment);
    popup.classList.add('popup--show');
  }, 3000);
};

popup.addEventListener('transitionend', e => {
  if (popup.classList.contains('popup--show')) {
    setTimeout(() => {
      popup.classList.remove('popup--show');
      if (counter >= messages.length - 1) {
        counter = 0;
      } else {
        counter = counter + 1;
      }
      generatePopUp(messages[counter]);
    }, 3000);
  }
});

generatePopUp(messages[counter]);

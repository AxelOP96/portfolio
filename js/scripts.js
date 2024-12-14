/* const popup = document.getElementById('popup');
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
}); */

//generatePopUp(messages[counter]);
//////////////////////////////
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((elem, index) => {
  elem.onclick = () => {
    const pageTurnId = elem.getAttribute('data-page');
    const pageTurn = document.getElementById(pageTurnId);

    if(pageTurn.classList.contains('turn')){
      pageTurn.classList.remove('turn');
      setTimeout(() => {
        pageTurn.style.zIndex = 20 - index;
      }, 500);
    }
    else{
      pageTurn.classList.add('turn');
      setTimeout(() => {
        pageTurn.style.zIndex = 20 + index;
      }, 500);
    }
  }
})
//////////////////////////////
const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');

contactMeBtn.onclick = () => {
  pages.forEach((page, index) => {
    setTimeout(() => {
      page.classList.add('turn');

      setTimeout(() => {
        page.style.zIndex = 20 + index;
      }, 500)
    }, (index + 1) *200 +100)
  })
}
//////////////////////////////
let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex(){
  pageNumber--;
  if(pageNumber < 0){
    pageNumber= totalPages -1;
  }
}
//////////////////////////////
const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.onclick = () => {
  pages.forEach((_, index) => {
    setTimeout(() => {
      reverseIndex();
      pages[pageNumber].classList.remove('turn');

      setTimeout(() => {
        pages[pageNumber].style.zIndex = 10 + index;
      }, 500)

    }, (index + 1) * 200 + 100)
  })
}

//////////////////////////////////////
const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');

setTimeout(() => {
  coverRight.classList.add('turn');
}, 2100)
setTimeout(() => {
  coverRight.style.zIndex = -1;
}, 2800)
////////////////////////////////////////
setTimeout(() => {
  pageLeft.style.zIndex = 20;
}, 3200)
//////////////////////////////////////////
pages.forEach((_, index) => {
  setTimeout(() => {
    reverseIndex();
    pages[pageNumber].classList.remove('turn');

    setTimeout(() => {
      pages[pageNumber].style.zIndex = 10 + index;
    }, 500)

  }, (index + 1) * 200 + 2100)
})
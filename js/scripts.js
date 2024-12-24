
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
//// Animación de los proyectos///

let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let listItemDom = document.querySelector('.carousel .list');
let thumbnailDom = document.querySelector('.carousel .thumbnail');

nextDom.onclick = function(){
  showSlider('next');
}
prevDom.onclick = function(){
  showSlider('prev');
}
let timeRunning = 3000;
let timeAutoNext = 7000;
let runTimeOut;
let runAutoRun = setTimeout(() =>{
  nextDom.click();
},timeAutoNext);
/* function showSlider(type){


  let itemSlider = document.querySelectorAll('.carousel .list .item');
  let itemThumbnail = document.querySelectorAll('.carousel .thumbnail');

  if(type === 'next'){
    listItemDom.appendChild(itemSlider[0]);
    thumbnailDom.appendChild(itemThumbnail[0]);
    carouselDom.classList.add('next');
  }else{
    let positionLastItem = itemSlider.length -1;
    listItemDom.prepend(itemSlider[positionLastItem]);
    thumbnailDom.prepend(itemThumbnail[positionLastItem])
    carouselDom.classList.add('prev');
  }
  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() =>{
    carouselDom.classList.remove('next');
    carouselDom.classList.remove('prev');
  }, timeRunning)

  clearTimeout(runAutoRun);
  runAutoRun = setTimeout(() =>{
    nextDom.click();
  },timeAutoNext);
} */

  function showSlider(type) {
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail');
  
    if (type === 'next') {
      // Mover el primer elemento al final solo si no hay conflicto
      if (listItemDom.contains(itemSlider[0])) {
        listItemDom.appendChild(itemSlider[0]);
      }
      if (thumbnailDom.contains(itemThumbnail[0])) {
        thumbnailDom.appendChild(itemThumbnail[0]);
      }
      carouselDom.classList.add('next');
    } else {
      let positionLastItem = itemSlider.length - 1;
      // Mover el último elemento al principio solo si no hay conflicto
      if (listItemDom.contains(itemSlider[positionLastItem])) {
        listItemDom.prepend(itemSlider[positionLastItem]);
      }
      if (thumbnailDom.contains(itemThumbnail[positionLastItem])) {
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
      }
      carouselDom.classList.add('prev');
    }
    
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
      carouselDom.classList.remove('next');
      carouselDom.classList.remove('prev');
    }, timeRunning);
  
    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(() => {
      nextDom.click();
    }, timeAutoNext);
  }
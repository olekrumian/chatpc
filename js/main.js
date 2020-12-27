const dropDown = document.querySelector('.dropdown__greate');
const dropDownBtn = document.querySelector('.header__add')



const overlay = document.createElement('div')
overlay.classList.add('overlay');
document.body.insertAdjacentElement("beforeend", overlay);

const openDropDown = () => {
  dropDown.classList.add('dropdown__greate--active');
  dropDownBtn.classList.add('btn__active');
  overlay.classList.add('overlay__active');
}

const closeDropDown = () => {
  dropDown.classList.remove('dropdown__greate--active');
  dropDownBtn.classList.remove('btn__active');
  overlay.classList.remove('overlay__active');
}

dropDownBtn.addEventListener('click', openDropDown);
overlay.addEventListener('click', closeDropDown);


document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
      closeDropDown();
    };
  });

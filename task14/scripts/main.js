
const menuHandler = () => {
  const d = document;
  const menu = d.querySelector('.header__menu');
  const items = menu.querySelectorAll('li');

  const clickHandler = (e) => {
    e.preventDefault();
    const el = e.target.parentNode;
    el.classList.toggle('active');
    // console.log('click: ', el);

    // menu.removeEventListener('click', clickHandler);
  }
  menu.addEventListener('click', clickHandler);

};


menuHandler();

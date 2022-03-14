const burgerMenu = () => {
  let hamburger = document.querySelector('.burger');
  let menu = document.querySelector('.menu');

  function toggleMenu() {
    document.querySelector('.burger span').classList.toggle('active');
    menu.classList.toggle('animate');
  }

  hamburger.addEventListener('click', e => {
    e.stopPropagation(); //Прекращает дальнейшую передачу текущего события
    toggleMenu();
  });

  document.addEventListener('click', tar => {
    let target = tar.target; // e.target ссылается на кликнутый элемент
    let its_menu = target == menu || menu.contains(target); // e.contains возвращает Boolean значение, указывающее, является ли узел потомком данного узла
    let its_hamburger = target == hamburger;
    let menu_is_active = menu.classList.contains('animate');

    if (!its_menu && !its_hamburger && menu_is_active) {
      toggleMenu();
    }; //срабатывает, если кликнуть за пределами активного меню
  })
}

burgerMenu();
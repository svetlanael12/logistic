const select = () => {
  let x, i, j, l, ll, selElmnt, a, b, c;
  /* Найдите любые элементы с классом custom-select: */

  x = document.getElementsByClassName("custom-select"); //блок в котором лежит вся форма селект

  l = x.length; //длина всего массива

  for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0]; //ищем тег select
    ll = selElmnt.length;
    /* для каждого оптион создаем див с классом  select-selected*/
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /* для каждого элемента создаем новый див с классом select-items select-hide*/
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
      /* Для каждого параметра в исходном элементе выбора создайте новый DIV, который будет действовать как элемент опции: */
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function (e) {
        /* При щелчке элемента обновите исходное поле выбора, и выбранный элемент: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
      /* 
  Когда щелкнут поле выбора, закройте все другие поля выбора, и открыть/закрыть текущее поле выбора: */
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
  }

  function closeAllSelect(elmnt) {
    /* Функция, которая закроет все поля выбора в документе, кроме текущего поля выбора: */
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i)
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < xl; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }

  /* Если пользователь щелкнет в любом месте за пределами поля выбора, затем закройте все поля выбора: */
  document.addEventListener("click", closeAllSelect);
}

select();
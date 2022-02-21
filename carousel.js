let btnNext = document.querySelector('.next');
let images = document.querySelectorAll('.slide');
let carousel = document.getElementById('carousel');
let k = 0;


btnNext.onclick = function () {
    let clone = images[k].cloneNode(true);
    let arrayClone = [];//массив с клонами
    arrayClone[k] = clone;//с каждым выполнением добавляем новый элемент в массив
    console.log(k);
    console.log(arrayClone);

    carousel.appendChild(clone);
    carousel.removeChild(images[k]);
    k++;

    if (arrayClone.length == 5) {
        images = document.querySelectorAll('.slide');//заново переписываем массив
        arrayClone.length = 0;//обнуляем массив с клонами
        k = 0;
    };
};


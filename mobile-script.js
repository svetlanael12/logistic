document.querySelector('.burger').addEventListener('click', function(){
    document.querySelector('.burger span').classList.toggle('active');
    document.querySelector('.menu').classList.toggle("animate");
  })
  
 





  var slider = document.getElementById('slider'), 
  sliderItems = document.getElementById('slides'),
  prev = document.getElementById('prev'),
  next = document.getElementById('next');

  slider(slider, sliderItems, prev, next);

  function slide(wrapper, items, prev, next) {
    var posX1 = 0,
    posX2 = 0,
    posInitial,
    posFinal,
    threshold = 100,
    slides = items.getElementByClassName('slide'),
    slidesLength = slides.length,
    slideSize = items.getElementByClassName('slide')[0].offsetwidth,
    firstSlide = slides[0],
    lastSlide = slides[slidesLength - 1],
    cloneFirst = firstSlide.cloneNode(true),
  cloneLast = lastSlide.cloneNode(true),
  index = 0,
  allowShift = true;

  items.appendChild(cloneFirst);
  items.insertBefore(cloneLast, firstSlide);
  };
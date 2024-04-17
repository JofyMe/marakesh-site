const showPopupButton = document.getElementById('showPopup');
const phonePopup = document.getElementById('phonePopup');
const closePopupButton = document.getElementById('closePopup');

document.addEventListener("DOMContentLoaded", function() {
  const block1 = document.getElementById('block1');
  const block2 = document.getElementById('block2');
  const block3 = document.getElementById('block3');
  let isOpaque = false;

  block1.addEventListener('click', function() {
    if (isOpaque) {
      block2.style.opacity = 0;
      block2.style.top = "-1000%";
      block3.style.opacity = 0;
      block3.style.top = "-1000%";
    } else {
      block2.style.opacity = 0.9;
      block2.style.top = 0;
      block3.style.opacity = 1;
      block3.style.top = "50%";
    }
    isOpaque = !isOpaque;
  });
});

showPopupButton.addEventListener('click', () => {
  phonePopup.classList.add('show');
  setTimeout(() => {
    phonePopup.querySelector('.popup__content').style.opacity = '1';
    phonePopup.querySelector('.popup__content').style.transform = 'translate(-50%, -50%) scale(1)';
  }, 50);
});

closePopupButton.addEventListener('click', () => {
  phonePopup.querySelector('.popup__content').style.opacity = '0';
  phonePopup.querySelector('.popup__content').style.transform = 'translate(-50%, -50%) scale(0.5)';
  setTimeout(() => {
    phonePopup.classList.remove('show');
  }, 300); 
});

function clearInput() {
    document.getElementById("news__input").value = "";
  }

  var lastScrolledElement = null;

  function scrollToPart(partId) {
    var part = document.getElementById(partId);
    
    // Если последний прокрученный элемент совпадает с текущим, прокручиваем к верху
    if (lastScrolledElement === part) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      lastScrolledElement = null; // Сбрасываем последний прокрученный элемент
    } else {
      // В противном случае, прокручиваем к элементу
      part.scrollIntoView({ behavior: 'smooth' });
      lastScrolledElement = part; // Обновляем последний прокрученный элемент
    }
  }
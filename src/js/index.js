const showPopupButton = document.getElementById('showPopup');
const phonePopup = document.getElementById('phonePopup');
const closePopupButton = document.getElementById('closePopup');

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
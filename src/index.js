console.log("Hello world")
//  ссылка на кнопку трека
const buttonTrack = document.querySelector('.media__button-track');
// ссылка на кнопку открытия треков
const buttonOpenTracks = document.querySelector('.media__button-open');
// ссылка на контейнер с треками
const mediaContentContainer = document.querySelector('.media__content');
//ссылка на кнопку открытия стримингов
const buttonOpenMenu = document.querySelector('.menu__open-streamings');
//ссылка на кнопку закрытия стримингов
const buttonCloseMenu = document.querySelector('.menu__close-button');

// функция открытия контейнера треков
const toggleOpenTracks = () => {
  mediaContentContainer.classList.toggle('media__content_opened');
  buttonTrack.classList.toggle('media__button-track_opened');
  buttonOpenTracks.classList.toggle('media__button-open_active');
}
//функция открытия стримингов
const addMenu = () => {
  buttonOpenMenu.parentNode.classList.add('menu__resource_invisible');
  buttonCloseMenu.parentNode.classList.remove('menu__resource_invisible');
  document.querySelectorAll('.menu__resource-link').forEach(el => el.classList.add('menu__resource-link_visible'));
}

//функция закрытия стримингов
const removeMenu = () => {
  buttonOpenMenu.parentNode.classList.remove('menu__resource_invisible');
  buttonCloseMenu.parentNode.classList.add('menu__resource_invisible');
  document.querySelectorAll('.menu__resource-link').forEach(el => el.classList.remove('menu__resource-link_visible'));
}

// слущатель для кнопки открытия треков
buttonOpenTracks.addEventListener('click', toggleOpenTracks);
//слушатель для кнопки открытия стримингов
buttonOpenMenu.addEventListener('click', addMenu);
//слушатель для кнопки закрытия стримингов
buttonCloseMenu.addEventListener('click', removeMenu);

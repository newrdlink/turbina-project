console.log("Hello world")
//  ссылка на кнопку трека
const buttonTrack = document.querySelector('.media__button-track');
// ссылка на кнопку открытия треков
const buttonOpenTracks = document.querySelector('.media__button-open');
// ссылка на контейнер с треками
const mediaContentContainer = document.querySelector('.media__content');
// функция открытия контейнера треков
const toggleOpenTracks = () => {
  mediaContentContainer.classList.toggle('media__content_opened');
  buttonTrack.classList.toggle('media__button-track_opened');
  buttonOpenTracks.classList.toggle('media__button-open_active');
}
// слущатель для кнопки открытия треков
buttonOpenTracks.addEventListener('click', toggleOpenTracks);

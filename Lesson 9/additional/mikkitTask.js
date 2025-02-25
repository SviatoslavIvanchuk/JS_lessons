// VIDEO: https://www.awesomescreenshot.com/video/37005543?key=d6853c7168b7feeeffe4c4eb67e04579

let songs = [];

document.querySelectorAll('.item-grid-card').forEach(card => {
    let title = card.querySelector('.item-grid-card__title')?.textContent.trim() || 'Unknown Title';
    let author = card.querySelector('.item-grid-music-preview__author')?.textContent.trim() || 'Unknown Author';
    let mp3 = card.getElementsByTagName('div')[0]?.getAttribute('data-audio-player-preview-url-value') || 'Not Found MP3';

    songs.push({title, author, mp3});

})

console.log(songs);

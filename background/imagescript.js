window.addEventListener('DOMContentLoaded', function() {
    var images = [
        'sky512_rt.jpg',
        'sky512_lf.jpg',
        'sky512_ft.jpg',
        'sky512_bk.jpg'
    ];
    var randomIndex = Math.floor(Math.random() * images.length);
    var randomImage = images[randomIndex];
    document.body.style.backgroundImage = 'url(background/' + randomImage + ')';
});

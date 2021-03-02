var vidOverlay = document.querySelector('#video-overlay');
var page = document.querySelector('html');
var vidPlays = document.querySelectorAll('.play-video');
vidPlays.forEach(x => x.addEventListener('click', function(e){
    e.preventDefault();
    vidOverlay.classList.add('open');
    var vid = document.createElement('div');
    vid.setAttribute('id', 'video-holder')
    vid.innerHTML = '<div class="responsive-content video"><iframe class="responsive-inner" width="100%" height="480" src="'+ this.href +'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
    vidOverlay.appendChild(vid);
    page.style.overflowY = 'hidden';
}));

document.querySelector('.video-overlay, .video-overlay-close').addEventListener('click', function(e){
    e.preventDefault();
    close_video();
});

document.addEventListener('keyup', function(e){
    if(e.keyCode === 27) { close_video(); }
});

function close_video() {
    !!vidOverlay.removeChild(document.querySelector('#video-holder'));
    document.querySelector('.video-overlay.open').classList.remove('open');
    page.style.overflowY = 'auto';
};
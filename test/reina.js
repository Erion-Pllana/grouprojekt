
    function highlight(button) {
        const review = button.closest('.game-review');
        review.style.border = '2px solid #cc00ff';
    }

    function playFart() {
      const sound = document.getElementById('fartSound');
      sound.currentTime = 0; // rewind to start
      sound.play();
    }


function likeGame(button) {
    const countSpan = button.querySelector('.like-count');
    let count = parseInt(countSpan.textContent);
    count++;
    countSpan.textContent = count;
    button.classList.add('clicked');

    // Remove animation class after a short delay
    setTimeout(() => {
        button.classList.remove('clicked');
    }, 400);
}



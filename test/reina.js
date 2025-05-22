
    function highlight(button) {
        const review = button.closest('.game-review');
        review.style.border = '2px solid #cc00ff';
    }

    const button = document.getElementById("gameButton");
    const message = document.getElementById("message");
    const sound = document.getElementById("gameSound");

    button.addEventListener("click", () => {
      sound.currentTime = 0; // Rewind to start
      sound.play();
      message.textContent = "Bang!";
    }
    )



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



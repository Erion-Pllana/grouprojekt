
    function highlight(button) {
        const review = button.closest('.game-review');
        review.style.border = '2px solid #cc00ff';
    }

    function surpriseMe() {
    const reviews = document.querySelectorAll('.game-review');
    if (reviews.length === 0) return;

    // Pick a random review
    const randomIndex = Math.floor(Math.random() * reviews.length);
    const chosen = reviews[randomIndex];

    // Scroll to the selected game
    chosen.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // Temporary highlight effect
    const originalBg = chosen.style.backgroundColor;
    chosen.style.backgroundColor = '#6a0dad'; // bright purple
    chosen.style.transition = 'background-color 0.5s ease';

    setTimeout(() => {
        chosen.style.backgroundColor = originalBg || '#1a1a2f';
    }, 1500);
}

function surpriseMe() {
    const reviews = document.querySelectorAll('.game-review');
    if (reviews.length === 0) return;

    const sound = document.getElementById('surpriseSound');
    sound.play();

    const randomIndex = Math.floor(Math.random() * reviews.length);
    const chosen = reviews[randomIndex];

    chosen.scrollIntoView({ behavior: 'smooth', block: 'center' });

    const originalBg = chosen.style.backgroundColor;
    chosen.style.backgroundColor = '#6a0dad';
    chosen.style.transition = 'background-color 0.5s ease';

    setTimeout(() => {
        chosen.style.backgroundColor = originalBg || '#1a1a2f';
    }, 1500);
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



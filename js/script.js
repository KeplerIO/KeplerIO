let heartInterval;
const positions = [0, 25, 50, 75, 100];

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "floating-heart";
    heart.textContent = "❤";
    heart.style.left = positions[Math.floor(Math.random() * positions.length)] + "%";
    heart.style.animation = "float 2s ease-out forwards";
    document.getElementById("hearts-container").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 2000);
}

function startHearts() {
    heartInterval = setInterval(createHeart, 300);
}

function stopHearts() {
    clearInterval(heartInterval);
    const hearts = document.getElementsByClassName("floating-heart");
    while (hearts.length > 0) {
        hearts[0].remove();
    }
}
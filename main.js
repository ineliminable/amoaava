
const lockScreen = document.getElementById('lock-screen');

function createHeart(x, y) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${x - 10}px`;
    heart.style.top = `${y - 10}px`;
    heart.style.animationDuration = `${2 + Math.random() * 2}s`;
    document.body.appendChild(heart);
    setTimeout(()=>heart.remove(), 4000);
}

lockScreen.addEventListener('click', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    
    for(let i=0; i<5; i++){
        const offsetX = x + (Math.random()*60-30);
        const offsetY = y + (Math.random()*60-30);
        createHeart(offsetX, offsetY);
    }

   
    lockScreen.style.transition = 'opacity 1.5s ease';
    lockScreen.style.opacity = 0;
    setTimeout(()=> lockScreen.remove(), 1500);
});


const audio = new Audio("assets/cancion.mp3"); 
audio.loop = true;

const musicButton = document.createElement('button');
musicButton.textContent = 'Reproducir música';
musicButton.id = 'musicBtn';
musicButton.style.position = 'fixed';
musicButton.style.top = '20px';
musicButton.style.left = '20px';
musicButton.style.padding = '10px 20px';
musicButton.style.border = 'none';
musicButton.style.borderRadius = '10px';
musicButton.style.background = '#ff5cff';
musicButton.style.color = 'white';
musicButton.style.cursor = 'pointer';
musicButton.style.boxShadow = '0 0 20px rgba(255,92,255,0.6)';
musicButton.style.zIndex = '1000';
document.body.appendChild(musicButton);

musicButton.addEventListener('click', () => {
    if(audio.paused){
        audio.play();
        musicButton.textContent = '⏸ Pausar música';
    } else {
        audio.pause();
        musicButton.textContent = 'Reproducir música';
    }
});


const planetSystem = document.querySelector('.planet-system');
for(let i=0; i<30; i++){
    const star = document.createElement('div');
    star.classList.add('star');
    const size = Math.random() * 4 + 2;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.background = 'rgba(255,255,255,0.8)';
    star.style.borderRadius = '50%';
    star.style.position = 'absolute';
    star.style.top = `${Math.random()*100}%`;
    star.style.left = `${Math.random()*100}%`;
    star.style.boxShadow = '0 0 10px white';
    star.style.animation = `twinkle ${Math.random()*3 + 2}s infinite alternate`;
    planetSystem.appendChild(star);
}

const title = document.querySelector('.text-box h2');
let angle = 0;
setInterval(() => {
    angle = Math.sin(Date.now()/500) * 5;
    title.style.transform = `rotate(${angle}deg)`;
}, 50);

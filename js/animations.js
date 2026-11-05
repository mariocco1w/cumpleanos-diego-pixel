const confettiLayer = document.getElementById('confettiLayer');
const replayButton = document.getElementById('replayBtn');
const colors = ['#ff9bd4', '#ffdc83', '#b99aff', '#8ce8d4', '#fff0c9'];

function confettiBurst(count = 100) {
  for (let i = 0; i < count; i++) {
    const bit = document.createElement('span');
    bit.className = 'confetti';
    bit.style.left = `${Math.random() * 100}%`;
    bit.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    bit.style.setProperty('--duration', `${2.2 + Math.random() * 2.6}s`);
    bit.style.setProperty('--drift', `${-150 + Math.random() * 300}px`);
    bit.style.animationDelay = `${Math.random() * .5}s`;
    confettiLayer.appendChild(bit);
    bit.addEventListener('animationend', () => bit.remove(), { once: true });
  }
}

function replayScene() {
  const scene = document.querySelector('.cemetery');
  scene.classList.remove('replay');
  void scene.offsetWidth;
  scene.classList.add('replay');
  confettiBurst(80);
}

// Restart by reloading the page so the entrance timing is replayed exactly.
replayButton.addEventListener('click', () => {
  confettiBurst(110);
  window.setTimeout(() => window.location.reload(), 450);
});

window.addEventListener('load', () => {
  window.setTimeout(() => confettiBurst(35), 10500);
});

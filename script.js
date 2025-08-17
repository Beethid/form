const text = document.querySelector("#skanema");

let pos = 0;

function animateGradient() {
  pos += 1;
  if (pos >= 300) pos = 0;
  text.style.backgroundPosition = `${pos}% 50%`;
  requestAnimationFrame(animateGradient);
}

animateGradient();


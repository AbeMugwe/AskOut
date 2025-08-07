
  const noBtn = document.getElementById("no");

function getSafeRandomPosition() {
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;
  const padding = 20; // Prevent from touching the edge

  const maxX = window.innerWidth - btnWidth - padding;
  const maxY = window.innerHeight - btnHeight - padding;

  const minX = padding;
  const minY = padding;

  const x = Math.random() * (maxX - minX) + minX;
  const y = Math.random() * (maxY - minY) + minY;

  return { x, y };
}

noBtn.addEventListener("mouseover", () => {
  const { x, y } = getSafeRandomPosition();
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});




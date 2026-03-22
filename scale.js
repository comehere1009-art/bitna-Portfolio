function resize() {
  const baseWidth = 1920;
  const baseHeight = 1080;

  const scaleW = window.innerWidth / baseWidth;
  const scaleH = window.innerHeight / baseHeight;
  const scale = Math.min(scaleW, scaleH);

  const wrap = document.getElementById("wrap");
  wrap.style.transform = `scale(${scale})`;
}

window.addEventListener("resize", resize);
window.addEventListener("load", resize);

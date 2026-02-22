gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// animação de flutuar
gsap.to("#float-img", {
  y: -20, // sobe 20px
  duration: 1.5, // tempo de animação
  ease: "power1.inOut", // suavidade
  yoyo: true, // voltar
  repeat: -1, // repetir infinito
});

gsap.to(".link-conhecer", {
  "--rotation": "360deg",
  duration: 2,
  repeat: -1,
  ease: "linear"
});

const btn = document.querySelector(".link-conhecer");

btn.addEventListener("mouseenter", () => {
  gsap.to(btn, {
    "--rotation": "360deg",
    duration: 1.5,
    repeat: -1,
    ease: "linear"
  });
});

btn.addEventListener("mouseleave", () => {
  gsap.killTweensOf(btn);
  gsap.set(btn, { "--rotation": "0deg" });
});
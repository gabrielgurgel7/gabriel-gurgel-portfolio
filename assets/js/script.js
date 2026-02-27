gsap.registerPlugin(TextPlugin, ScrollTrigger, ScrollSmoother);

// ANIMAÇÃO OLÁ MUNDO - SEÇÃO HERO:
const texto = "Olá, mundo!";

const tl = gsap.timeline({ repeat: -1 });

for (let i = 0; i < 2; i++) {
  tl.to("#texto", { text: "...", duration: 0.8 })
    .to("#texto", { duration: 0.4 });
}

tl.to("#texto", {
  duration: texto.length * 0.08,
  text: texto,
  ease: "none"
})
.to("#texto", { duration: 2 })
.to("#texto", {
  duration: texto.length * 0.05,
  text: "",
  ease: "none"
});

// ANIMAÇÃO FLUTUAR MINI COMPUTADOR - SECAO HERO:
gsap.fromTo("#float-img",
  { y: -15 },
  {
    y: 15,
    duration: 2,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true
  }
);

gsap.to(".link-conhecer", {
  "--rotation": "360deg",
  duration: 2,
  repeat: -1,
  ease: "linear"
});


// ANIMAÇÃO LEGENDAS DE SEÇÃO:
const legenda = "Quem é o GAB?";

gsap.to("#legend-section", {
  duration: legenda.length * 0.08,
  text: legenda,
  repeat: -1,
  yoyo: true,
  repeatDelay: 2,
  ease: "none"
});

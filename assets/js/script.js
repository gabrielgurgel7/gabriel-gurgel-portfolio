gsap.registerPlugin(ScrollTrigger,ScrollSmoother)

// animação de flutuar
gsap.to("#float-img", {
  y: -20,             // sobe 20px
  duration: 1.5,       // tempo de animação
  ease: "power1.inOut",// suavidade
  yoyo: true,          // voltar
  repeat: -1           // repetir infinito
});
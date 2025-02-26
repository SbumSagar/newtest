var tl=gsap.timeline();

tl.from(".brand",{
  y:-20,
  duration:1,
  delay:0.5,
  opacity:0,
})
tl.from(".center-links",{
  y:-20,
  duration:1,
  opacity:0,
  stagger:0.8,
})
tl.from(".home-section",{
  y:-20,
  opacity:0,
  duration:1,
  stagger:0.3,
})

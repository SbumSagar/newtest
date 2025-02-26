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


document.addEventListener("DOMContentLoaded", function () {
  const headings = document.querySelectorAll(".edits .heading1, .clickable-section .heading1");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.5 }); // Triggers when 50% of the text is in view

  headings.forEach((heading) => observer.observe(heading));
});

gsap.registerPlugin(ScrollTrigger)
const splitTypes=document.querySelectorAll('.reveal-type')
splitTypes.forEach((char,i)=>{
  const text=new SplitType(char,{types:'chars'})
  gsap.from(text.chars,{
    scrollTrigger:{
      trigger:char,
      start:'top 90%',
      scrub:'true',
      duration:10,
    },
    opacity:0.4,
    color:'grey',
    stagger:0.2,
  })
})
const lenis=new Lenis()

lenis.on('Scroll',(e)=>{
  console.log(e);
})

function raf(time){
  lenis.raf(time)
  requestAnimationFrame(raf)


}
requestAnimationFrame(raf)

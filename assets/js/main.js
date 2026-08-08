const toggle=document.querySelector('.menu-toggle'),links=document.querySelector('.nav-links');if(toggle&&links){toggle.addEventListener('click',()=>{const open=links.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});}const theories=["Documentation is organizational memory.","Complexity is inevitable. Confusion isn't.","Good systems reduce decisions, not flexibility.","Knowledge loses value when people can't find it.","Every workflow teaches people something.","The best documentation answers tomorrow's questions.","Process should support people, not constrain them.","The strongest systems become almost invisible.","Better questions build better systems.","Clarity is a form of operational leverage.","A system is only useful if people can actually use it.","Good structure creates room for better judgment."];const text=document.querySelector('[data-theory-text]'),dots=document.querySelector('[data-theory-dots]'),prev=document.querySelector('[data-theory-prev]'),next=document.querySelector('[data-theory-next]');if(text&&dots){let i=Math.floor(Math.random()*theories.length);function render(){text.textContent='“'+theories[i]+'”';dots.innerHTML='';theories.forEach((_,n)=>{const d=document.createElement('span');d.className='theory-dot'+(n===i?' active':'');dots.appendChild(d);});}prev?.addEventListener('click',()=>{i=(i-1+theories.length)%theories.length;render();});next?.addEventListener('click',()=>{i=(i+1)%theories.length;render();});render();}
document.querySelectorAll('.system-feature').forEach(card=>{
  card.addEventListener('mousemove',e=>{
    const r=card.getBoundingClientRect();
    card.style.setProperty('--mx',`${e.clientX-r.left}px`);
    card.style.setProperty('--my',`${e.clientY-r.top}px`);
  });
});

const v4Theory = document.querySelector('[data-v4-theory]');
if (v4Theory) {
  const v4Theories = [
    "Documentation is organizational memory.",
    "Complexity is inevitable. Confusion isn't.",
    "Good systems reduce decisions, not flexibility.",
    "Knowledge loses value when people can't find it.",
    "Every workflow teaches people something.",
    "The best documentation answers tomorrow's questions.",
    "Process should support people, not constrain them.",
    "The strongest systems become almost invisible.",
    "Better questions build better systems.",
    "Clarity is a form of leverage.",
    "A useful system makes the next decision easier.",
    "Structure should create clarity without eliminating judgment."
  ];
  const previous = sessionStorage.getItem('averyTheory');
  let options = v4Theories.filter(t => t !== previous);
  const chosen = options[Math.floor(Math.random() * options.length)];
  v4Theory.textContent = chosen;
  sessionStorage.setItem('averyTheory', chosen);
}

// small scripts: smooth scrolling and Subscribe click micro-interaction
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const href = a.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        document.querySelector(href).scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // Subscribe button simple feedback
  const subBtn = document.getElementById('subscribe');
  const email = document.getElementById('email');
  if(subBtn){
    subBtn.addEventListener('click', ()=>{
      const val = email.value.trim();
      if(!val || !val.includes('@')){
        subBtn.textContent = 'Enter a valid email';
        subBtn.disabled = true;
        setTimeout(()=>{ subBtn.disabled=false; subBtn.textContent='Subscribe'; }, 1600);
      } else {
        subBtn.textContent = 'Subscribed ✓';
        subBtn.disabled=true;
        setTimeout(()=>{ subBtn.textContent='Subscribe'; subBtn.disabled=false; email.value='';},1500);
      }
    });
  }
});

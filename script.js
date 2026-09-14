const menu=document.querySelector('.menu'),nav=document.querySelector('.nav');
menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open)});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();

document.getElementById('contactForm')?.addEventListener('submit',e=>{
  e.preventDefault();
  const f=new FormData(e.currentTarget);
  const nome=f.get('nome')||'';
  const telefone=f.get('telefone')||'';
  const email=f.get('email')||'';
  const mensagem=f.get('mensagem')||'';
  const texto=`Olá, SIPESP!\n\nNome: ${nome}\nTelefone: ${telefone}\nE-mail: ${email}\n\nMensagem:\n${mensagem}`;
  const url=`https://wa.me/5511916449815?text=${encodeURIComponent(texto)}`;
  const status=document.getElementById('formStatus');
  status.textContent='Abrindo o WhatsApp para concluir o envio…';
  window.open(url,'_blank','noopener');
});

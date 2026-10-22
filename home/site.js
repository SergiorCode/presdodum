const icon = name => `<svg class="icon" aria-hidden="true"><use href="#i-${name}"/></svg>`;
const route = path => `../webapp-demo/#${path}`;
const benefits = {
  atencion: {
    eyebrow:'CERCA, INCLUSO A DISTANCIA', icon:'video', number:'10', title:'Asesorías médicas.<br>Una preocupación menos.', description:'En línea o por teléfono, incluidas durante la vigencia de tu paquete.', cta:'Conoce cómo solicitarlas', path:'/empleado/solicitar/asesoria',
    rows:[['heart','También, de forma presencial','Descuentos en consultas con médicos de primer contacto.','/empleado/red-medica'],['pill','Un alivio para tu bolsillo','Descuentos desde el <strong>30% en 100 medicamentos.</strong>','/empleado/beneficios/farmacia'],['file','Tu historia no se pierde','Consulta tu expediente, historial, medicamentos y recetas.','/empleado/salud']]
  },
  prevencion: {
    eyebrow:'UN PASO ADELANTE, CADA AÑO', icon:'leaf', number:'1', title:'Estudio preventivo.<br>Para darle tiempo a tu salud.', description:'Un estudio gratuito al año para la prevención de enfermedades y complicaciones de salud.', cta:'Conoce tu estudio anual', path:'/empleado/beneficios/preventivo',
    rows:[['shield','Vacunas a tu alcance','Descuentos en vacunas como influenza, COVID-19, VPH y más.','/empleado/beneficios/vacunas'],['heart','Estudios clínicos con descuento','Consulta las opciones y beneficios de la red de atención.','/empleado/red-medica'],['calendar','Dale continuidad a tu bienestar','Revisa tu historial y organiza los siguientes pasos desde el portal.','/empleado/salud']]
  },
  proteccion: {
    eyebrow:'RESPALDO PARA LOS IMPREVISTOS', icon:'shield', number:'$4,000', money:true, title:'Un respaldo<br>en caso de accidente.', description:'Reembolso de gastos de hasta $4,000 MXN por evento, conforme a las condiciones del paquete.', cta:'Consulta esta cobertura', path:'/empleado/coberturas/accidentes',
    rows:[['leaf','Protección en momentos difíciles','Seguro de gastos funerarios por <strong>$40,000 MXN.</strong>','/empleado/coberturas/funerarios'],['call','Asistencia cuando se necesita','<strong>1 servicio de ambulancia</strong> para el trabajador, sujeto a condiciones.','/empleado/solicitar/ambulancia'],['file','Cada solicitud, con seguimiento','Consulta el avance y los documentos relacionados en tu portal.','/empleado/solicitudes']]
  }
};
const screens = {
  expediente:{image:'assets/portal-expediente.jpg',alt:'Pantalla de demostración del expediente de Mariana, con información ficticia.',path:'/empleado/salud'},
  documentos:{image:'assets/portal-documentos.jpg',alt:'Pantalla de demostración del portal con documentos ficticios para consultar y descargar.',path:'/documentos'},
  asistente:{image:'assets/portal-asistente.jpg',alt:'Pantalla de demostración del asistente PRESDODUM para soporte y dudas generales.',path:'/ayuda/asistente'}
};
function selectTab(button) {
  const group=button.closest('[role="tablist"]');
  group.querySelectorAll('[role="tab"]').forEach(tab=>{const active=tab===button;tab.classList.toggle('active',active);tab.setAttribute('aria-selected',String(active));tab.tabIndex=active?0:-1;});
  if(button.dataset.benefit){
    const key=button.dataset.benefit,b=benefits[key],panel=document.getElementById('benefit-panel');
    panel.dataset.theme=key;panel.setAttribute('aria-labelledby',button.id);
    panel.innerHTML=`<div class="benefit-feature"><div class="feature-top"><span class="eyebrow">${b.eyebrow}</span>${icon(b.icon)}</div><span class="benefit-number ${b.money?'money':''}">${b.number}</span><h3>${b.title}</h3><p>${b.description}</p><a class="text-link" href="${route(b.path)}">${b.cta} ${icon('arrow')}</a></div><div class="benefit-list">${b.rows.map(([i,title,description,path])=>`<a class="benefit-row" href="${route(path)}"><span class="row-icon">${icon(i)}</span><div><h3>${title}</h3><p>${description}</p></div><svg class="icon row-arrow" aria-hidden="true"><use href="#i-up"/></svg></a>`).join('')}</div>`;
  }
  if(button.dataset.screen){
    const s=screens[button.dataset.screen],image=document.getElementById('portal-image');
    image.src=s.image;image.alt=s.alt;document.getElementById('portal-preview').setAttribute('aria-labelledby',button.id);document.getElementById('portal-demo-link').href=route(s.path);
  }
}
document.querySelectorAll('[role="tab"]').forEach(button=>button.addEventListener('click',()=>selectTab(button)));
document.querySelectorAll('[role="tablist"]').forEach(group=>group.addEventListener('keydown',event=>{
  if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;
  const tabs=[...group.querySelectorAll('[role="tab"]')],index=tabs.indexOf(document.activeElement);if(index<0)return;
  event.preventDefault();const next=event.key==='Home'?0:event.key==='End'?tabs.length-1:(index+(event.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;selectTab(tabs[next]);tabs[next].focus();
}));
const menuButton=document.querySelector('.menu-toggle'),navigation=document.getElementById('navigation');
function closeMenu(){menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Abrir menú');navigation.classList.remove('open');}
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú');navigation.classList.toggle('open',open);});
navigation.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('click',event=>{if(!event.target.closest('.site-header'))closeMenu();});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&navigation.classList.contains('open')){closeMenu();menuButton.focus();}});
document.querySelectorAll('[data-open]').forEach(button=>button.addEventListener('click',()=>{const dialog=document.getElementById(button.dataset.open);dialog.showModal();document.body.classList.add('dialog-open');}));
document.querySelectorAll('dialog').forEach(dialog=>{
  dialog.querySelectorAll('[data-close]').forEach(button=>button.addEventListener('click',()=>dialog.close()));
  dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
  dialog.addEventListener('close',()=>document.body.classList.remove('dialog-open'));
});

'use strict';
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-navigation');
function closeMenu() { document.body.classList.remove('navigation-open'); menu?.setAttribute('aria-expanded', 'false'); menu?.setAttribute('aria-label', 'Open navigation'); }
menu?.addEventListener('click', () => { const open = !document.body.classList.contains('navigation-open'); document.body.classList.toggle('navigation-open', open); menu.setAttribute('aria-expanded', String(open)); menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation'); });
nav?.addEventListener('click', (event) => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && document.body.classList.contains('navigation-open')) { closeMenu(); menu.focus(); } });
const lessons = {
  load: ['Check the load before you move it', 'Assess its weight, grip and stability. Choose suitable help or equipment before lifting.'],
  route: ['Prepare a clear route', 'Check the path and destination. Remove obstructions and protect the route before moving a load.'],
  bench: ['Move with control', 'Keep a manageable load close. Turn with your feet and stop if you cannot keep control.'],
};
document.querySelectorAll('[data-hotspot]').forEach((button) => button.addEventListener('click', () => {
  const scene = button.closest('.product-window');
  const [title, description] = lessons[button.dataset.hotspot];
  scene.querySelector('#preview-title').textContent = title;
  scene.querySelector('#preview-description').textContent = description;
  scene.querySelectorAll('[data-hotspot]').forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
}));

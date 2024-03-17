window.addEventListener('DOMContentLoaded', async () => {
  const sidenavReq = await fetch('/components/sidenav.html');
  const sidenav = await sidenavReq.text();
  document.querySelector('.main-content').insertAdjacentHTML('beforebegin', sidenav);

  const footerReq = await fetch('/components/footer.html');
  const footer = await footerReq.text();
  document.querySelector('.page-content').insertAdjacentHTML('afterend', footer);

  const navbarReq = await fetch('/components/navbar.html');
  const navbar = await navbarReq.text();
  document.querySelector('.page-content').insertAdjacentHTML('beforebegin', navbar);

  const searchReq = await fetch('/components/search.html');
  const search = await searchReq.text();
  document.querySelector('.page-content').insertAdjacentHTML('beforebegin', search);
})
// Toggle menu on mobile
document.getElementById('menuToggle').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});

// Toggle submenu on mobile
document.querySelectorAll('.submenu-toggle').forEach(toggle => {
  toggle.addEventListener('click', function (e) {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      const parentLi = this.parentElement;
      parentLi.classList.toggle('open');
    }
  });
});

// Switch section (iframe)
function switchSection(id) {
  document.querySelectorAll("article").forEach(a => a.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// Load submenu content inside current iframe
function loadPage(url) {
  const iframe = document.querySelector("article.active iframe");
  if (iframe) {
    iframe.src = url;
  }
}

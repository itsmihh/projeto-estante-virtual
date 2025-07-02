const perfilBtn = document.querySelector('.perfil-btn');
const dropdownMenu = document.querySelector('.dropdown');

perfilBtn.addEventListener('click', function (e) {
    e.preventDefault();
    console.log("Fuo");
    dropdownMenu.classList.toggle('open');
});

document.addEventListener('click', function (e) {
    if (!dropdownMenu.contains(e.target)) {
    dropdownMenu.classList.remove('open');
    }
});


const dropdown = document.querySelector('.dropdown-wrapper');
const button = dropdown.querySelector('.dropdown-btn');
const menu = dropdown.querySelector('.dropdown-menu');

button.addEventListener('click', () => {
    dropdown.classList.toggle('open');
});

menu.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        button.firstChild.textContent = e.target.textContent;
        dropdown.classList.remove('open');
    }
});

  // Fechar se clicar fora
  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('open');
    }
  });
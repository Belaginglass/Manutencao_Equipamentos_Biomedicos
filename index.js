const verMaisBtn = document.getElementById('ver-mais-btn');
const extraPostagens = document.getElementById('extra-postagens');

verMaisBtn.addEventListener('click', function() {
    extraPostagens.classList.toggle('hidden');
  if (extraPostagens.classList.contains('hidden')) {
    verMaisBtn.innerHTML = "<i class='bx bx-chevron-down'></i>"; 
  } else {
    verMaisBtn.innerHTML = "<i class='bx bx-chevron-up'></i>"; 
  }
});

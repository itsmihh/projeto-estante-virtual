var modal = document.getElementById('meu-modal');
var span = document.getElementsByClassName('fechar-modal')[0];

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function() {
    modal.style.display = "none";
}

function slider(productName) {
    document.querySelector('.home-img img').src = `./img/${productName}`;
}

let menuIcon = document.getElementById('menu');
let menuSuspenso = document.querySelector('.menu-suspenso');

menuIcon.addEventListener('click', () => {
    menuSuspenso.classList.toggle('mostrar');
});

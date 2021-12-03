const buttonElement = document.getElementById('button');
const menuElement = document.getElementById('menu');
const linkElement = document.getElementById('link');
const modalElement = document.getElementById('modal-window');
const closeElement = document.getElementById('close-btn');
const maskElement = document.getElementById('mask');
const header_maskElement = document.getElementById('header-mask');

$('.slick-slider').slick({
    dots: true,
    arrows: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1
  });
$('.about-slick').slick({
    dots: true,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        }
    ]
});

buttonElement.onclick = openMenu;
function openMenu() {
    menuElement.classList.toggle('show');
    buttonElement.classList.toggle ('active');
    header_maskElement.classList.toggle ('open');
}

linkElement.onclick = openModal;
function openModal(e) {
    e.preventDefault();
    modalElement.classList.toggle('open');
}

closeElement.onclick = closeModal;
maskElement.onclick = closeModal;
function closeModal () {
    modalElement.classList.remove('open');
}

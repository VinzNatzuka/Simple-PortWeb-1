document.addEventListener('DOMContentLoaded', function () {
  var check = document.getElementById('check');
  var navbar = document.getElementById('navbar');
  var closeIcon = document.getElementById('closeicon');

  // Close navbar when clicking outside or on close icon
  document.addEventListener('click', function (event) {
    var isClickInsideNavbar = navbar.contains(event.target);
    var isClickOnCheckbox = event.target.id === 'check';
    var isClickOnCloseIcon = event.target.id === 'closeicon';

    if (!isClickInsideNavbar && !isClickOnCheckbox && !isClickOnCloseIcon) {
      check.checked = false;
    }
  });
});

// Smooth scroll to section when header navbar <a> is clicked
var navbarLinks = document.querySelectorAll('.navbar a');

Array.from(navbarLinks).forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    var target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// About Section Manipulation //
document.addEventListener('DOMContentLoaded', function () {
  // Simpan referensi ke elemen-elemen yang ingin diubah urutannya
  var aboutContainer = document.querySelector('.about-container');
  var aboutContent = document.querySelector('.about-content');
  var aboutImage = document.querySelector('.about-image');

  // Fungsi untuk mengubah urutan elemen
  function changeElementOrder() {
    // Hapus elemen dari dokumen
    aboutContainer.removeChild(aboutContent);
    // Tambahkan elemen kembali ke dokumen dalam urutan yang diinginkan
    aboutContainer.insertBefore(aboutContent, aboutImage.nextSibling);
  }

  // Panggil fungsi ketika halaman dimuat
  changeElementOrder();
});

var copy = document.querySelector('.tech-slide').cloneNode(true);
document.querySelector('.tech-stack').appendChild(copy);

const detailButtons = document.querySelectorAll('.detail-btn');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close');

detailButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const modalId = button.getAttribute('data-modal');
    document.getElementById(modalId).style.display = 'block';
  });
});

closeButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const modalId = button.getAttribute('data-modal');
    document.getElementById(modalId).style.display = 'none';
  });
});

window.addEventListener('click', (event) => {
  modals.forEach((modal) => {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });
});

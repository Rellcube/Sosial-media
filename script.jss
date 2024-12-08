// Menambahkan animasi saat tombol diklik
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Menambahkan kelas untuk efek klik
    button.classList.add('clicked');

    // Menghapus kelas setelah animasi selesai
    setTimeout(() => {
      button.classList.remove('clicked');
    }, 300);
  });
});

// Efek memantul saat halaman dimuat
window.addEventListener('load', () => {
  buttons.forEach((button, index) => {
    setTimeout(() => {
      button.style.transform = 'translateY(-10px)';
      button.style.transition = 'transform 0.3s ease';
      setTimeout(() => {
        button.style.transform = 'translateY(0)';
      }, 300);
    }, index * 200); // Memberikan jeda animasi untuk setiap tombol
  });
});
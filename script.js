window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  // Biar fade out halus
  loader.style.transition = "opacity 0.5s ease";
  loader.style.opacity = "0";
  
  // Setelah fade out kelar, sembunyiin loader biar gak ganggu
  setTimeout(() => {
    loader.style.display = "none";
  }, 500); // 500ms sesuai durasi transisi
});
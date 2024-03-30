const content = document.getElementById("content")
const title_content = document.getElementById("title-content");
const desc_text = document.getElementById("desc-text");
const rectangle = document.getElementById("rectangle")
const desc_img = document.getElementById("desc-img");
const button_group = document.getElementById("button-group");
const button_true = document.getElementById("button-true");
const button_false = document.getElementById("button-false");

button_true.addEventListener('click', ()=> {
  title_content.innerHTML = "Anda Berbohong!";
  desc_text.innerHTML = "Anda adalah seorang Teknisi";
  rectangle.style.backgroundColor = "#E12E2E";
  desc_img.src = "Gambar/image 3.png";
  button_group.style.display = 'none';
});

button_false.addEventListener('click', ()=> {
  title_content.innerHTML = "Anda Benar!";
  desc_text.innerHTML = "Anda adalah seorang Mahasiswa";
  rectangle.style.backgroundColor = "#6FD240"
  desc_img.src = "Gambar/image 2.png";
  button_group.style.display = 'none';
});
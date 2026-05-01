let index = 0;
showSlide(index);

function showSlide(i) {
  const slides = document.querySelectorAll(".slide");

  if (i >= slides.length) index = 0;
  if (i < 0) index = slides.length - 1;

  slides.forEach(slide => slide.style.display = "none");
  slides[index].style.display = "block";
}

document.getElementById("next").onclick = () => {
  index++;
  showSlide(index);
};

document.getElementById("prev").onclick = () => {
  index--;
  showSlide(index);
};

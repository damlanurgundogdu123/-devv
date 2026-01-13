document.addEventListener("DOMContentLoaded", () => {
  let lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.innerHTML = "<img>";
  document.body.appendChild(lightbox);

  const imgBox = lightbox.querySelector("img");

  document.querySelectorAll(".zoomable").forEach(img => {
    img.addEventListener("click", () => {
      imgBox.src = img.src;
      lightbox.style.display = "flex";
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
  });
});

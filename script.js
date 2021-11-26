var slideIndex = 0;
window.addEventListener("load", handleLoad);

function handleLoad() {
  showSlides(slideIndex);
  getActiveMenu();

  if (window.location.pathname.includes("order")) {
    const urlParams = new URLSearchParams(window.location.search);
    const backgroundImage = document.getElementsByClassName("backgroundImage");
    const image = document.createElement("img");
    const carModel = urlParams.get("car");
    if (!carModel) {
      return;
    }
    image.src = `../assets/images/${carModel}1.jpg`;
    backgroundImage[0].appendChild(image);

    const formTitle = document.getElementById("formTitle");
    formTitle.textContent = `${
      formTitle.textContent
    } - ${carModel.toUpperCase()}`;
  }
}

function getActiveMenu() {
  var i;
  const links = document.getElementsByClassName("carLink");

  for (i = 0; i < links.length; i++) {
    if (window.location.pathname.includes(links[i].id)) {
      links[i].classList.add("active");
    }
  }

  if (window.location.pathname.includes("about-us")) {
    const element = document.getElementById("aboutUs");
    element.classList.add("active");
  }
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}
function showSlides(n) {
  var i;
  const slides = document.getElementsByClassName("backgroundImage");
  if (n > slides.length) {
    console.log();
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  if (!slides.length) {
    return;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

function handleSubmitOrder() {
  alert("Solicitação enviada com sucesso!");
  window.location.replace("about-us.html");
}

function maskCPF(input) {
  const value = input.value;

  if (isNaN(value[value.length - 1])) {
    input.value = value.substring(0, value.length - 1);
    return;
  }

  input.setAttribute("maxlength", "14");
  if (value.length == 3 || value.length == 7) input.value += ".";
  if (value.length == 11) input.value += "-";
}

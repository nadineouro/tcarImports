console.log(window.location.pathname);

function handleClickMenu(element) {
  const menuItems = document.getElementsByClassName("menuItem");
  for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].classList.remove("active");
  }
  element.classList.add("active");
}

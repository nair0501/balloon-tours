const showSidebar = () => {
  const sidebar = document.querySelector(".side-bar-wrapper");
  const humburgerIcon = document.querySelector(".hamburger-menu");

  humburgerIcon.style.visibility = "hidden";
  sidebar.classList.add("side-bar-wrapper_visible");
};

const hideSidebar = () => {
  const sidebar = document.querySelector(".side-bar-wrapper");
  const humburgerIcon = document.querySelector(".hamburger-menu");

  humburgerIcon.style.visibility = "visible";
  sidebar.classList.remove("side-bar-wrapper_visible");
};

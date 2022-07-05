const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const logo = document.getElementById("logo");

const hrefs = document.querySelectorAll(".href");

//Tabs & Panels
tabs.forEach(tab => tab.addEventListener("click", (e) => {
    //Deactive All Tabs
    tabs.forEach((t) => {
      t.children[0].classList.remove(
        "border-softRed",
        "border-b-4",
        "md:border-b-0"
      );
    });

    //Hide All Panels
    panels.forEach((panel) => {
      panel.classList.add("hidden");
    });

    //Active a New Tab and Panel
    e.target.classList.add("border-softRed", "border-b-4", "md:border-b-0");

    const classString = e.target.getAttribute("data-target");
    document.getElementById("panels").getElementsByClassName(classString)[0].classList.remove("hidden");
}));

// Hamburger button listener
btn.addEventListener('click', () => {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");

  if (menu.classList.contains("flex")) {
    logo.setAttribute("src", "./images/logo-bookmark-footer.svg");
  } else {
    logo.setAttribute("src", "./images/logo-bookmark.svg");
  }
});
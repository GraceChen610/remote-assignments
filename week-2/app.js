const menubtn = document.querySelector("div.hamburger");
menubtn.addEventListener("click", e => {
    const menulist = document.querySelector("ul");
    menulist.classList.toggle("menuForJS");

});


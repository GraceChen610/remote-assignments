// Assignment 4-2: Click to Show/Close Menu.
//JS漢堡選單
const menubtn = document.querySelector("div.hamburger");
menubtn.addEventListener("click", e => {
    const menulist = document.querySelector("ul");
    menulist.classList.toggle("menuForJS");

});
const closebtn = document.querySelector("ul button");
closebtn.addEventListener("click", e => {
    
    const menulist = document.querySelector("ul");
    menulist.classList.toggle("menuForJS");

});



// Assignment 4-1: HTML DOM and Event Handling
//更換歡迎語句
const banner = document.querySelector("div.banner h1");
banner.addEventListener("click", e => {
    banner.innerHTML = "Have a Good Time!";

});

// Assignment 4-3: Click to Show More Content Boxes.
const addcontent = document.querySelector("button.btn");
addcontent.addEventListener("click", e => {    
    const newDiv = document.createElement("div");    
    newDiv.classList.add("contain");

    //自動生孩子
    for(let i = 0; i < 4 ; i++){
    const img = document.createElement("img");
    img.setAttribute("src",".//img/html.png");
    newDiv.appendChild(img);
    }

    const section = document.querySelector("section");
    section.appendChild(newDiv);
    
});
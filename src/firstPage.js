import homeContent from "./homeContent.js";
import menuContent from "./menu.js";

function home() {

const content = document.getElementById("content"); 
const mainContent = document.createElement("div");
mainContent.id = "main-content";
const header = document.createElement("div");
header.classList.add("header");
const footer = document.createElement("div");
footer.id = "footer"

/* NAVIGATION BAR */
const name = document.createElement("h1");
name.textContent = "Seal of Approval";

const links = document.createElement("ul");
links.classList.add("links");

const link1 = document.createElement("li");
link1.classList.add("li");
link1.innerHTML = "Home";

const link2 = document.createElement("li");
link2.classList.add("li");
link2.innerHTML = "Menu";

const link3 = document.createElement("li");
link3.classList.add("li");
link3.innerHTML = "Contact";

content.appendChild(mainContent);
content.insertBefore(header, mainContent);
header.appendChild(name);
header.appendChild(links);
links.appendChild(link1);
links.appendChild(link2);
links.appendChild(link3);


link1.addEventListener("click", function() {
    mainContent.innerHTML = "";
    homeContent();
})

link2.addEventListener("click", function() {
    mainContent.innerHTML = "";
    menuContent();
})
/* MAIN CONTENT AREA */
homeContent();

/* FOOTER */
footer.innerHTML = "Copyright &copy; Petteri Leino 2021";
content.appendChild(footer);
}


export default home;
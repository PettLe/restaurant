import homeContent from "./homeContent.js";

function home() {

const content = document.getElementById("content"); 
const mainContent = document.getElementById("main-content");
const header = document.createElement("div");
header.classList.add("header");

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

content.insertBefore(header, mainContent);
header.appendChild(name);
header.appendChild(links);
links.appendChild(link1);
links.appendChild(link2);
links.appendChild(link3);

/* MAIN CONTENT AREA */
/* Luo linkkeihin eventListener joka tuo jokaisen sivun sisällön tähän*/
homeContent();
/*mainContent.setAttribute("id", "main-content");*/
/*mainContent.id = "main-content";*/
}

export default home;
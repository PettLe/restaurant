
function menuContent() {
    const mainContent = document.getElementById("main-content");

    const menuDescription = document.createElement("div");
    menuDescription.id = "menuDescription";
    const p = document.createElement("p");


    let text = `HERE WE NEED ALL KINDS OF MENU THINGS BUT THIS IS JUST A TEST`;

    p.textContent = text;

    const content = document.getElementById("content");
    content.appendChild(mainContent);

    mainContent.appendChild(menuDescription);
    menuDescription.appendChild(p);

};

export default menuContent;
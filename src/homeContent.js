
import sealchef from "./img/sealchef.jpg";
function homeContent() {
    const mainContent = document.getElementById("main-content");
    const imgCont = document.createElement("div");
    imgCont.id = "imgCont";
    const sealImg = new Image();
    sealImg.src = sealchef;
    sealImg.id = "hyljekuva";

    const homeDescription = document.createElement("div");
    homeDescription.id = "homeDescription";
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");

    let text1 = `Welcome to the Seal of Approval, the restaurant for the whole family!
    Our food is deli-SEA-ous, made from the freshest of ingredients. All our meals are prepared from the scratch
    and inspected by our main chef, The Master Seal, and given the Seal of Approval!`;

    p1.textContent = text1;

    p2.innerHTML = `If fish is your dish, this is the place for you! But if it's not, not to worry! We also serve our every
    dish as a vegan version as well! And pizzas. We have a lot of them.`;

    p3.textContent = "Circa 2021";

    const content = document.getElementById("content");
content.appendChild(mainContent);

    mainContent.appendChild(imgCont);
    imgCont.appendChild(sealImg);
    mainContent.appendChild(homeDescription);
    homeDescription.appendChild(p1);
    homeDescription.appendChild(p2);
    homeDescription.appendChild(p3);

};

export default homeContent;
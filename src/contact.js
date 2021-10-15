import contact from "./img/contact2.jpg";

function contactContent() {
    const mainContent = document.getElementById("main-content");
    const contactImg = new Image();
    contactImg.src = contact;
    contactImg.id = "contactImg";

    const contactDescription = document.createElement("div");
    contactDescription.id = "contactDescription";
    const p = document.createElement("p");
    const contactInfo = document.createElement("p");

    p.textContent = "You can find us from Tropical Arctic Mystery Island, 00011 Ocean Drive!"
    contactInfo.textContent = "Open every day, 7a.m. - 9p.m. Questions? Call 045-XXXXXX9!"

    contactDescription.appendChild(contactImg);
    contactDescription.appendChild(p);
    contactDescription.appendChild(contactInfo);
    mainContent.appendChild(contactDescription);
}

export default contactContent;
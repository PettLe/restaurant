import seaweed from "./img/seaweed.jpg";
import fish from "./img/fish.jpg";
import pizzamenu from "./img/pizzamenu.jpg";
import cake from "./img/cake2.jpg";

function menuContent() {

    const mainContent = document.getElementById("main-content");

    const menuDescription = document.createElement("div");
    menuDescription.id = "menuDescription";


    (function renderFoods() {
     const foodNames = ["Epic Seaweed Bowl", "Magnificent Fish", "The Pizza", "Wonderful Cake"]
     const foodDescs = ["This Vegan dish tastes awesome, taste the sea! 0,99 SealCoins!", "Don't let this delicious chance swim away. 1,5 SealCoins",
    "Four toppings, totally up to you. 1,4 SealCoins", "Cake. There always needs to be cake. 0,75 SealCoins"];
    const foodPics = [seaweed, fish, pizzamenu, cake];
    
    for (let i = 0; i < foodNames.length; i++) {
        const foodName = document.createElement("h2");
        const foodDesc = document.createElement("p");
        const foodPic = new Image();
        foodPic.classList.add("foodPic");

        const hr = document.createElement("p");
        foodName.dataset.index = i;
        foodDesc.dataset.index = i;
        foodPic.dataset.index = i;
        hr.dataset.index = i;

       foodName.textContent = foodNames[i];
       foodPic.src = foodPics[i];
       foodDesc.textContent = foodDescs[i];
       hr.innerHTML = "<hr>";

       menuDescription.appendChild(foodName);
       menuDescription.appendChild(foodPic);
       menuDescription.appendChild(foodDesc);
       menuDescription.appendChild(hr);
       mainContent.appendChild(menuDescription);
       
       
    }
    })();
//renderFoods();
};

export default menuContent;

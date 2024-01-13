const container = document.getElementById("cardsContainer");
let button = document.getElementById("addButton");
let nameInput = document.getElementById("cardMain");
let classInput = document.getElementById("cardAdd");

let cards = [["Example1", "Example2"], ["Example3", "Example4"]];

function displayCards() {

    container.innerHTML = '';
    for (let i = 0; i < cards.length; i++) {
        let classDiv = document.createElement("div");

        classDiv.className = "cssCard"
        if (cards[i]) {
            classDiv.innerHTML = `<h3>${cards[i][0]}</h3><p>${cards[i][1]}</p><button id="deleteButton" data-idcard="${i}"><img src="delete.png"></button>`;

            container.appendChild(classDiv);

            let deleteButton = cardsContainer.querySelector(`[data-idcard="${i}"]`)
            deleteButton.addEventListener("click", function () { delete cards[deleteButton.dataset.idcard]; displayCards() })
        }
    }
}

function addCard() {

    if (nameInput.value.trim() && classInput.value.trim()) {
        cards.push([nameInput.value, classInput.value]);
        displayCards();

        nameInput.value = "";
        classInput.value = "";
    }
    //   else {
    //    alert("Пожалуйста, введите значения!");
    // }

}

displayCards();

document.getElementById("addButton").addEventListener("click", addCard);
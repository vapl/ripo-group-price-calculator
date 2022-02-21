const input = document.querySelector("[data-input]");
const materialThicknessInput = document.querySelector("[data-select]");
const calculationButton = document.querySelector("[data-calculation-button]");
const div = document.querySelector(".button-1")


let h3 = document.createElement("h3");


let data = [
    { group: "A grupa", thc: "10mm", price: [45, 63.99] },
    { group: "A grupa", thc: "16mm", price: [35, 63.99] },
    { group: "A grupa", thc: "18mm", price: [35, 38.99] },
    { group: "A grupa", thc: "25mm", price: [74, 85.99] },
    { group: "A grupa", thc: "38mm", price: [102, 107.99] },

    { group: "B grupa", thc: "10mm", price: [64, 82.99] },
    { group: "B grupa", thc: "18mm", price: [39, 88.99] },
    { group: "B grupa", thc: "25mm", price: [86, 103.99] },
    { group: "B grupa", thc: "38mm", price: [108, 137.99] },

    { group: "C grupa", thc: "10mm", price: [83, 112.99] },
    { group: "C grupa", thc: "18mm", price: [89, 118.99] },
    { group: "C grupa", thc: "25mm", price: [104, 133.99] },
    { group: "C grupa", thc: "38mm", price: [138, 145.99] },
]

// rendering h3 element
const addH3Element = (group) => {
    
    h3.innerText = group;
    const parrent = document.querySelector("[data-parrent]");
    parrent.append(h3);
}

// alert info
const alertInfo = () => {

    if (document.querySelector(".alert-custom")) {return}

    let alertP = document.createElement("p");
    alertP.innerText = "Nav ievadīta cena vai izvēlēts materiāla biezums!"
    alertP.classList.add("alert-custom");
    div.append(alertP);

}

// alert remove
const alertRemove = () => {
    let p = document.querySelector(".alert-custom");
    let h3 =document.querySelector("h3");
    if (p) {
        p.remove();
    } 
}

const h3Remove = () => {
    let h3 =document.querySelector("h3");
    if (h3) {
        h3.remove();
    } 
}

input.addEventListener("keyup", h3Remove);


// Calculation
let calculation = (price, thickness) => {

    data.filter(object => {
        if (object.thc === thickness && price >= object.price[0] && price <= object.price[1]) {
            return addH3Element(object.group);
        } else {
        }
    })
};

// event listener for Enter key
input.addEventListener("keyup", (e) => {
    if (e.keyCode === 13 && input.value !== "" && 
        materialThicknessInput.value !== "Izvēlies materiāla biezumu") {
        calculation(input.value, materialThicknessInput.value);
        alertRemove();
    } else if (input.vlaue === "") {
        alertInfo();
    }
    
});

// event listener for button click
calculationButton.addEventListener("click", () => {
    if (input.value !== "" && materialThicknessInput.value !== "Izvēlies materiāla biezumu") {        
        calculation(input.value, materialThicknessInput.value);
        alertRemove();
    } else {
        alertInfo();
    }
    
});
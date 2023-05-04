const cards = document.querySelectorAll(".food-card");
const taxPrice = document.getElementById("tax");
const bill = document.getElementById("bill");
const modal = document.getElementById("modal");
const saveOrderBtn = document.getElementById("saveOrder");

// console.log(cards)

saveOrderBtn.addEventListener("click", () => {
    showModal();
})


cards.forEach(card => {
    calculatePrice(card);
    // console.log(card);
})

function calculatePrice(card) {
    let price = +card.querySelector(".price").textContent;
    // console.log(price)
    let totalPrice = card.querySelector(".totalPrice");
    let addBtn = card.querySelector(".add-btn");
    let minusBtn = card.querySelector(".minus-btn");
    let count = card.querySelector(".count");



    addBtn.addEventListener("click", () => {

        count.textContent = +count.textContent + 1

        totalPrice.textContent = (+count.textContent) * price;

        sumTotalPrice();
    })


    minusBtn.addEventListener("click", () => {

        count.textContent = +count.textContent - 1

        totalPrice.textContent = (+count.textContent) * price;

        sumTotalPrice();
    })
}




function sumTotalPrice() {
    let totalPrices = document.querySelectorAll("#menu .totalPrice");
    let totalOrdersPrice = document.getElementById("totalOrdersPrice");
    console.log(totalPrices);

    let sumPrices = 0;

    totalPrices.forEach(price => {
        sumPrices += +price.textContent;
    })

    totalOrdersPrice.textContent = sumPrices;

    calcTax(sumPrices);
}



function calcTax(sum) {
    taxPrice.textContent = (0.05 * sum);

    calcBill();

}



function calcBill() {
    bill.textContent = +taxPrice.textContent + +totalOrdersPrice.textContent;
}

function showModal() {
    modal.classList.remove("d-none");
    setTimeout(() => {
        modal.classList.add("d-none")
    }, 5000)

}

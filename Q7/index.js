const btn = document.getElementById("btn");
const openList = document.getElementById("list");

btn.addEventListener("click", () => {

    openList.classList.toggle("close")
    openList.classList.toggle("open")

})
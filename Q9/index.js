const content = document.querySelector(".content");

let tooltip;

content.addEventListener("mouseover", (e) => {
    tooltip = e.target.previousElementSibling;
    tooltip.style.display = "flex"
    tooltip.classList.add("tooltip-shape-bottom")
})

content.addEventListener("mouseout", (e) => {
    e.target.previousElementSibling.style.display = "none"
})



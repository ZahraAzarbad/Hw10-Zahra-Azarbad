const messages = document.querySelectorAll(".list li");

const closeBtns = document.getElementsByClassName("close");

messages.forEach(li => {
    li.appendChild(close());
})

function close() {
    const closeIcon = document.createElement("div")
    closeIcon.textContent = '[X]'
    closeIcon.classList.add("close");
    return closeIcon;
}



Array.from(closeBtns).forEach(close => {
    close.addEventListener("click", (e) => {
        e.target.closest("li").remove()
    });
});




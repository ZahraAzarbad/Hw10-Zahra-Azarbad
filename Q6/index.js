const btn = document.getElementById("hider");
const text = document.getElementById("text");

btn.addEventListener("click", (e) => {

    text.style.visibility = "hidden";
    setTimeout(() => {
        e.target.style.visibility = "hidden"
    }, 1000);

})
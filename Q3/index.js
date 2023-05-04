const userlist = document.getElementById("list");

let clickedEsc = false;
let putContant;


function List() {

    do {
        putContant = prompt("Please Enter data list");

        if (checkfunc(putContant)) {
            creatList(putContant);
        }

    } while (checkfunc(putContant));


}

function creatList(content) {
    let li = document.createElement("li");
    li.textContent = content;
    userlist.appendChild(li);
}


function checkfunc(info) {
    return (info != "" && info != " ") && putContant && !clickedEsc;
}

function putEsc() {
    document.addEventListener("keydown", (e) => {
        if (e.code === 'Escape') clickedEsc = true;
    })
}


putEsc();

List()

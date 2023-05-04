const setElement = document.querySelector(".container")


let info = {
    "Fish": {
        "trout": {},
        "salmon": {}
    },
    "Tree": {
        "Huge": {
            "sequoia": {},
            "oak": {}
        },
        "Flowering": {
            "apple tree": {},
            "magnolia": {}
        }
    }
}

makeList(setElement, info)

function makeList(container, info) {

    const makeUl = document.createElement("ul");

    for (const [title, children] of Object.entries(info)) {
        listMaker(makeUl, title)

        if (Object.keys(children).length) {
            makeList(makeUl, children);
        }

    }


    container.appendChild(makeUl)

}


function listMaker(ul, content) {
    let li = document.createElement("li");
    li.textContent = content;
    ul.appendChild(li);
}
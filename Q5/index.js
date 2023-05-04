const elem = document.getElementById("elem")



function clear(elemnt) {

    while (elemnt.firstChild) {
        elemnt.removeChild(elemnt.firstChild);
    }

}

clear(elem);
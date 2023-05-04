const links = document.querySelectorAll("#links a");

let address;

const url = 'http://internal.com';

links.forEach(link => {

    address = link.getAttribute("href")

    if (address.includes("://") && Domain(address) !== url)
        link.style.color = "orange"


})



function Domain(url) {
    return url.split(/(?<=[a-z])\//)[0]
}
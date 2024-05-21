



const allP = document.querySelectorAll("p > strong");


allP.forEach(p => {
    const ul = p.parentNode.nextSiblingElement;
    ul.childNodes.forEach(li => {
        console.log(li.textContent)
    })
})
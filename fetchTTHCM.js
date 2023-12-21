
const isAns = (el) => {
    if(el.style.color === 'red') return true;
    if(el.style.background === 'yellow') return true;

    return false;
}

const isHeading = (el) => {
    if(el.style.color === 'rgb(0, 176, 80)') return true;
    return false;
}

const isPartial = (el) => {
    if(el.style.color === 'rgb(0, 112, 192)') return true;
    return false;
}

const formatText = (text) => {
    // Replace multiple spaces with single space
    let newText = text.trim().split(/[\s]+/).join(' ');
    
    // Display the result
    return newText
}


let obj = {
    no: "",
    ques: "",
    choices: [],
    ans: "",
}

let reset = {
    no: "",
    ques: "",
    choices: [],
    ans: "",
}

const questions = [];
let heading = 0;
let noQues = 0, noAns = 0;

var allRows = document.querySelectorAll("tr");

allRows.forEach( tr => {

    var td = tr.querySelectorAll("td")[1];
    var all = td.querySelectorAll("p");

    all.forEach(p => {
        let text = formatText(p.textContent);
        if(text.includes("???")) return;
        if(noQues % 5 === 0) {
            if(obj.ques !== "") {
                questions.push(obj);
            }
            obj = {
                no: "",
                ques: "",
                choices: [],
                ans: "",
            };
            obj.ques = text;
            obj.no = noQues / 5 + 1;
        } else {
            text = formatText(text.slice(text.indexOf(".") + 1));
            obj.choices.push(text);
            p.querySelectorAll("span").forEach(span => {
                if(span.style.color === "red" || span.style.color === "black" || span.parentNode.tagName === "B") {
                    // console.log(span.parentNode.tagName)
                    obj.ans = text;
                    noAns++;
                }
            });
        }

        noQues++;
    });

});

// obj.no = noQues;
// questions.push(obj);
console.log(noQues/5 +1, noAns);
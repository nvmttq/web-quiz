
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
    let newText = text.trim().split(/[\s,\t,\n]+/).join(' ');
    
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
var all = document.querySelectorAll(".MsoListParagraph");

all.forEach(p => {
    const split = p.textContent.split(".");
    const slice = p.textContent.slice(p.textContent.indexOf(".") + 1);
    const text = formatText(slice);
    const num = parseInt(split[0]);

    if((num-1) % 5 === 0) {
        if(noQues > 0) {
            questions.push(obj);
        }
        obj = {
            no: "",
            ques: "",
            choices: [],
            ans: "",
        };
        noQues++;
        obj.ques = text;
        obj.no = noQues;
    } else {
        obj.choices.push(text);

        let isAns = false;
        p.querySelectorAll("span").forEach(span => {
            if(span.style.color === "red") {
                obj.ans = text;
                noAns++;
            }
        });
    }
});

obj.no = noQues;
questions.push(obj);
console.log(noQues, noAns);
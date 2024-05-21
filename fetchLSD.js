const ps = document.querySelectorAll("p")

function containAnswer(arr) {
    return arr.filter(text => text.toLowerCase().includes("answer"))
}
const questions = []

let num = 0
let ques = {
    no: "",
    correctId: "",
    text: "",
    choices: [],
}
ps.forEach(p => {
    if(!p || !p.innerText) return
    const text = p.innerText;
    if(text.trim() === "") return;
    const arr = text.split("\n");
    // console.log(arr)
    const answer = containAnswer(arr);
    if(answer.length > 0) {
        ques.correctId = answer[0].replace("ANSWER:", "").trim()
        ques.choices.push(arr[0])
        questions.push(ques);
        ques = {
            no: "",
            correctId: "",
            text: "",
            choices: [],
        }

        if(arr.length > 1) num++;
    } else {
        if(num % 5 === 0) ques.text = text.slice(text.indexOf(".") + 1).trim();
        else ques.choices.push(text);
        num++;
    }
    
})
console.log(questions)

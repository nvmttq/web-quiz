const formatText = (text) => {
  // Replace multiple spaces with single space
  let newText = text.trim().split(/[\s]+/).join(" ");

  // Display the result
  return newText;
};

let obj = {
  no: "",
  ques: "",
  choices: [],
  ans: "",
};

let reset = {
  no: "",
  ques: "",
  choices: [],
  ans: "",
};

const questions = [];
let heading = 0;
var noQues = 0,
  noAns = 0;
var all = document.querySelectorAll("body div > p");

all.forEach((p) => {
  const split = p.textContent.split(".");
  const slice = p.textContent.slice(p.textContent.indexOf(".") + 1);
  const text = formatText(slice);
  if(text === "") return;
  if (noQues % 5 === 0) {
    if (noQues > 0) {
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
    noQues++;
} else {
    obj.choices.push(text);

    let isAns = false;
    p.querySelectorAll("span").forEach((span) => {
      if (span.style.color === "red") {
        obj.ans = text;
        noAns++;
      }
    });
    noQues++;
  }

});

obj.no = noQues / 5 + 1;
questions.push(obj);
console.log(noQues, noAns);

let result_question = [];
let ans = [];
var obj = {
  ques: "",
  choices: [],
  correct: "",
};

function changeAndRemoveSpace(string) {
  string = string.replaceAll("\n", " ");

  return string.replace(/\s+/g, " ").trim();
}

function getChoice() {
  var all = document.querySelectorAll(".Style1");

  let cnt = 0;
  all.forEach(async (a) => {
    var z = changeAndRemoveSpace(a.textContent);
    if (z.length > 6) {
        //console.log(z,z.length)
      cnt++;
      
      var string_ans = "";
      a.childNodes.forEach((child) => {
        child.childNodes.forEach(c => {
          if (
            c.style.backgroundColor.includes("253")
          ) {
            obj.correct = z;
            //console.log(z)
          }
        })
      });
      if(cnt === 1) {
        obj.ques = z;
        
      }
      else obj.choices.push(z);

      if(cnt === 5) {
        cnt = 0;
        result_question.push(obj);
        //console.log(obj)
        obj = {
          ques: "",
          choices: [],
          correct: "",
        };
        //  console.log(obj)
      }
    }
    // console.log(JSON.stringify(a.textContent));
  });
  console.log(result_question);
}

getChoice();


// function getAnswer() {

//   var all = document.querySelectorAll(".Style1");
//   var obj_text = 0;
//   all.forEach(a => {
//     var z = changeAndRemoveSpace(a.textContent);
//   //  console.log(z);
//     if(z.length > 6) {
//       a.childNodes.forEach((child) => {
//         child.childNodes.forEach(c => {
//           if (
//             c.style.backgroundColor.includes("253")
//           ) {
//             obj_text = 1;
//             //console.log(z)
//           }
//         })
//       });
//       if(obj_text === 1) ans.push(z);
//       obj_text = 0;
//     }
//   });
//   console.log(ans)
// };

// getAnswer()



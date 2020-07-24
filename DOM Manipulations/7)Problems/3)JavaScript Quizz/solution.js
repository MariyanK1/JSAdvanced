/*
There are three sections that contain one question and 2 possible answers. 
The right answer is only one! 
When one of the list elements is clicked, the next section must appear (if any…).
After all three questions have been answered, the result div must appear. (Use 'none' and 'block' to hide and show the question sections)
If all questions are answered correctly, you should prin the following message: 
"You are recognized as top JavaScript fan!"
Otherwise, just print "You have {rightAnswers} right answers".
The right answers are (onclick, JSON.stringify() and A programming API for HTML and XML documents).

*/

function solve() {
  let quizzie = document.getElementById('quizzie');
  let sections = document.getElementsByTagName('section');
  let result = document.querySelector(".results-inner h1");

  let correctAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
  let userAnswers = 0;
  let currentStep = 0;

  const handler = (e) => {
    if (e.target.className === 'answer-text') {
      sections[currentStep].style.display = "none";
      let isCorrectAnswer = correctAnswers.includes(e.target.innerHTML);
      if (isCorrectAnswer) {
        userAnswers++;
      }
      currentStep++;

      if (currentStep < correctAnswers.length) {
        sections[currentStep].style.display = "block";
      }

      if (currentStep === correctAnswers.length) {
        quizzie.removeEventListener('click', handler);
        document.querySelector("#results").style.display = "block";
        result.innerHTML = correctAnswers.length === userAnswers ?
          "You are recognized as top Javascript fan!" : `You have ${userAnswers} right answers`
      }
    }
  }
  quizzie.addEventListener('click', handler)
}

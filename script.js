const quizData = [
    {
      question: "Which is a hobby Bre enjoys?",
      options: ["Gaming", "Running", "Knitting"],
      answer: "Gaming"
    },
    {
      question: "What is an ideal evening for Bre?",
      options: ["Ordering pasta and playing video games", "Entering a 5K", "Researching snakes"],
      answer: "Ordering pasta and playing video games"
    },
    {
        question: "What is the name of Bre's only cat?",
        options: ["Fluffball", "Ralph", "MeeMow"],
        answer: "MeeMow"
      }
    // Add more questions here...
  ];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
  
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
  
    if (selectedButton.innerText === answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quiz.innerHTML = `
      <h1>Quiz Completed!</h1>
      <p>Your score: ${score}/${quizData.length}</p>
    `;
  }
  
  showQuestion();
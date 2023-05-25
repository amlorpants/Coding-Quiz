var rootEl = $('#root');
var startButtonEl = $('#start-btn');
var questionEl = $('#question-div');
var answerListEl = $('#answer-list');
var quizHeaderEl = $('#quiz-header');
var topBarSectionEl = $('#top-bar-section');
var highscoresButtonEl = $('#highscores-btn');
var quizEndEl = $('#quiz-end-section');
var answerChoiceEl = $('answerChoice');
var time = 60 * 100;
var timerEl = $('#timer');

const questions = [
  {
    question: 'commonly used data types do not include:',
    answers: ['String', 'Boolean', 'Alert', 'Numbers'],
    correctAnswer: 2,
    userAnswer: null,
  },
  {
    question:
      'Which operator is used for strict equality comparison in JavaScript?',
    answers: ['==', '===', '!=', '!=='],
    correctAnswer: 1,
    userAnswer: null,
  },
  {
    question:
      'What is the correct way to check if a variable is an array?',
    answers: [
      'typeof variable === "array"',
      'variable instanceof Array',
      'Array.isArray(variable)',
      'variable.isArray()',
    ],
    correctAnswer: 2,
    userAnswer: null,
  },
  {
    question:
      'What is the purpose of the map function in JavaScript?',
    answers: [
      'To iterate over an array and modify each element',
      'To remove elements from an array',
      'To filter elements based on a condition',
      'To check if an element exists in an array',
    ],
    correctAnswer: 0,
    userAnswer: null,
  },
  {
    question:
      'What is the result of the following expression: 3 + "2"?',
    answers: ['5', '32', 'Error', 'NaN'],
    correctAnswer: 1,
    userAnswer: null,
  },
];

function renderAnswers(answers) {
  answerListEl.empty();

  $.each(answers, function (index, answer) {
    var li = $('<li></li>');
    var button = $('<button></button>').text(answer);
    li.append(button);
    li.attr('id', 'answerChoice' + index);
    li.attr('class', 'answerChoice');

    answerListEl.append(li);
  });
}

function onStart() {
  console.log('i started');
}

function hideElement(elementName) {
  elementName.addClass('hidden');
}

function showHiddenElement(elementName) {
  elementName.removeClass('hidden');
}

startButtonEl.on('click', function () {
  hideElement(startButtonEl);
  hideElement(quizHeaderEl);
  hideElement(quizEndEl);
  showHiddenElement(topBarSectionEl);
  renderQuestionAndAnswers(questions[0]);
  timerEl.text(time / 100);
});

// make the quiz-end-section show
function onQuestionsEnd() {
  console.log('end of questions');
}

// on click - answers show right or wrong answer chosen THEN move onto next question
var currentQuestionNumber = 1;
answerListEl.on('click', function () {
  var isLastQuestion = questions.length <= currentQuestionNumber;

  if (isLastQuestion) {
    onQuestionsEnd();
    return;
  }
  // if wrong answer chosen, time on clock goes down

  renderQuestionAndAnswers(questions[currentQuestionNumber]);
  currentQuestionNumber++;
});

// make a function that renders the question and answers list with a question object as a prop
function renderQuestionAndAnswers(question) {
  questionEl.text(question.question);
  renderAnswers(question.answers);
}

// function that starts the timer

// function that subtracts from timer on wrong answers

onStart();

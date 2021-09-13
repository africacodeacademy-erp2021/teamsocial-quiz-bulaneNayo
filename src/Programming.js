import React, { useState } from "react";

function Programming() {
  const Name = JSON.stringify(localStorage.getItem("Current"));
  const user = Name.replace('"', "");
  const username = user.replace('"', "");

  let questions = [
    {
      questionText: "Which of the following is a scripting language?",
      answerOptions: [
        { answerText: "Typescript", isCorrect: false },
        { answerText: "Java", isCorrect: false },
        { answerText: "Javascript", isCorrect: true },
        { answerText: "Angular", isCorrect: false },
      ],
    },
    {
      questionText: "Which command is used to create a react app?",
      answerOptions: [
        { answerText: "npm install appname", isCorrect: false },
        { answerText: "npx create-react-app appname", isCorrect: true },
        { answerText: "npm audit fix", isCorrect: false },
        { answerText: "yarn install appname", isCorrect: false },
      ],
    },
    {
      questionText: "Which language is used to buid the UI in android?",
      answerOptions: [
        { answerText: "java", isCorrect: false },
        { answerText: "XML", isCorrect: true },
        { answerText: "React", isCorrect: false },
        { answerText: "Javascrit", isCorrect: false },
      ],
    },
    {
      questionText:
        "Which statement is compulsory in order to work with inputs outputs in C++? ",
      answerOptions: [
        { answerText: "npm install io", isCorrect: false },
        { answerText: "using namespace std;", isCorrect: false },
        { answerText: "cout <<", isCorrect: false },
        { answerText: "#include<iostream>", isCorrect: true },
      ],
    },
    {
      questionText: "JavaScript is ______ Side scripting language. ",
      answerOptions: [
        { answerText: "Server", isCorrect: false },
        { answerText: "Client", isCorrect: false },
        { answerText: " ISP", isCorrect: false },
        { answerText: "Browser", isCorrect: true },
      ],
    },
    {
      questionText:
        "  ______ tag is an extension to HTML that can enclose any number of JavaScript statements. ",
      answerOptions: [
        { answerText: "<BODY>", isCorrect: false },
        { answerText: "<TITLE>", isCorrect: false },
        { answerText: " <HEAD>", isCorrect: false },
        { answerText: "<SCRIPT>", isCorrect: true },
      ],
    },
    {
      questionText:
        ' What is the correct syntax for referring to an external script called " abc.js"? ',
      answerOptions: [
        { answerText: '<script src=" abc.js">', isCorrect: true },
        { answerText: ' <script href=" abc.js">', isCorrect: false },
        { answerText: ' <script name=" abc.js">', isCorrect: false },
        { answerText: "None of the above", isCorrect: false },
      ],
    },
    {
      questionText:
        " Using _______ statement is how you test for a specific condition. ",
      answerOptions: [
        { answerText: "Switch", isCorrect: false },
        { answerText: " For", isCorrect: false },
        { answerText: " Select", isCorrect: false },
        { answerText: " If", isCorrect: true },
      ],
    },
    {
      questionText:
        " The JavaScript exception is available to the Java code as an instance of _______.",
      answerOptions: [
        { answerText: "netscape.javascript.JSObject", isCorrect: false },
        { answerText: "netscape.javascript.JSException", isCorrect: true },
        { answerText: "netscape.plugin.JSException", isCorrect: false },
        { answerText: " None of the above", isCorrect: false },
      ],
    },
    {
      questionText: " Which data structre stores unique values",
      answerOptions: [
        { answerText: "Linked List", isCorrect: false },
        { answerText: "Sets", isCorrect: true },
        { answerText: "Arrays", isCorrect: false },
        { answerText: " Stack", isCorrect: false },
      ],
    },
  ];

  const [option, setOption] = useState();
  const [selected_num, setSelected_num] = useState(10);
  const [random, setRandom] = useState(questions);

  function shuffle_questions(array) {
    var number = array.length,
      temp,
      index;
    while (number > 0) {
      index = Math.floor(Math.random() * number);
      number--;

      temp = array[number];
      array[number] = array[index];
      array[index] = temp;
    }
    return array;
  }

  function optionChange(event) {
    setOption(event.target.value);
    setSelected_num(event.target.value);

    if (selected_num === 5) {
      shuffle_questions(questions);
      questions.splice(5, 5);
      let temp = questions;
      setRandom(temp);
      console.log(temp)

    } else if (selected_num === 7) {
      shuffle_questions(questions);
      questions.splice(7, 3);
      let temp = questions;
      setRandom(temp);
      
    } else {
      shuffle_questions(questions);
      questions.splice(10, 10);
      let temp = questions;
      setRandom(temp);
    }

    return selected_num;
  }

  const spacing = " ";
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuetions = currentQuestion + 1;

    if (nextQuetions < selected_num) {
      setCurrentQuestion(nextQuetions);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="categories-div">
      <h1>Programming</h1>
      <p>Current Player : {username}</p>

      <div className="app">
        {showScore ? (
          <div className="score-section">
            <p>
              {spacing}
              {username} you scored {score} out of {selected_num} questions
            </p>
          </div>
        ) : (
          <div>
            <div className="question-section">
              <div className="question-count">
                <p>
                  <label htmlFor="no-of-questions">
                    Choose number of questions :
                  </label>
                  {spacing}
                  <select name="no-of-questions" onChange={optionChange}>
                    <option value="10">All</option>
                    <option value="5">5</option>
                    <option value="7">7</option>
                  </select>
                </p>

                <span className="Question">Question {currentQuestion + 1}</span>
              </div>
              <div className="question-text">
                {random[currentQuestion].questionText}
              </div>
            </div>

            <div className="answers">
              {random[currentQuestion].answerOptions.map((answerOptions) => (
                <button
                  onClick={() =>
                    handleAnswerButtonClick(answerOptions.isCorrect)
                  }
                  className="answers-btn"
                >
                  {answerOptions.answerText}
                </button>
              ))}
            </div>
          </div>
        )}
        <button className="btn1">Choose another category</button>
      </div>
    </div>
  );
}
export default Programming;

import React, { useState } from "react";

function Sports() {
  const Name = JSON.stringify(localStorage.getItem("Current"));
  const user = Name.replace('"', "");
  const username = user.replace('"', "");

  const questions = [
    {
      questionText: "Steve Kompela is currently coaching Bafana Bafana?",
      answerOptions: [
        { answerText: "False", isCorrect: true },
        { answerText: "True", isCorrect: false },
      ],
    },
    {
      questionText: "Kaizer Chiefs has never won in PSL Leaque",
      answerOptions: [
        { answerText: "False", isCorrect: true },
        { answerText: "True", isCorrect: false },
      ],
    },
    {
      questionText: "Which team does Messi play for now?",
      answerOptions: [
        { answerText: "Chiefs", isCorrect: false },
        { answerText: "Sundowns", isCorrect: false },
        { answerText: "Barcelona", isCorrect: true },
        { answerText: "Real Madrid", isCorrect: false },
      ],
    },

    {
      questionText: "Which counry is hosting Olympics 2020?",
      answerOptions: [
        { answerText: "China", isCorrect: false },
        { answerText: "Japan", isCorrect: true },
        { answerText: "Brazil", isCorrect: false },
        { answerText: "Lesotho", isCorrect: false },
      ],
    },
    {
      questionText:
        "What is the name of the national football team in Lesotho?",
      answerOptions: [
        { answerText: "Bakoena FC", isCorrect: false },
        { answerText: "Likoena FC", isCorrect: true },
        { answerText: "Lesotho FC", isCorrect: false },
        { answerText: "Basotho FC", isCorrect: false },
      ],
    },
    {
      questionText: "What does jersy no.4 mean in in football?",
      answerOptions: [
        { answerText: "Striker", isCorrect: false },
        { answerText: "central defender", isCorrect: true },
        { answerText: "Captain", isCorrect: false },
        { answerText: "Goal keeper", isCorrect: false },
      ],
    },
    {
      questionText:
        "What is the name of the national football team in Lesotho?",
      answerOptions: [
        { answerText: "Bakoena FC", isCorrect: false },
        { answerText: "Likoena FC", isCorrect: true },
        { answerText: "Lesotho FC", isCorrect: false },
        { answerText: "Basotho FC", isCorrect: false },
      ],
    },
    {
      questionText: "Which team does Itumeleng Khune play for?",
      answerOptions: [
        { answerText: "Barcelona", isCorrect: false },
        { answerText: "Kaizer Chiefs", isCorrect: true },
        { answerText: "Pirates", isCorrect: false },
        { answerText: "Arsenal", isCorrect: false },
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

    <div categories-div>
    
      <h2 className='header'>Sports</h2>

    <div className="categories-div">
      <h1>Sports</h1>

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

export default Sports;

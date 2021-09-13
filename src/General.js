import React, { useState } from "react";

function General() {
  const Name = JSON.stringify(localStorage.getItem("Current"));
  const user = Name.replace('"', "");
  const username = user.replace('"', "");

  const questions = [
    {
      questionText: "What is the best thing to do before cooking?",
      answerOptions: [
        { answerText: "Start fire", isCorrect: false },
        { answerText: "Wash hands", isCorrect: true },
        { answerText: "Wash utensils", isCorrect: false },
        { answerText: "Prepare ingredients", isCorrect: false },
      ],
    },
    //second question
    {
      questionText: "Who is the founder of Amozon?",
      answerOptions: [
        { answerText: "Bulane Naeo", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: false },
        { answerText: "Jeff Bezos", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
      ],
    },
    //third question
    {
      questionText: "Botho University is found only in Botswana",
      answerOptions: [
        { answerText: "False", isCorrect: true },
        { answerText: "True", isCorrect: false },
      ],
    },
    //fourth question
    {
      questionText: "Which country heavily produces marijuana?",
      answerOptions: [
        { answerText: "Botswana", isCorrect: false },
        { answerText: "Lesotho", isCorrect: false },
        { answerText: "Jamaica", isCorrect: true },
        { answerText: "China", isCorrect: false },
      ],
    },
    //fitfh question
    {
      questionText: "Which country the most populated in the world?",
      answerOptions: [
        { answerText: "India", isCorrect: false },
        { answerText: "Indonesia", isCorrect: false },
        { answerText: "China", isCorrect: true },
        { answerText: "Somalia", isCorrect: false },
      ],
    },
    //sixth question
    {
      questionText: "Queen Elizabeth II disowned Prince Harry",
      answerOptions: [
        { answerText: "False", isCorrect: true },
        { answerText: "True", isCorrect: false },
      ],
    },
    //seventh question
    {
      questionText: "Lesotho exports wool and mohair",
      answerOptions: [
        { answerText: "True", isCorrect: true },
        { answerText: "False", isCorrect: false },
      ],
    },
    //eighth question
    {
      questionText: "Which of the following gases make water when combined?",
      answerOptions: [
        { answerText: "H and He", isCorrect: false },
        { answerText: "O2 and Co2", isCorrect: false },
        { answerText: "H and O2", isCorrect: true },
        { answerText: "Co2 and H", isCorrect: false },
      ],
    },
    //nineth question
    {
      questionText: "Who is the narrator in money heist?",
      answerOptions: [
        { answerText: "Bogota", isCorrect: false },
        { answerText: "Tokyo", isCorrect: true },
        { answerText: "Nairobi", isCorrect: false },
        { answerText: "Lesbon", isCorrect: false },
      ],
    },
    //tenth question
    {
      questionText: "How many children does Khris Jenner have?",
      answerOptions: [
        { answerText: "2", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "3", isCorrect: false },
        { answerText: "6", isCorrect: true },
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
    <div className="categories-div">
      <h1>General Knowledge</h1>
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

export default General;

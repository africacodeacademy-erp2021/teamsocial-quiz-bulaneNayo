import React, { useState } from 'react';


 function General() {
  const Name= JSON.stringify(localStorage.getItem('Current'))
  const user = Name.replace('"','');
  const username = user.replace('"','');
  
  const questions = [
   
    //first question
    {
      questionText: 'What is the best thing to do before cooking?',
      answerOptions: [
        { answerText: 'Start fire', isCorrect: false },
        { answerText: 'Wash hands', isCorrect: true },
        { answerText: 'Wash utensils', isCorrect: false },
        { answerText: 'Prepare ingredients', isCorrect: false },
      ],
    },
    //second question
    {
      questionText: 'Who is the founder of Amozon?',
      answerOptions: [
        { answerText: 'Bulane Naeo', isCorrect: false },
        { answerText: 'Elon Musk', isCorrect: false },
        { answerText: 'Jeff Bezos', isCorrect: true },
        { answerText: 'Bill Gates', isCorrect: false },
      ],
    },
    //third question
    {
      questionText: 'Botho University is found only in Botswana',
      answerOptions: [
        
        { answerText: 'False', isCorrect: true },
        { answerText: 'True', isCorrect: false },
      ],
    },
    //fourth question
    {
      questionText: 'Which country heavily produces marijuana?',
      answerOptions: [
        { answerText: 'Botswana', isCorrect: false },
        { answerText: 'Lesotho', isCorrect: false },
        { answerText: 'Jamaica', isCorrect: true },
        { answerText: 'China', isCorrect: false },
      ],
    },
    //fitfh question
    {
      questionText: 'Which country the most populated in the world?',
      answerOptions: [
        { answerText: 'India', isCorrect: false },
        { answerText: 'Indonesia', isCorrect: false },
        { answerText: 'China', isCorrect: true },
        { answerText: 'Somalia', isCorrect: false },
      ],
    },
    //sixth question
    {
      questionText: 'Queen Elizabeth II disowned Prince Harry',
      answerOptions: [
        { answerText: 'False', isCorrect: true },
        { answerText: 'True', isCorrect: false },
      ],
    },
    //seventh question
    {
      questionText: 'Lesotho exports wool and mohair',
      answerOptions: [
        { answerText: 'True', isCorrect: true },
        { answerText: 'False', isCorrect: false },
      ],
    },
    //eighth question
    {
      questionText: 'Which of the following gases make water when combined?',
      answerOptions: [
        { answerText: 'H and He', isCorrect: false },
        { answerText: 'O2 and Co2', isCorrect: false },
        { answerText: 'H and O2', isCorrect: true },
        { answerText: 'Co2 and H', isCorrect: false },
      ],
    },
    //nineth question
    {
      questionText: 'Who is the narrator in money heist?',
      answerOptions: [
        { answerText: 'Bogota', isCorrect: false },
        { answerText: 'Tokyo', isCorrect: true },
        { answerText: 'Nairobi', isCorrect: false },
        { answerText: 'Lesbon', isCorrect: false },
      ],
    },
    //tenth question
    {
      questionText: 'How many children does Chris Jenner have?',
      answerOptions: [
        { answerText: '2', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '3', isCorrect: false },
        { answerText: '6', isCorrect: true },
      ],
    },
  ]

  const random = Math.floor(Math.random() * questions.length);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)
  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    
    const nextQuetions = currentQuestion + 1;
    
    if (nextQuetions < questions.length) {
      setCurrentQuestion(nextQuetions);
    }
    else {
      setShowScore(true)
    }
  }

  return (
    <div className="categories-div">
      <h2 className='header'>General Knowledge</h2>
      <p>Current Player : {username}</p>
      <div className="app">
        {showScore ? (
          <div className='score-section'>
            You scored {score} out of {questions.length}
          </div>
        )
          :
          (
            <div>
              <div className='question-section'>
                <div className='question-count'>
                  <span className="Question">Question {currentQuestion + 1}</span>
                </div>
                <div className='question-text'>
                  {questions[random].questionText}
                </div>
              </div>

              <div className='answers'>
                {
                  questions[random].answerOptions.map((answerOptions) => (
                    <button onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}className="answers-btn">
                      {answerOptions.answerText}</button>
                  ))
                }
              </div>
            </div>
          )}
      </div>
    </div>
  );
}

export default General;

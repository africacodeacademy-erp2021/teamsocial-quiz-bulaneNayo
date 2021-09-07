import React, { useState } from 'react';

 function Programming() {
  const Name= JSON.stringify(localStorage.getItem('Current'))
  const user = Name.replace('"','');
  const username = user.replace('"','');
  
  
  const questions = [
   {
      questionText: 'Which of the following is a scripting language?',
      answerOptions: [
        { answerText: 'Typescript', isCorrect: false }, 
        { answerText: 'Java', isCorrect: false },
        { answerText: 'Javascript', isCorrect: true},
        { answerText: 'Angular', isCorrect: false },
      ],
    }, 
    {
      questionText: 'Which command is used to create a react app?',
      answerOptions: [
        { answerText: 'npm install appname', isCorrect: false },
        { answerText: 'npx create-react-app appname', isCorrect: true },
        { answerText: 'npm audit fix', isCorrect: false },
        { answerText: 'yarn install appname', isCorrect: false },
      ],
    },
    {
      questionText: 'Which language is used to buid the UI in android?',
      answerOptions: [
        { answerText: 'java', isCorrect: false },
        { answerText: 'XML', isCorrect: true },
        { answerText: 'React', isCorrect: false },
        { answerText: 'Javascrit', isCorrect: false },
      ],
    },
    {
      questionText: 'Which of the following languages requires properties to be given types? ',
      answerOptions: [
        { answerText: 'CSS', isCorrect: false },
        { answerText: 'Javascrit', isCorrect: false },
        { answerText: 'C++', isCorrect: false },
        { answerText: 'Typescript', isCorrect: true },
      ],
    },
    
  ]
 
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
      <h1 className='header'>Programming</h1>
      <p>Current Player : {username}</p>
      
      <div className="app">
        {showScore ? (
          <div className='score-section'>
        
           {username} you scored {score} out of {questions.length}
          
        
          </div>
        )
          :
          (
            <>
              <div className='question-section'>
                <div className='question-count'>
                 {/*<span>Question {currentQuestion + 1}</span>{questions.length}*/} 
                </div>
                <div className='question-text'>
                  {questions[currentQuestion].questionText}
                </div>
              </div>

              <div className='answers'>
                {
                  questions[currentQuestion].answerOptions.map((answerOptions) => (
                    <button onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}>
                      {answerOptions.answerText}</button>
                  ))
                }
              </div>
            </>
          )}
          <button className="btn1">Choose another category</button>
          
      </div>
    </div>
  );
}
export default Programming;
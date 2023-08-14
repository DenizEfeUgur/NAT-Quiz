import { ButtonSection } from './ButtonSection'
import { TopBar } from './TopBar'
import { Question } from './Question'
import { useState } from 'react'
import { ScoreSection } from './ScoreSection'

export const Quiz = ({questions}) => {
    
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [wrongAnswers, setWrongAnswers] = useState([]);
    const [correctAnswers, setCorrectAnswers] = useState([]);

    const handleAnswerButtonClick = (selectedAnswer) => {
        if(selectedAnswer === questions[currentQuestion].answer){
            setScore(score + 1)
            setCorrectAnswers([...correctAnswers, questions[currentQuestion]]);
        } else {
          const wrongAnswer = {
            question: questions[currentQuestion].question,
            selectedAnswer,
            correctAnswer: questions[currentQuestion].answer,
            };
            setWrongAnswers([...wrongAnswers, wrongAnswer]);
        }
        const nextQuestion = currentQuestion + 1;
        if(nextQuestion < questions.length) {
          setCurrentQuestion(nextQuestion)
        } else {
          setShowScore(true);
        }
    };
    
  return (
    <div className='question-section'>
        {showScore ? (
          <ScoreSection />
        ) : (
        <>
          <TopBar text={`Frage ${currentQuestion + 1} von ${questions.length}`} />
          <Question text={questions[currentQuestion].question} img={questions[currentQuestion].bild} />
          <ButtonSection
            answers={questions[currentQuestion].options}
            onAnswer={handleAnswerButtonClick}
          />
        </>
      )}
    </div>
  );
};

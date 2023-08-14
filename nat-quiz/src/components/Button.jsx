import { useState } from "react";

export const Button = ({value, ...props}) =>
 {
// const [currentQuestion, setCurrentQuestion] = useState(0);
// const [score, setScore] = useState(0);
// const [showScore, setShowScore] = useState(false);
// const [wrongAnswers, setWrongAnswers] = useState([]);
// const [correctAnswers, setCorrectAnswers] = useState([]);

//     const handleAnswerButtonClick = (selectedAnswer) => {
//         if (selectedAnswer === questions[currentQuestion].answer) {
//           setScore(score + 1);
//           setCorrectAnswers([...correctAnswers, questions[currentQuestion]]);
//         } else {
//           const wrongAnswer = {
//             question: questions[currentQuestion].question,
//             selectedAnswer,
//             correctAnswer: questions[currentQuestion].answer,
//           };
//           setWrongAnswers([...wrongAnswers, wrongAnswer]);
//         }
      
//         const nextQuestion = currentQuestion + 1;
//         if (nextQuestion < questions.length) {
//           setCurrentQuestion(nextQuestion);
//         } else {
//           // setPlaySound(true);
//           // setShowConfetti(true);
//           setShowScore(true);
//         }
//       };
    return (
        <button {...props} className="btn" /*onClick={() => handleAnswerButtonClick(option)}*/>{value}</button>
    )
}
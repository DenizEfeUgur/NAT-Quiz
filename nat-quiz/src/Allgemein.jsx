/** @format */

import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import "./allgemein.css";
import ExitToAppTwoToneIcon from "@mui/icons-material/ExitToAppTwoTone";
import soundFile from "./success-fanfare-trumpets-6185.mp3";

const Allgemein = () => {
  const [scrollDisabled, setScrollDisabled] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);
  const [timer, setTimer] = useState(0);
  const [playSound, setPlaySound] = useState(false);

  const questions = [
    {
      question: "Welches ist das grösste Land der Welt?",
      bild: "https://cdn.pixabay.com/photo/2016/04/01/22/32/world-1301744_1280.png",
      options: ["Canada", "Russland", "USA", "China"],
      answer: "Russland",
    },
    {
      question: "In welchem Jahr endete der Zweite Weltkrieg?",
      bild: "https://cdn.pixabay.com/photo/2017/06/10/06/39/calender-2389150_1280.png",
      options: ["1939", "1944", "1945", "1950"],
      answer: "1945",
    },
    {
      question: "Wie viele Planeten hat unser Sonnensystem?",
      bild: "https://cdn.pixabay.com/photo/2012/04/10/17/38/saturn-26618_1280.png",
      options: ["7", "8", "9", "10"],
      answer: "8",
    },
    {
      question: "Welcher ist der längste Fluss der Welt?",
      bild: "https://cdn.pixabay.com/photo/2015/08/26/17/35/water-908813_1280.png",
      options: ["Nil", "Amazonas", "Mississippi", "Jangtse"],
      answer: "Nil",
    },
    {
      question: "Was ist die chemische Formel für Sauerstoff?",
      bild: "https://cdn.pixabay.com/photo/2013/07/13/01/07/chemistry-155121_1280.png",
      options: ["H2O", "CO2", "O2", "NaCl"],
      answer: "O2",
    },
    {
      question: "Welches ist das höchste Gebirge der Welt?",
      bild: "https://cdn.pixabay.com/photo/2012/04/13/01/09/mountains-31590_1280.png",
      options: ["Anden", "Himalaya", "Rocky Mountains", "Alpen"],
      answer: "Himalaya",
    },
    {
      question: "Wie viele Zähne hat ein Mensch?",
      bild: "https://cdn.pixabay.com/photo/2013/07/13/11/28/dentist-158225_1280.png",
      options: ["24", "26", "32", "36"],
      answer: "32",
    },
    {
      question: "Wer ist der Gründer von Microsoft?",
      bild: "https://cdn.pixabay.com/photo/2012/04/10/23/33/logo-27046_1280.png",
      options: ["Bill Gates", "Steve Jobs", "Mark Zuckerberg", "Jeff Bezos"],
      answer: "Bill Gates",
    },
    {
      question: "Was ist die Hauptstadt von Australien?",
      bild: "https://cdn.pixabay.com/photo/2016/03/31/21/55/australia-1296727_1280.png",
      options: ["Sydney", "Melbourne", "Canberra", "Perth"],
      answer: "Canberra",
    },
    {
      question: "Wie viele Ozeane gibt es auf der Erde?",
      bild: "https://cdn.pixabay.com/photo/2014/04/02/11/01/wave-305226_1280.png",
      options: ["3", "4", "5", "6"],
      answer: "5",
    },
    {
      question: "Wie viele Knochen hat ein Mensch?",
      bild: "https://cdn.pixabay.com/photo/2013/07/13/10/27/bone-157272_1280.png",
      options: ["187", "156", "127", "206"],
      answer: "206",
    },
    {
      question: "Wer malte das Gemälde 'Die Mona Lisa'?",
      bild: "https://cdn.pixabay.com/photo/2016/03/19/04/40/paint-1266212_1280.png",
      options: [
        "Vincent van Gogh",
        "Pablo Picasso",
        "Leonardo da Vinci",
        "Michelangelo",
      ],
      answer: "Leonardo da Vinci",
    },
    {
      question: "In welchem Jahr fand die erste Mondlandung statt?",
      bild: "https://cdn.pixabay.com/photo/2018/03/26/14/07/space-3262811_1280.jpg",
      options: ["1969", "1975", "1981", "1992"],
      answer: "1969",
    },

    {
      question: "Wie viele Kantone hat die Schweiz?",
      bild: "https://cdn.pixabay.com/photo/2016/10/21/19/05/switzerland-1758854_1280.png",
      options: ["23", "24", "25", "26"],
      answer: "26",
    },
    {
      question: "Was ist die chemische Formel für Wasser?",
      bild: "https://cdn.pixabay.com/photo/2012/04/26/11/17/periodic-table-42115_1280.png",
      options: ["H2O", "CO2", "NaCl", "C6H12O6"],
      answer: "H2O",
    },
    {
      question: "Welcher Planet ist der nächste zur Sonne?",
      bild: "https://cdn.pixabay.com/photo/2012/05/04/10/17/sun-47083_1280.png",
      options: ["Venus", "Mars", "Merkur", "Jupiter"],
      answer: "Merkur",
    },
    {
      question: "Wer hat die Relativitätstheorie entwickelt?",
      bild: "https://cdn.pixabay.com/photo/2013/07/12/18/31/einstein-153422_1280.png",
      options: [
        "Albert Einstein",
        "Isaac Newton",
        "Stephen Hawking",
        "Galileo Galilei",
      ],
      answer: "Albert Einstein",
    },

    {
      question: "Wie viele Kontinente gibt es auf der Erde?",
      bild: "https://cdn.pixabay.com/photo/2013/07/12/12/54/world-map-146505_1280.png",
      options: ["4", "5", "6", "7"],
      answer: "7",
    },
    {
      question:
        "Welches ist das älteste noch existierende Weltwunder der Antike?",
      bild: "https://cdn.pixabay.com/photo/2017/08/13/16/29/eye-of-horus-2637716_1280.png",
      options: [
        "Pyramiden von Gizeh",
        "Hängende Gärten von Babylon",
        "Zeusstatue des Phidias",
        "Artemistempel in Ephesos",
      ],
      answer: "Pyramiden von Gizeh",
    },
    {
      question: "Welches ist das längste Tier der Welt?",
      bild: "https://cdn.pixabay.com/photo/2012/04/13/21/31/fish-33712_1280.png",
      options: ["Blauwal", "Koloss-Kalmar", "Ameise", "Riesenseestern"],
      answer: "Blauwal",
    },
  ];

  function back() {
    window.location.reload();
  }

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState([]);

  const handleAnswerButtonClick = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1);
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
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setPlaySound(true);
      setShowConfetti(true);
      setShowScore(true);
    }
  };

  useEffect(() => {
    let audio;
    if (playSound) {
      audio = new Audio(soundFile);
      audio.play();
    }
    return () => {
      if (audio) {
        audio.pause();
      }
    };
  }, [playSound]);

  useEffect(() => {
    if (scrollDisabled) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [scrollDisabled]);

  useEffect(() => {
    let interval;
    if (!showScore) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [showScore]);

  useEffect(() => {
    let timer;
    if (showConfetti) {
      timer = setTimeout(() => {
        setScrollDisabled(false);
        setShowConfetti(false);
      }, 3500);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [showConfetti]);

  return (
    <>
      {showConfetti && <Confetti />}
      <button className="exit-button" onClick={back}>
        <ExitToAppTwoToneIcon />
      </button>
      <div className="quiz-app">
        {showScore ? (
          <div className="score-section">
            <div className="wrong-quiz-app">
              <strong className="score-count">
                Du hast {score} von {questions.length} Fragen in {timer}{" "}
                Sekunden richtig beantwortet
              </strong>
            </div>
            <div>
              <br />
              {questions.map((question, index) => (
                <div
                  className={
                    correctAnswers.findIndex(
                      (answer) => answer.question === question.question
                    ) !== -1
                      ? "card"
                      : "card"
                  }
                  key={index}
                >
                  <strong>Frage: </strong>
                  {question.question}
                  <br />
                  {correctAnswers.findIndex(
                    (answer) => answer.question === question.question
                  ) !== -1 && (
                    <>
                      <strong>Korrekte Antwort:</strong> {question.answer}
                      <img
                        className="image"
                        src="https://cdn.pixabay.com/photo/2016/03/31/14/37/check-mark-1292787_1280.png"
                      />
                    </>
                  )}
                  {wrongAnswers.findIndex(
                    (answer) => answer.question === question.question
                  ) !== -1 && (
                    <>
                      <strong>Deine Antwort:</strong>{" "}
                      {
                        wrongAnswers.find(
                          (answer) => answer.question === question.question
                        ).selectedAnswer
                      }
                      <br />
                      <strong>Korrekte Antwort:</strong>{" "}
                      {
                        wrongAnswers.find(
                          (answer) => answer.question === question.question
                        ).correctAnswer
                      }
                      <img
                        className="image"
                        src="https://static.vecteezy.com/system/resources/previews/017/178/056/non_2x/red-cross-mark-on-transparent-background-free-png.png"
                      />
                    </>
                  )}
                </div>
              ))}
            </div>
            <button onClick={back}>
              {" "}
              <ExitToAppTwoToneIcon />
            </button>
          </div>
        ) : (
          <div className="question-section">
            <div className="question-count">
              Frage {currentQuestion + 1} von {questions.length}
              <span className="time-num">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/850/850960.png"
                  className="time-image"
                />
                {timer}
              </span>
            </div>
            <div className="question-text">
              {questions[currentQuestion].question}
            </div>
            {questions[currentQuestion].bild && (
              <img
                className="question-image"
                src={questions[currentQuestion].bild}
                alt="Fragebild"
              />
            )}
            <div className="answer-options">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  className="btn"
                  key={index}
                  onClick={() => handleAnswerButtonClick(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Allgemein;

/** @format */

import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import "./Tier.css";
import ExitToAppTwoToneIcon from "@mui/icons-material/ExitToAppTwoTone";
import soundFile from "./success-fanfare-trumpets-6185.mp3";

function Tier() {
  const [scrollDisabled, setScrollDisabled] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);
  const [timer, setTimer] = useState(0);
  const [playSound, setPlaySound] = useState(false);

  const questions = [
    {
      question: "Was ist das kleinste Tier der Welt?",
      bild: "https://cdn.pixabay.com/photo/2016/05/30/14/23/detective-1424831_1280.png",
      options: ["Myxobolus shekel ", "Ameise", "Kaulquappe", "Laus"],
      answer: "Myxobolus shekel ",
    },
    {
      question: "Welches Tier kann am höchsten springen?",
      bild: "https://cdn.pixabay.com/photo/2013/07/13/14/07/man-162155_1280.png",
      options: ["Puma", "Pferd", "Heuschrecke", "Delfin"],
      answer: "Delfin",
    },
    {
      question: "Wie heisst dieses Tier hier?",
      bild: "https://images.gutefrage.net/media/fragen/bilder/tun-diese-tiere-euch-leid/0_big.jpg?v=1622726471864",
      options: ["Wels", "Blobfisch", "Marwin", "Schleie"],
      answer: "Blobfisch",
    },
    {
      question: "Wie nennt man den weiblichen Schwan?",
      bild: "https://cdn.pixabay.com/photo/2012/04/15/18/36/swan-34836_1280.png",
      options: ["Schwänin", "Schwan"],
      answer: "Schwänin",
    },
    {
      question: "Welches Tier existiert NOCH?",
      bild: "https://cdn.pixabay.com/photo/2013/07/13/12/32/tombstone-159792_1280.png",
      options: ["Mamut", "Megaladon", "Wandertaube", "Nasenaffe"],
      answer: "Nasenaffe",
    },
    {
      question: "Welches Tier hat den längsten Winterschlaf?",
      bild: "https://cdn.pixabay.com/photo/2014/03/24/17/19/winter-sleep-295403_1280.png",
      options: ["Schlafbeutler", "Murmeltier", "Bär", "Koala"],
      answer: "Murmeltier",
    },
    {
      question: "Wie heisst das Tier?",
      bild: "https://st.depositphotos.com/1052482/3034/i/450/depositphotos_30344971-stock-photo-manta-and-divers-on-the.jpg",
      options: [
        "Schmetterlingsrochen",
        "Sternrochen",
        "Manta Rochen",
        "Gitarrenrochen",
      ],
      answer: "Manta Rochen",
    },
    {
      question: "Welches ist das fauelste Tier der Welt?",
      bild: "https://cdn.pixabay.com/photo/2012/04/28/20/55/bee-44523_1280.png",
      options: ["Faultier", "Koala", "Krabbe", "Katze"],
      answer: "Faultier",
    },
    {
      question: "Wie viele Tiere gibt es auf der Welt?",
      bild: "https://cdn.pixabay.com/photo/2017/06/27/08/27/pay-2446667_1280.png",
      options: [
        "ca. 1 Billiarde",
        "ca. 10 Billiarden",
        "ca. 100 Billiarden",
        "ca. 1 Trillion",
      ],
      answer: "ca. 1 Trillion",
    },
    {
      question: "Wie nennt man ein männliches Schwein?",
      bild: "https://cdn.pixabay.com/photo/2012/05/07/04/17/pig-47920_1280.png",
      options: ["Schwein", "Eber", "Sau", "Ferkel"],
      answer: "Eber",
    },
    {
      question: "Wie viel Liter trinkt ein Pferd durchschnittlich pro Tag",
      bild: "https://cdn.pixabay.com/photo/2016/04/01/09/28/donkey-1299389_1280.png",
      options: ["0-20 Liter", "20-40 Liter", "40-60 Liter", "60-80 Liter"],
      answer: "40-60 Liter",
    },
    {
      question:
        "Es gibt ein Tier, welches im wasser lebt und unsterblich ist, solange es nicht gefressen wird.",
      bild: "https://cdn.pixabay.com/photo/2013/07/13/13/14/ocean-160613_1280.png",
      options: ["Richtig", "Falsch"],
      answer: "Richtig",
    },

    {
      question: "Welches Tier hat die längste lebensdauer?",
      bild: "https://cdn.pixabay.com/photo/2017/02/15/20/58/ekg-2069872_1280.png",
      options: ["Elefant", "Schildkröte", "Hund", "Pinguin"],
      answer: "Schildkröte",
    },

    {
      question: "Welches Tier kann am längsten ohne Nahrung auskommen?",
      bild: "https://cdn.pixabay.com/photo/2013/07/12/19/05/no-food-154333_1280.png",
      options: ["Schlange", "Hai", "Kamel", "Fledermaus"],
      answer: "Kamel",
    },

    {
      question: "Welches ist das schnellste Landtier der Welt?",
      bild: "https://cdn.pixabay.com/photo/2012/05/07/11/42/snail-48182_1280.png",
      options: ["Gepard", "Antilope", "Strauss", "Giraffe"],
      answer: "Gepard",
    },

    {
      question: "Welches ist die grösste flugfähige Vogelart?",
      bild: "https://cdn.pixabay.com/photo/2015/01/30/00/45/bird-616803_1280.png",
      options: ["Adler", "Pinguin", "Pelikan", "Albatros"],
      answer: "Albatros",
    },

    {
      question: "Wie nennt man die männliche Biene?",
      bild: "https://cdn.pixabay.com/photo/2012/04/02/14/24/bee-24633_1280.png",
      options: ["Arbeiter", "König", "Krieger", "Drohne"],
      answer: "Drohne",
    },
    {
      question: "Wie viele Herzen hat eine Krake?",
      bild: "https://cdn.pixabay.com/photo/2017/01/31/19/03/animal-2026466_1280.png",
      options: ["0", "1", "2", "3"],
      answer: "3",
    },
    {
      question: "Welches Tier kann am längsten ohne Schlaf auskommen?",
      bild: "https://cdn.pixabay.com/photo/2018/10/02/15/18/cloud-3719093_1280.png",
      options: ["Mensch", "Giraffe", "Elefant", "Koala"],
      answer: "Elefant",
    },
    {
      question: "Welches Tier kann am längsten unter Wasser bleiben?",
      bild: "https://cdn.pixabay.com/photo/2013/07/12/16/36/snorkeling-151241_1280.png",
      options: ["Schildkröte", "Schnabelwal", "Delfin", "Seehund"],
      answer: "Schnabelwal",
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
      }, 4000);
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
                Sekunden richtig beantwortet.
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
              <ExitToAppTwoToneIcon className="test" />
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
}

export default Tier;

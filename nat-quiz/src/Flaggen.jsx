/** @format */

import React, { useState, useEffect } from "react";
import "./flagge.css";
import Confetti from "react-confetti";
import ExitToAppTwoToneIcon from "@mui/icons-material/ExitToAppTwoTone";
import soundFile from "./success-fanfare-trumpets-6185.mp3";

const Flaggen = () => {
  const [scrollDisabled, setScrollDisabled] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);
  const [timer, setTimer] = useState(0);  
  const [startTime, setStartTime] = useState(0);
  const [playSound, setPlaySound] = useState(false);
  
  const flaggen = [
    {
      flag: "https://cdn.pixabay.com/photo/2012/04/10/23/11/switzerland-26891_1280.png",
      options: ["Canada", "Russland", "USA", "Schweiz"],
      answer: "Schweiz",
    },
    {
      flag: "https://cdn.pixabay.com/photo/2015/11/12/16/23/flag-1040575_1280.png",
      options: ["Neuseeland", "Zypern", "Columbien", "England"],
      answer: "Zypern",
    },
    {
      flag: "https://cdn.pixabay.com/photo/2013/07/13/14/15/italy-162326_1280.png",
      options: ["Kroatien", "Italien", "Thailand", "Indien"],
      answer: "Italien",
    },

    {
      flag: "https://cdn.pixabay.com/photo/2012/04/12/23/52/germany-31017_1280.png",
      options: ["Deutschland", "Frankreich", "Spanien", "Italien"],
      answer: "Deutschland",
    },
    {
      flag: "https://cdn.pixabay.com/photo/2013/07/12/17/58/thailand-152711_1280.png",
      options: ["Costa Rica", "Thailand", "Lettland", "Estland"],
      answer: "Thailand",
    },
    {
      flag: "https://cdn.pixabay.com/photo/2013/07/13/14/16/maldives-162352_1280.png",
      options: ["Türkei", "Algerien", "Malediven", "Libanon"],
      answer: "Malediven",
    },
    {
      flag: "https://cdn.pixabay.com/photo/2013/07/13/14/16/new-zealand-162373_1280.png",
      options: ["Neuseeland", "Australien", "cookinseln", "Belgien"],
      answer: "Neuseeland",
    },
    {
      flag: "https://cdn.pixabay.com/photo/2013/07/13/14/16/mozambique-162366_1280.png",
      options: ["Mosambik", "Belarus", "Kenia", "Nicaragua"],
      answer: "Mosambik",
    },
    {
      flag: "https://cdn.pixabay.com/photo/2017/03/14/21/00/american-flag-2144392_1280.png",
      options: ["Kanada", "USA", "Mexiko", "Brasilien"],
      answer: "USA",
    },
    {
      flag: "https://cdn.pixabay.com/photo/2013/07/13/14/16/mexico-162359_1280.png",
      options: ["Kanada", "USA", "Mexiko", "Brasilien"],
      answer: "Mexiko",
    },
    {
      flag: "https://cdn.pixabay.com/photo/2012/04/10/23/17/ethiopia-26943_1280.png",
      options: ["Ghana", "Mali", "Tansania", "Äthiopien"],
      answer: "Äthiopien",
    },
    {
      flag: "https://cdn.pixabay.com/photo/2018/01/27/09/21/wallpaper-3110721_1280.jpg",
      options: ["Algerien", "Türkei", "Marokko", "Tunesien"],
      answer: "Türkei",
    },
    {
      flag: "https://cdn.pixabay.com/photo/2015/10/24/21/30/albania-1005017_1280.png",
      options: ["Bosnien", "Albanien", "Serbien", "Mazedonien"],
      answer: "Albanien",
    },
    {
      flag: "https://cdn.pixabay.com/photo/2013/07/13/14/17/swaziland-162432_1280.png",
      options: ["Benin", "Gabun", "Swasiland", "Mauritius"],
      answer: "Swasiland",
    },
    {
      flag: "https://cdn.pixabay.com/photo/2013/07/13/14/16/lesotho-162340_1280.png",
      options: ["Lesotho", "Mauretanien", "Seychellen", "Malawi"],
      answer: "Lesotho",
    },
    {
      flag: "https://cdn.pixabay.com/photo/2013/07/13/14/17/south-africa-162425_1280.png",
      options: ["Südafrika", "Kenia", "Äthiopien", "Nigeria"],
      answer: "Südafrika",
    },
    {
      flag: " https://cdn.pixabay.com/photo/2013/07/13/14/15/fiji-162293_1280.png",
      options: ["Burundi", "Botsuana", "Fidschi", "Gambia"],
      answer: "Fidschi",
    },
    {
      flag: "https://cdn.pixabay.com/photo/2013/07/13/14/16/monaco-162361_1280.png",
      options: ["Indonesien", "Monaco", "Polen", "Tunesien"],
      answer: "Monaco",
    },
    {
      flag: "https://cdn.pixabay.com/photo/2013/07/13/14/17/uruguay-162455_1280.png",
      options: ["Uruguay", "Paraguay", "Griechenland", "Argentinien"],
      answer: "Uruguay",
    },
    {
      flag: "https://cdn.pixabay.com/photo/2020/12/05/06/40/kazakhstan-5805211_1280.png",
      options: ["Irland", "Norwegen", "Kasachstan", "Slowakei"],
      answer: "Kasachstan",
    },
  ];
  const startQuiz = () => {
    setStartTime(Date.now());
  };

  function back() {
    window.location.reload();
  }

  const [currentFlag, setCurrentFlag] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState([]);

  const handleAnswerButtonClick = (selectedAnswer) => {
    if (selectedAnswer === flaggen[currentFlag].answer) {
      setScore(score + 1);
      setCorrectAnswers([...correctAnswers, flaggen[currentFlag]]);
    } else {
      const wrongAnswer = {
        flag: flaggen[currentFlag].flag,
        selectedAnswer,
        correctAnswer: flaggen[currentFlag].answer,
      };
      setWrongAnswers([...wrongAnswers, wrongAnswer]);
    }

    const nextFlag = currentFlag + 1;
    if (nextFlag < flaggen.length) {
      setCurrentFlag(nextFlag);
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
        setScrollDisabled();
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
                Du hast {score} von {flaggen.length} Fragen in {timer} Sekunden
                richtig beantwortet
              </strong>
            </div>
            <div>
              <br />
              {flaggen.map((flag, index) => (
                <div
                  className={
                    correctAnswers.findIndex(
                      (answer) => answer.flag === flag.flag
                    ) !== -1
                      ? "card"
                      : "card"
                  }
                  key={index}
                >
                  <img src={flag.flag} alt="Flagge" className="image" />
                  {correctAnswers.findIndex(
                    (answer) => answer.flag === flag.flag
                  ) !== -1 && (
                    <>
                      <strong>Korrekte Antwort:</strong> {flag.answer}
                      <img
                        className="image"
                        src="https://cdn.pixabay.com/photo/2016/03/31/14/37/check-mark-1292787_1280.png"
                        alt="Correct"
                      />
                    </>
                  )}
                  {wrongAnswers.findIndex(
                    (answer) => answer.flag === flag.flag
                  ) !== -1 && (
                    <>
                      <strong>Deine Antwort:</strong>{" "}
                      {
                        wrongAnswers.find((answer) => answer.flag === flag.flag)
                          .selectedAnswer
                      }
                      <br />
                      <strong>Korrekte Antwort:</strong>{" "}
                      {
                        wrongAnswers.find((answer) => answer.flag === flag.flag)
                          .correctAnswer
                      }
                      <img
                        className="image"
                        src="https://static.vecteezy.com/system/resources/previews/017/178/056/non_2x/red-cross-mark-on-transparent-background-free-png.png"
                        alt="Incorrect"
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
          <div className="flag-section">
            <div className="flag-count">
              Flagge {currentFlag + 1} von {flaggen.length}
              <span className="time-num">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/850/850960.png"
                  className="time-image"
                />
                {timer}
              </span>
            </div>
            <div></div>
            <img
              src={flaggen[currentFlag].flag}
              alt="Flagge"
              className="flag-image"
            />
            <div className="answer-options">
              {flaggen[currentFlag].options.map((option, index) => (
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

export default Flaggen;

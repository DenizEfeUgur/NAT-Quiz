/** @format */

import React, { useState, useEffect, useRef, useCallback } from "react";
import Confetti from "react-confetti";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ReplayRoundedIcon from "@mui/icons-material/ReplayRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import "./Quiz.css";
import soundFile from "./success-fanfare-trumpets-6185.mp3";

// How long the correct/wrong answer stays highlighted before advancing.
const FEEDBACK_DELAY = 950;

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function resultMessage(percentage) {
  if (percentage === 100) return "Perfekt! Alles richtig! 🏆";
  if (percentage >= 80) return "Stark! Fast alles richtig. 🎉";
  if (percentage >= 50) return "Gut gemacht – da geht noch mehr! 💪";
  return "Übung macht den Meister. Nochmal? 🙂";
}

export default function Quiz({ quiz, onExit }) {
  const { title, emoji, accent, accentSoft, questions } = quiz;
  const total = questions.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [isLocked, setIsLocked] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showScore, setShowScore] = useState(false);
  const [timer, setTimer] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const advanceTimeout = useRef(null);

  const current = questions[currentIndex];

  // Count up while the quiz is running.
  useEffect(() => {
    if (showScore) return undefined;
    const interval = setInterval(() => setTimer((t) => t + 1), 1000);
    return () => clearInterval(interval);
  }, [showScore]);

  // Celebrate (sound + confetti) once the quiz is finished.
  useEffect(() => {
    if (!showScore) return undefined;
    setShowConfetti(true);
    const audio = new Audio(soundFile);
    audio.play().catch(() => {
      /* Autoplay can be blocked by the browser – ignore. */
    });
    const stop = setTimeout(() => setShowConfetti(false), 5000);
    return () => {
      clearTimeout(stop);
      audio.pause();
    };
  }, [showScore]);

  // Always clear a pending "advance" timer when unmounting.
  useEffect(() => () => clearTimeout(advanceTimeout.current), []);

  const handleAnswer = useCallback(
    (option) => {
      if (isLocked) return;

      const isCorrect = option === current.answer;
      setSelected(option);
      setIsLocked(true);
      if (isCorrect) setScore((s) => s + 1);

      setAnswers((prev) => [
        ...prev,
        {
          prompt: current.prompt,
          image: current.image,
          selected: option,
          correct: current.answer,
          isCorrect,
        },
      ]);

      advanceTimeout.current = setTimeout(() => {
        if (currentIndex + 1 < total) {
          setCurrentIndex((i) => i + 1);
          setSelected(null);
          setIsLocked(false);
        } else {
          setShowScore(true);
        }
      }, FEEDBACK_DELAY);
    },
    [isLocked, current, currentIndex, total]
  );

  const restart = useCallback(() => {
    clearTimeout(advanceTimeout.current);
    setCurrentIndex(0);
    setSelected(null);
    setIsLocked(false);
    setScore(0);
    setAnswers([]);
    setShowScore(false);
    setTimer(0);
    setShowConfetti(false);
  }, []);

  const percentage = Math.round((score / total) * 100);
  const progress = showScore
    ? 100
    : Math.round((currentIndex / total) * 100);

  const optionState = (option) => {
    if (!isLocked) return "";
    if (option === current.answer) return "correct";
    if (option === selected) return "wrong";
    return "dimmed";
  };

  return (
    <div
      className="quiz"
      style={{ "--accent": accent, "--accent-soft": accentSoft }}
    >
      {showConfetti && (
        <Confetti recycle={false} numberOfPieces={320} gravity={0.25} />
      )}

      <header className="quiz__topbar">
        <div className="quiz__brand">
          <span className="quiz__brand-emoji" aria-hidden="true">
            {emoji}
          </span>
          <span className="quiz__brand-title">{title}</span>
        </div>
        <button className="quiz__home-btn" onClick={onExit} type="button">
          <HomeRoundedIcon fontSize="small" />
          <span>Startseite</span>
        </button>
      </header>

      {showScore ? (
        <main className="quiz__panel quiz__results">
          <div
            className="results__ring"
            style={{
              background: `conic-gradient(var(--accent) ${percentage * 3.6}deg, rgba(255,255,255,0.12) 0deg)`,
            }}
          >
            <div className="results__ring-inner">
              <span className="results__percent">{percentage}%</span>
              <span className="results__ratio">
                {score}/{total}
              </span>
            </div>
          </div>

          <h2 className="results__title">{resultMessage(percentage)}</h2>
          <p className="results__subtitle">
            {score} von {total} richtig · {formatTime(timer)} Min.
          </p>

          <div className="results__actions">
            <button
              className="btn-primary"
              onClick={restart}
              type="button"
            >
              <ReplayRoundedIcon fontSize="small" />
              Nochmal spielen
            </button>
            <button className="btn-ghost" onClick={onExit} type="button">
              <HomeRoundedIcon fontSize="small" />
              Zur Startseite
            </button>
          </div>

          <ul className="review">
            {answers.map((answer, index) => (
              <li
                key={index}
                className={`review__item ${
                  answer.isCorrect ? "is-correct" : "is-wrong"
                }`}
              >
                {answer.image && (
                  <img
                    className="review__thumb"
                    src={answer.image}
                    alt=""
                  />
                )}
                <div className="review__body">
                  {answer.prompt && (
                    <p className="review__prompt">{answer.prompt}</p>
                  )}
                  {answer.isCorrect ? (
                    <p className="review__line">
                      Richtig: <strong>{answer.correct}</strong>
                    </p>
                  ) : (
                    <>
                      <p className="review__line review__line--wrong">
                        Deine Antwort: <strong>{answer.selected}</strong>
                      </p>
                      <p className="review__line">
                        Richtig: <strong>{answer.correct}</strong>
                      </p>
                    </>
                  )}
                </div>
                <span className="review__icon">
                  {answer.isCorrect ? (
                    <CheckCircleRoundedIcon />
                  ) : (
                    <CancelRoundedIcon />
                  )}
                </span>
              </li>
            ))}
          </ul>
        </main>
      ) : (
        <main className="quiz__panel quiz__play">
          <div className="quiz__meta">
            <span className="quiz__counter">
              Frage {currentIndex + 1}
              <span className="quiz__counter-total"> / {total}</span>
            </span>
            <span className="quiz__timer">
              <AccessTimeRoundedIcon fontSize="small" />
              {formatTime(timer)}
            </span>
          </div>

          <div className="quiz__progress">
            <span
              className="quiz__progress-bar"
              style={{ width: `${progress}%` }}
            />
          </div>

          {current.prompt && (
            <h2 className="quiz__question">{current.prompt}</h2>
          )}

          {current.image && (
            <div className="quiz__image-wrap">
              <img
                className="quiz__image"
                src={current.image}
                alt={current.prompt || "Quizbild"}
              />
            </div>
          )}

          <div className="quiz__options">
            {current.options.map((option, index) => (
              <button
                key={index}
                type="button"
                className={`option ${optionState(option)}`}
                onClick={() => handleAnswer(option)}
                disabled={isLocked}
              >
                <span className="option__label">{option}</span>
                {optionState(option) === "correct" && (
                  <CheckCircleRoundedIcon className="option__icon" />
                )}
                {optionState(option) === "wrong" && (
                  <CancelRoundedIcon className="option__icon" />
                )}
              </button>
            ))}
          </div>
        </main>
      )}
    </div>
  );
}

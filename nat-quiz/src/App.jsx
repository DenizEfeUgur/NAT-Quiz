/** @format */

import React, { useState } from "react";
import "./App.css";
import Quiz from "./Quiz";
import { quizzes } from "./data/quizData";

function App() {
  const [activeQuiz, setActiveQuiz] = useState(null);

  if (activeQuiz) {
    return <Quiz quiz={activeQuiz} onExit={() => setActiveQuiz(null)} />;
  }

  return (
    <div className="home">
      <header className="home__header">
        <p className="home__eyebrow">Willkommen im</p>
        <h1 className="home__title">
          NÄT<span className="home__title-accent"> Quiz</span>
        </h1>
      </header>

      <div className="home__grid">
        {quizzes.map((quiz) => (
          <button
            key={quiz.id}
            type="button"
            className="quiz-card"
            style={{
              "--accent": quiz.accent,
              "--accent-soft": quiz.accentSoft,
            }}
            onClick={() => setActiveQuiz(quiz)}
          >
            <span className="quiz-card__icon" aria-hidden="true">
              {quiz.emoji}
            </span>
            <span className="quiz-card__title">{quiz.title}</span>
            <span className="quiz-card__desc">{quiz.description}</span>
            <span className="quiz-card__badge">
              {quiz.questions.length} Fragen
            </span>
            <span className="quiz-card__cta">Quiz starten →</span>
          </button>
        ))}
      </div>

      <footer className="home__footer">by Deniz Ugur</footer>
    </div>
  );
}

export default App;

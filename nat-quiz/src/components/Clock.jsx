import { useState, useEffect } from "react";

export const Clock = () => {

  const [timer, setTimer] = useState(0);
  const [showScore, setShowScore] = useState(false);
  
  useEffect(() => {
    let interval;
    if (!showScore) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [showScore]);

    return (
        <span className="time-num">
        <img
          src="https://cdn-icons-png.flaticon.com/128/850/850960.png"
          className="time-image"
        />
        {timer}
      </span>
    )
}
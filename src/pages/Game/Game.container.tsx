import React, { useEffect, useState } from "react";
import GameView from "./Game.view";

const GameContainer: React.FC = () => {
  const [correctAnswer, setCorrectAnswer]: any = useState("");
  const [userAnswer, setUserAnswer]: any = useState("");
  const [guessMade, setGuessMade]: any = useState(false);
  const [guesses, setGuesses]: any = useState([]);

  useEffect(() => {
    setGuesses(["answer 1", "answer 2", "answer 3", "answer 4"]);
    setCorrectAnswer("answer 1");
  }, []);

  const handleGuessResponse = (guessAnswer: string) => {
    setUserAnswer(guessAnswer);
    setGuessMade(true);
  };

  const handleButtonColor = (guess: string) => {
    if (userAnswer) {
      if (guess === correctAnswer) return "green";
      if (guess !== correctAnswer && guess === userAnswer) return "red";
    }
    return undefined;
  };

  return (
    <GameView
      guesses={guesses}
      guessMade={guessMade}
      handleButtonColor={handleButtonColor}
      handleGuessResponse={handleGuessResponse}
    />
  );
};

export default GameContainer;

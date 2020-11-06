import React, { useEffect, useState } from "react";
import GameView from "./Game.view";
import wordDatabase from "../../data/words.json";
import { dbFunctions } from "../../database";
const verbType = ["IO", "TU", "LUI_LEI", "NOI", "VOI", "LORO"];
const verbSubtype = ["INDICATIVO", "CONGIUNTIVO", "PRESENTE", "PASSATO"];

function getRandomIndexFromArray(array: string[]) {
  const length = array.length;
  const randomNumber = Math.floor(Math.random() * length);
  return randomNumber;
}

function getRandomNumberFromRange(number: number) {
  const randomNumber = Math.floor(Math.random() * number);
  return randomNumber;
}

function getRandomValueFromObject(obj: object) {
  var keys = Object.keys(obj);
  return obj[keys[(keys.length * Math.random()) << 0]];
}

const GameContainer: React.FC = () => {
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [userAnswer, setUserAnswer]: any = useState("");
  const [guessMade, setGuessMade]: any = useState(false);
  const [question, setQuestion]: any = useState({});
  const [currentWordId, setCurrentWordId] = useState("");

  useEffect(() => {
    const randomNumber: any = getRandomNumberFromRange(17754);
    setCurrentWordId(randomNumber);
    const word: any = wordDatabase[randomNumber];

    const url = `data/words/${word}.json`; // fetched data must sit in public folder
    fetch(url)
      .then((res) => res.json())
      // .then((d) => setGuesses(["answer 1", "answer 2", "answer 3", "answer 4"]));
      .then((d) => {
        let _word_sanitized = word.charAt(0).toUpperCase() + word.slice(1);
        // this gives things like "Bulare"

        let _person = verbType[getRandomIndexFromArray(verbType)];
        let _person_sanitized = _person.toLowerCase().replace("_", "/");
        // this gives things like 'io', 'noi

        let _tense = verbSubtype[getRandomIndexFromArray(verbSubtype)];
        let _tense_sanitized = _tense.toLowerCase();
        // this gives things such as "congiuntivo", "present"

        let _allOptions: string[] = Object.keys(d[_person][_tense]);

        let _answer: string =
          _allOptions[getRandomIndexFromArray(Object.values(d[_person][_tense]))];
        let _answer_santized = _answer.toLowerCase().replace("_", " ");
        // this gives stuff like "participio"

        let _question: string = d[_person][_tense][_answer];

        function questionPrep() {
          _person = verbType[getRandomIndexFromArray(verbType)];
          _person_sanitized = _person.toLowerCase().replace("_", "/");
          // this gives things like 'io', 'noi

          _tense = verbSubtype[getRandomIndexFromArray(verbSubtype)];
          _tense_sanitized = _tense.toLowerCase();
          // this gives things such as "congiuntivo", "present"

          _allOptions = Object.keys(d[_person][_tense]);

          _answer = _allOptions[getRandomIndexFromArray(Object.values(d[_person][_tense]))];
          _answer_santized = _answer.toLowerCase().replace("_", " ");
          _question = d[_person][_tense][_answer];
        }
        // person tense answer
        while (_question.length === 1) {
          questionPrep();
        }

        // start block
        // this block replaces person with person + other bits like che if the _question has it
        let questionAsArray = _question.split(" ");
        if (questionAsArray.includes(_person_sanitized)) {
          _question = questionAsArray.pop();
          _person_sanitized = questionAsArray.join(" ").replace(",", "/");
        }
        // end block

        let _options: string[] = [_answer];
        while (_options.length < 4) {
          let _randomValue = getRandomValueFromObject(_allOptions);
          if (!_options.includes(_randomValue)) _options.push(_randomValue);
        }
        let _options_santized = _options.map((option) => option.toLowerCase().replace("_", " "));
        _options_santized.sort(() => Math.random() - 0.5);
        // this gives stuff like ["gerundio", "passato", "infinitivo", "presente"]

        setQuestion({
          question: _question,
          infinitive: _word_sanitized,
          person: _person_sanitized,
          tense: _tense_sanitized,
          options: _options_santized,
          answer: _answer_santized,
        });
      });
  }, []);

  const generateNewQuestion = () => {
    setUserAnswer("");
    setGuessMade(false);
    const randomNumber: any = getRandomNumberFromRange(17754);
    setCurrentWordId(randomNumber);
    const word: any = wordDatabase[randomNumber];

    const url = `data/words/${word}.json`; // fetched data must sit in public folder
    fetch(url)
      .then((res) => res.json())
      // .then((d) => setGuesses(["answer 1", "answer 2", "answer 3", "answer 4"]));
      .then((d) => {
        let _word_sanitized = word.charAt(0).toUpperCase() + word.slice(1);
        // this gives things like "Bulare"

        let _person = verbType[getRandomIndexFromArray(verbType)];
        let _person_sanitized = _person.toLowerCase().replace("_", "/");
        // this gives things like 'io', 'noi

        let _tense = verbSubtype[getRandomIndexFromArray(verbSubtype)];
        let _tense_sanitized = _tense.toLowerCase();
        // this gives things such as "congiuntivo", "present"

        let _allOptions: string[] = Object.keys(d[_person][_tense]);

        let _answer: string =
          _allOptions[getRandomIndexFromArray(Object.values(d[_person][_tense]))];
        let _answer_santized = _answer.toLowerCase().replace("_", " ");
        // this gives stuff like "participio"

        let _question: string = d[_person][_tense][_answer];
        // person tense answer

        function questionPrep() {
          _person = verbType[getRandomIndexFromArray(verbType)];
          _person_sanitized = _person.toLowerCase().replace("_", "/");
          // this gives things like 'io', 'noi

          _tense = verbSubtype[getRandomIndexFromArray(verbSubtype)];
          _tense_sanitized = _tense.toLowerCase();
          // this gives things such as "congiuntivo", "present"

          _allOptions = Object.keys(d[_person][_tense]);

          _answer = _allOptions[getRandomIndexFromArray(Object.values(d[_person][_tense]))];
          _answer_santized = _answer.toLowerCase().replace("_", " ");
          _question = d[_person][_tense][_answer];
        }

        // if the question returns a "-", repeat creation process in order to get a proper answer
        while (_question.length === 1) {
          questionPrep();
        }

        // start block
        // this block replaces person with person + other bits like che if the _question has it
        let questionAsArray = _question.split(" ");
        if (questionAsArray.includes(_person_sanitized)) {
          _question = questionAsArray.pop();
          _person_sanitized = questionAsArray.join(" ");
        }
        // end block

        let _options: string[] = [_answer];
        while (_options.length < 4) {
          let _randomValue = getRandomValueFromObject(_allOptions);
          if (!_options.includes(_randomValue)) _options.push(_randomValue);
        }
        let _options_santized = _options.map((option) => option.toLowerCase().replace("_", " "));
        _options_santized.sort(() => Math.random() - 0.5);
        // this gives stuff like ["gerundio", "passato", "infinitivo", "presente"]

        setQuestion({
          question: _question,
          infinitive: _word_sanitized,
          person: _person_sanitized,
          tense: _tense_sanitized,
          options: _options_santized,
          answer: _answer_santized,
        });
      });
  };

  const handleGuessResponse = async (guessAnswer: string) => {
    setUserAnswer(guessAnswer);
    setGuessMade(true);
    updateScore(guessAnswer);
    let currentDictionary = await dbFunctions.getItem("dictionary").then((res) => res);
    let previouslyAnswered = currentDictionary[currentWordId]
      ? currentDictionary[currentWordId].toString()
      : "no";

    if (previouslyAnswered !== "true") {
      dbFunctions.setItem(
        "dictionary",
        Object.assign(currentDictionary, {
          [currentWordId]: guessAnswer === question.answer,
        }) // factor in case where word already exists and was previously correct / this needs to stay correct even if the user gets it wrong
      );
    }

    setTimeout(() => {
      generateNewQuestion();
    }, 2000);
  };

  const updateScore = (guess: string) => {
    if (guess === question.answer) {
      setScore(score + 1);
      setTotal(total + 1);
    } else {
      setTotal(total + 1);
    }
  };

  const handleButtonColor = (guess: string) => {
    if (userAnswer) {
      if (guess === question.answer) return "green";
      if (guess !== question.answer && guess === userAnswer) return "red";
    }
    return undefined;
  };

  return (
    <GameView
      question={question}
      guessMade={guessMade}
      score={[score, total]}
      handleButtonColor={handleButtonColor}
      handleGuessResponse={handleGuessResponse}
    />
  );
};

export default GameContainer;

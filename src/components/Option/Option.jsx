import { useEffect, useState } from "react";
import "./Option.css";

function Option({
  optionLetter,
  text,
  correct,
  userClicked,
  setUserClicked,
  setGameEnd,
}) {
  const [optionClicked, setOptionClicked] = useState(false);
  useEffect(() => {
    if (optionClicked && !correct) {
      setGameEnd(true);
    }
  }, [optionClicked]);

  const checkFunction = () => {
    if (!userClicked) {
      setUserClicked(true);
      setOptionClicked(true);
    }
  };
  return (
    <div
      className={`Option ${!userClicked ? "OptionClick" : ""}
      ${userClicked && correct ? "OptionCorrect" : ""}
      ${optionClicked && !correct ? "OptionWrong" : ""} 
      `}
      onClick={checkFunction}
    >
      <h2 className="OptionLetter">{optionLetter}</h2>
      <p className="OptionText">{text}</p>
    </div>
  );
}

export default Option;

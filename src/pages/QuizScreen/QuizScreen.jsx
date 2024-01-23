import { useEffect, useState } from "react";
import Option from "../../components/Option/Option";
import "./QuizScreen.css";

export let i = false;
export let j = false;

function QuizScreen() {
  //Note this page is modified for testing purpose
  //Don't modify this page, It can break your playground
  //Only update code in src(src/components/Option/Option.jsx)
  const [userClicked, setUserClicked] = useState(false);
  const [gameEnd, setGameEnd] = useState(false);

  useEffect(() => {
    if (userClicked) {
      i = true;
    }
    if (gameEnd) {
      j = true;
    }
  }, [userClicked, gameEnd]);

  return (
    <div className="QuizScreen">
      <Option
        optionLetter={"A"}
        text={"Correct"}
        correct={true}
        userClicked={userClicked}
        setUserClicked={setUserClicked}
        setGameEnd={setGameEnd}
      />
      <Option
        optionLetter={"B"}
        text={"Wrong"}
        correct={false}
        userClicked={userClicked}
        setUserClicked={setUserClicked}
        setGameEnd={setGameEnd}
      />
    </div>
  );
}

export default QuizScreen;

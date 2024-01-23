import { useState } from "react";
import Option from "../../components/Option/Option";
import "./QuizScreen.css";

function QuizScreen() {
  //Note this page is modified for testing purpose
  //Don't modify this page, It can break your playground
  //Only update code in src(src/components/Option/Option.jsx)
  const [userClicked, setUserClicked] = useState(false);
  const [gameEnd, setGameEnd] = useState(false);
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

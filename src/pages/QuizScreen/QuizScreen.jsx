import "./QuizScreen.css";
import illustration from "../../assets/illustration.svg";
import { useContext, useEffect, useState } from "react";
import { quizzes } from "../../quizzes";
import Option from "../../components/Option/Option";
import SmallBtn from "../../components/SmallBtn/SmallBtn";
import { Screen, Result } from "../../context/index.js";

//Write your code here............
function QuizScreen() {
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [userClicked, setUserClicked] = useState(false);
  const [gameEnd, setGameEnd] = useState(false);
  const { setCurrentScreen } = useContext(Screen);
  useEffect(() => {
    if (currentQuizIndex == quizzes.length - 1) {
      setGameEnd(true);
    }
  }, [currentQuizIndex]);

  const nextBtnFunction = () => {
    if (gameEnd) {
      //nativagate screen to resutl Screen
      setCurrentScreen(2);
      // To make the game run in loop. Think about it.
      gameEnd(false);
    } else {
      if (userClicked) {
        setCurrentQuizIndex((prev) => prev + 1);
        setUserClicked(false);
      }
    }
  };
  return (
    <div className="QuizScreen">
      <img src={illustration} alt="" className="QuizScreen-img" />
      <div className="QuizScreen_content">
        <h1 className="QuizScreen_ques">{quizzes[currentQuizIndex].quiz}</h1>
        {quizzes[currentQuizIndex].options.map((data, key) => {
          return (
            <Option
              text={data.text}
              correct={data.correct}
              optionLetter={data.option}
              userClicked={userClicked}
              setUserClicked={setUserClicked}
              setGameEnd={setGameEnd}
              key={key}
            />
          );
        })}
        <SmallBtn text={"Next"} onClickFunc={nextBtnFunction} />
      </div>
    </div>
  );
}

export default QuizScreen;

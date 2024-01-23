import "./WelcomeScreen.css";
import MediumBtn from "../../components/MediumBtn/MediumBtn";
import { Screen } from "../../context/index.js";
import { useContext } from "react";

function WelcomeScreen() {
  const { setCurrentScreen } = useContext(Screen);
  return (
    <div className="WelcomeScreen">
      <h1 className="WelcomeScreen-heading">Welcome</h1>
      <p className="WelcomeScreen-para">
        Discover the world, one question at a time – welcome to the Country Quiz
        Challenge!
      </p>
      <MediumBtn text={"Start"} onClickFunc={() => setCurrentScreen(1)} />
    </div>
  );
}

export default WelcomeScreen;

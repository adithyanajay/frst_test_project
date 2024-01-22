import MediumBtn from "../../components/MediumBtn/MediumBtn";
import "./WelcomeScreen.css";

function WelcomeScreen() {
  return (
    <div className="WelcomeScreen">
      <h1>Welcome Screen</h1>
      <MediumBtn text={"Start"} onClickFunc={() => console.log("test")} />
    </div>
  );
}

export default WelcomeScreen;

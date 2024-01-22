import MediumBtn from "../../components/MediumBtn/MediumBtn";
import "./WelcomeScreen.css";

export let i = 0;
function WelcomeScreen() {
  return (
    <div className="WelcomeScreen">
      <h1>Welcome Screen</h1>
      <MediumBtn
        text={"Start"}
        onClickFunc={() => {
          i = 1;
          console.log(i);
        }}
      />
    </div>
  );
}

export default WelcomeScreen;

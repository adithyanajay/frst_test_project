import "./App.css";
import Playground from "./components/Playground/Playground";
import WelcomeScreen from "./pages/WelcomeScreen/WelcomeScreen";
import QuizScreen from "./pages/QuizScreen/QuizScreen";
import ResultScreen from "./pages/ResultScreen/ResultScreen";
import { Result, Screen } from "./context/index";
import { useState } from "react";

//Write your code here..............


function App() {
  const screens = [WelcomeScreen, QuizScreen, ResultScreen];
  const [currentScreen, setCurrentScreen] = useState(1);
  return (
    <div className="App">
      <Screen.Provider value={{ currentScreen, setCurrentScreen }}>
        <Playground Component={screens[currentScreen]} />
      </Screen.Provider>
    </div>
  );
}

export default App;

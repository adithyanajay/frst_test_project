// Write your code here..............

import "./App.css";
import Playground from "./components/Playground/Playground";
import WelcomeScreen from "./pages/WelcomeScreen/WelcomeScreen";
import QuizScreen from "./pages/QuizScreen/QuizScreen";
import ResultScreen from "./pages/ResultScreen/ResultScreen";
import { Screen } from "./context/index";
import { useState } from "react";

function App() {
  const screens = [WelcomeScreen, QuizScreen, ResultScreen];
  const [currentScreen, setCurrentScreen] = useState(0);
  return (
    <div className="App">
      <Screen.Provider value={{ currentScreen, setCurrentScreen }}>
        <Playground Component={screens[currentScreen]} />
      </Screen.Provider>
    </div>
  );
}

export default App;

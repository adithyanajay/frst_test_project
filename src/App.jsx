import "./App.css";
import Playground from "./components/Playground/Playground";
import WelcomeScreen from "./pages/WelcomeScreen/WelcomeScreen";
import QuizScreen from "./pages/QuizScreen/QuizScreen";
import ResultScreen from "./pages/ResultScreen/ResultScreen";
import { Result, Screen } from "./context/index";
import { useState } from "react";

function App() {
  const screens = [WelcomeScreen, QuizScreen, ResultScreen];
  const [resultCount, setResultCount] = useState(0);
  const [currentScreen, setCurrentScreen] = useState(1);
  return (
    <div className="App">
      <Result.Provider value={{ resultCount, setResultCount }}>
        <Screen.Provider value={{ currentScreen, setCurrentScreen }}>
          <Playground Component={screens[currentScreen]} />
        </Screen.Provider>
      </Result.Provider>
    </div>
  );
}

export default App;

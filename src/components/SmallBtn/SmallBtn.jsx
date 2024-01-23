import "./SmallBtn.css";
import { Result } from "../../context";
import { useContext } from "react";

//for testing purpose
export function GetResultCount() {
  const { resultCount, setResultCount } = useContext(Result);
  if (resultCount) {
    setResultCount((prev) => prev + 1);
    return resultCount;
  }
}

function SmallBtn({ text, onClickFunc }) {
  return (
    <button className="SmallBtn" onClick={onClickFunc}>
      <p className="SmallBtn-text">{text}</p>
    </button>
  );
}

export default SmallBtn;

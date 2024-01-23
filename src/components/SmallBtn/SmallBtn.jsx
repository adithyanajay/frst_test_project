import "./SmallBtn.css";
import { Result } from "../../contextApi";
import { useContext } from "react";

//for testing purpose
function GetResultCount() {
  const { resultCount, setResultCount } = useContext(Result);
  if(resultCount) {
    setResultCount(prev=>prev+1)
    return result;
  }
}


function SmallBtn({ text, onClickFunc }) {
  return (
    <button className="SmallBtn" onClick={onClickFunc}>
      <p className="SmallBtn-text">{text}</p>
    </button>
  );
}

export default {GetResultCount} SmallBtn;

import "./SmallBtn.css";

function SmallBtn({ text, onClickFunc }) {
  return (
    <button className="SmallBtn" onClick={onClickFunc}>
      <p className="SmallBtn-text">{text}</p>
    </button>
  );
}

export default SmallBtn;

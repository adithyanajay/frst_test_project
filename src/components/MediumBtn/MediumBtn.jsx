import "./MediumBtn.css";

function MediumBtn({ text, onClickFunc }) {
  return (
    <button className="MediumBtn" onClick={onClickFunc}>
      <p className="MediumBtn-text">{text}</p>
    </button>
  );
}

export default MediumBtn;

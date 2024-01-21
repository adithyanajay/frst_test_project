import "./Playground.css";

function Playground({ component }) {
  return (
    <div className="Playground">
      <h1 className="Playground-heading">country quiz</h1>
      <div className="MainMenu-content-sec">
        <component />
      </div>
    </div>
  );
}

export default Playground;

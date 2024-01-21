import "./Playground.css";

function Playground({ Component }) {
  return (
    <div className="Playground">
      <h1 className="Playground-heading">country quiz</h1>
      <div className="Playground-content-sec">
        <Component />
      </div>
    </div>
  );
}

export default Playground;

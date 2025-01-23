import "./State.css";

function State({ checkboxHandler }) {
  
  return (
    <div>
      <h2 className="sidebar-title">Condição</h2>
      <div className="sidebar-state">
        <label htmlFor="semi" className="sidebar-label-container">
          <input id="semi" type="checkbox" value="semi" className="input-state" onChange={checkboxHandler} />
          Semi
        </label>
        <label htmlFor="new" className="sidebar-label-container">
          <input id="new" type="checkbox" value="new" className="input-state" onChange={checkboxHandler} />
          New
        </label>
      </div>
    </div>
  );
}

export default State;

import "./Brands.css";

function Brands({ checkboxHandler }) {

  return (
    <div>
      <h2 className="sidebar-title">Marcas</h2>
      <div className="sidebar-brands">
        <label htmlFor="evga" className="sidebar-label-container">
          <input id="evga "type="checkbox" value="evga" className="input-brand" onChange={checkboxHandler} />
          Evga
        </label>
        <label htmlFor="redragon" className="sidebar-label-container">
          <input id="redragon" type="checkbox" value="redragon" className="input-brand" onChange={checkboxHandler}/>
          Redragon
        </label>
        <label htmlFor="hyperFury" className="sidebar-label-container">
          <input id="hyperfury" type="checkbox" value="hyperfury" className="input-brand" onChange={checkboxHandler}/>
          Hyper Fury
        </label>
        <label htmlFor="corsair" className="sidebar-label-container">
          <input id="corsair" type="checkbox" value="corsair" className="input-brand" onChange={checkboxHandler}/>
          Corsair
        </label>
      </div>
    </div>
  );
}

export default Brands;

import "./Price.css";

function PriceInput ({ handleMinPriceChange, handleMaxPriceChange, minPrice, maxPrice }) {

  return (
    <div>
      <h2 className="sidebar-title">Preços</h2>
      <div className="sidebar-price">
        <input type="number" value={minPrice} min="0" max="1100" className="input-price" onChange={handleMinPriceChange} />
        <p>à</p>
        <input type="number" value={maxPrice} min="0" max="2000" className="input-price" onChange={handleMaxPriceChange} />
      </div>
    </div>
  );
}

export default PriceInput;

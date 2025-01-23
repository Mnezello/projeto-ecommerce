import "./Sales.css";

function Sales({ checkboxHandler }) {

  return (
    <div className="sidebar-sales">
      <h2 className="sidebar-title-sales">Promoções</h2>
      <input type="checkbox" value="sale" className="input-sale" onChange={checkboxHandler} />
    </div>
  );
}

export default Sales;

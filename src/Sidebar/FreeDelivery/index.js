import "./FreeDelivery.css";

function FreeDelivery({ checkboxHandler }) {
  
  return (
    <div className="sidebar-free-delivery">
      <h2 className="sidebar-title-free-delivery">Entrega grátis</h2>
      <input type="checkbox" value="free" className="input-freeDelivery" onChange={checkboxHandler} />
    </div>
  );
}

export default FreeDelivery;

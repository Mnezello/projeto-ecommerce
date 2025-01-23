import Sales from "./Sales";
import FreeDelivery from "./FreeDelivery";
import Brands from "./Brands";
import State from "./State";
import Category from "./Category";
import PriceInput from "./PriceInput";
import "./Sidebar.css";

const Sidebar = ({ checkboxHandler, handleMinPriceChange, handleMaxPriceChange,  minPrice, maxPrice }) => {
  
  return (
    <div className="Sidebar">
        <Sales checkboxHandler={checkboxHandler} />
        <FreeDelivery checkboxHandler={checkboxHandler} />
        <Brands  checkboxHandler={checkboxHandler} />
        <State checkboxHandler={checkboxHandler} />
        <Category checkboxHandler={checkboxHandler}/>
        <PriceInput  
          handleMinPriceChange={handleMinPriceChange}
          minPrice={minPrice}
          handleMaxPriceChange={handleMaxPriceChange}
          maxPrice={maxPrice}
        />
    </div>
  );
};

export default Sidebar;

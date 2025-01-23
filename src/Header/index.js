import { useContext } from "react";
import CartContext from "../context/cart/CartContext";
import Dropdown from 'react-bootstrap/Dropdown';
import Cart from './Cart';
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from 'react-icons/fa';
import './Header.css';

const Header = ({ query, handleInputChange, onSearch }) => {

  //Context do carrinho
  const { cartItems, itemCount } = useContext(CartContext);

  return (
    <div className="Header">
      <nav className="nav">
        <div  className="company-logo">
          My company
        </div>  
        <div className="product-search">
          <label>Busque seu produto</label>
          <div>
            <input
              className="search-input"
              type="text"
              onChange={handleInputChange}
              value={query}
              />
            <button className="search-button" onClick={() => onSearch(query)}>
              <FaSearch size={14} className="search-icon"/>
            </button>
          </div>
        </div>
        <div  className="cart-container">
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
                <FaShoppingCart size={20} className="cart-icon"/>
                {cartItems.length >= 0 && (
                  <div className="cart-qtd">{itemCount === undefined ? <span>0</span> : itemCount}</div>
                )}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item id="cart-details-containter">
                <div >
                  <Cart />
                </div>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </nav>
    </div>
  );
}

export default Header;

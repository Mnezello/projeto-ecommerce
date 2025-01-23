import ProductCard from './ProductCard';
import './Products.css';

const Products = ({  products }) => {

  return (
    <div className="card-container">
      {products.map((product) => (
          <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;

import { useState, useEffect, useMemo } from 'react';
import './App.css';
import Header from './Header';
import Products from './Products';
import Sidebar from './Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  //State db inicial
  const [products, setProducts] = useState([]);

  //State dos filtros
  const [filterTags, setFilterTags] = useState([]);

  //State dos produtos procurados
  const [seekProducts, setSeekProducts] = useState([]);

  //State da query
  const [query, setQuery] = useState("");

  //State preço mínimo
  const [minPrice, setMinPrice] = useState(0);

  //State Array preço mínimo
  const [minPriceArr, setMinPriceArr] = useState([0]);

  //State preço máximo
  const [maxPrice, setMaxPrice] = useState(2000);

  //State Array preço máximo
  const [maxPriceArr, setMaxPriceArr] = useState([2000]);


  //Consumindo o json
  useEffect(() => {
    const fetchData = async () => {
    try {
        const response = await fetch("/db.json");
        const jsonData = await response.json();
        setProducts(jsonData);
        return products;
    } catch (error) {
        console.log(error, "error"); 
    }
    };
    fetchData();
  },);


  //Memória dinâmica da data dos produtos
  const filteredProducts = useMemo(() => {
    const hasCategoryFilter = filterTags.length === 1 ;
    const hasMoreFilters = filterTags.length > 1;
    const reduceFilters = (
      filterTags.includes("sale") || 
      filterTags.includes("free") || 
      filterTags.includes("evga") || 
      filterTags.includes("redragon") || 
      filterTags.includes("hyperfury") || 
      filterTags.includes("corsair") || 
      filterTags.includes("semi") ||
      filterTags.includes("new"));
    const noQuery = seekProducts.length === 0;
    const hasMinPrice = minPriceArr.length !== 0;
    const hasMaxPrice =maxPriceArr.length !== 0;

    //Filtros baseados nos checkbox
    const matchesFilters = (prod) => {
      //Apenas um filtro
      if (hasCategoryFilter) {
        if(noQuery){
          if(hasMinPrice || hasMaxPrice){
            return filterTags.some((filterTag) =>
              prod.tags.map((tag) => tag.slug).includes(filterTag)) &&
                minPriceArr.some((el) => 
                  prod.price >= el) &&
                  maxPriceArr.some((el) => 
                    prod.price <= el);
          } else {
            return filterTags.some((filterTag) =>
               prod.tags.map((tag) => tag.slug).includes(filterTag));
          }
        } else {
          if(hasMinPrice || hasMaxPrice){
            return seekProducts.every((el) => 
              prod.name.toLowerCase().includes(el.toLowerCase()) &&
                filterTags.every((filterTag) =>
                  prod.tags.map((tag) => tag.slug).includes(filterTag))) &&
                    minPriceArr.some((el) => 
                      prod.price >= el) &&
                        maxPriceArr.some((el) => 
                          prod.price <= el);
          } else {
            return seekProducts.every((el) => 
              prod.name.toLowerCase().includes(el.toLowerCase()) && 
                filterTags.every((filterTag) =>
                  prod.tags.map((tag) => tag.slug).includes(filterTag)));
          }
        } 
      }
      
      //Mais de um filtro
      if (hasMoreFilters){
        if(reduceFilters){
          if(noQuery){
            if(hasMinPrice || hasMaxPrice){
              return filterTags.every((filterTag) =>
                prod.tags.map((tag) => tag.slug).includes(filterTag)) &&
                  minPriceArr.some((el) => 
                    prod.price >= el) &&
                      maxPriceArr.some((el) => 
                        prod.price <= el);
            } else {
              return filterTags.every((filterTag) =>
                prod.tags.map((tag) => tag.slug).includes(filterTag));
            }
          } else {
            if(hasMinPrice || hasMaxPrice){
              return seekProducts.every((el) => 
                prod.name.toLowerCase().includes(el.toLowerCase()) && 
                  filterTags.every((filterTag) =>
                    prod.tags.map((tag) => tag.slug).includes(filterTag))) &&
                      minPriceArr.some((el) => 
                        prod.price >= el) &&
                          maxPriceArr.some((el) => 
                            prod.price <= el);
            } else {
              return seekProducts.every((el) => 
                prod.name.toLowerCase().includes(el.toLowerCase()) &&
                  filterTags.every((filterTag) =>
                    prod.tags.map((tag) => tag.slug).includes(filterTag)));
            } 
          }
        } else {
          if(noQuery){
            if(hasMinPrice || hasMaxPrice){
              return filterTags.some((filterTag) =>
                prod.tags.map((tag) => tag.slug).includes(filterTag)) &&
                  minPriceArr.some((el) => 
                    prod.price >= el) &&
                      maxPriceArr.some((el) => 
                        prod.price <= el);
            } else {
              return filterTags.some((filterTag) =>
                prod.tags.map((tag) => tag.slug).includes(filterTag)); 
            }
          } else {
            if(hasMinPrice || hasMaxPrice){
              return filterTags.some((filterTag) =>
                prod.tags.map((tag) => tag.slug).includes(filterTag)) && 
                  seekProducts.every((el) => 
                    prod.name.toLowerCase().includes(el.toLowerCase())) &&
                      minPriceArr.some((el) => 
                        prod.price >= el) &&
                          maxPriceArr.some((el) => 
                            prod.price <= el);
            } else {
              return filterTags.some((filterTag) =>
                prod.tags.map((tag) => tag.slug).includes(filterTag)) && 
                  minPriceArr.some((el) => 
                    prod.price >= el) &&
                      maxPriceArr.some((el) => 
                        prod.price <= el);
            }
          }
        }
      } else {
        if(noQuery){
           if(hasMinPrice || hasMaxPrice){
           return minPriceArr.some((el) => 
             prod.price >= el) &&
              maxPriceArr.some((el) => 
                prod.price <= el);
          } else {
            return true;
          }
        } else {
          if(hasMinPrice || hasMaxPrice){
            return seekProducts.every((el) => 
              prod.name.toLowerCase().includes(el.toLowerCase())) &&
                minPriceArr.some((el) => 
                  prod.price >= el) &&
                  maxPriceArr.some((el) => 
                    prod.price <= el);
          } else {
            return seekProducts.every((el) => 
              prod.name.toLowerCase().includes(el.toLowerCase()));
          }
        }
      }
    };

    return products
      .filter(matchesFilters);
  }, [products, filterTags, seekProducts, minPriceArr, maxPriceArr]);


  //Função insere e remove as tags de filtros
  function checkboxHandler(e){
    if (e.target.checked) {
      filterTags.push(e.target.value);
    } else {
      removeProductsFilters(e.target.value)
    }
  }

  function removeProductsFilters(value) {
    const remove = filterTags.findIndex((el) => el === value);
    filterTags.splice(remove, 1);
  } 
    

  //Pequisa 
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const onSearch = (searchTerm) => {
    if(seekProducts === 0){
      seekProducts.push(searchTerm)
    } else {
      seekProducts.pop();
      if(searchTerm !== ''){
        seekProducts.push(searchTerm)
      }
    }
  }


  //Preços 
  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
    if(minPriceArr.length === 0){
      minPriceArr.push(event.target.value);
    } else {
      minPriceArr.pop();
      minPriceArr.push(event.target.value);
    }
    console.log(minPriceArr);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
    if(maxPriceArr.length === 0){
      maxPriceArr.push(event.target.value);
    } else {
      maxPriceArr.pop();
      maxPriceArr.push(event.target.value);
    }
    console.log(maxPriceArr);
  };

  
  return (
    <div className="App">
      <Header 
        query={query} 
        handleInputChange={handleInputChange} 
        onSearch={onSearch} 
      />
      <div className="container">
        <div className="row flex-row">
          <div className="col-3 p-0">
            <Sidebar 
              checkboxHandler={checkboxHandler}
              handleMinPriceChange={handleMinPriceChange}
              minPrice={minPrice}
              handleMaxPriceChange={handleMaxPriceChange}
              maxPrice={maxPrice}
            />
          </div>
          <div className="col-9 p-0">
            <div>
              <Products 
                products={filteredProducts}
                />
            </div>
          </div>
        </div>
      </div> 
    </div>  
  );
}

export default App;

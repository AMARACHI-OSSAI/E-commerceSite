import React, { useState, createContext, useContext} from 'react'
import { ProductContext } from './ProductContext';

export const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  // states for handling the search
  const [search, setSearch] = useState("");
  const [togglesearch, setTogglesearch] = useState(false);

  const [result, setResult] = useState([]);

  const {products} = useContext(ProductContext);

  const handleFilteredSearch = () =>{
    setTogglesearch(true);
    const filteredProducts = products?.filter((searchedItems)=> searchedItems.title.toLowerCase().includes(search));
    setResult(filteredProducts);
  }

  const handleChange = (e) => {
    setSearch(e.target.value.toLowerCase());
    console.log(search);
  };


  return (
    <SearchContext.Provider value={{search, setSearch, togglesearch, handleChange, setTogglesearch, handleFilteredSearch, result}}>
      {children}
    </SearchContext.Provider>  )
}

export default SearchProvider
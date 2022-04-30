import { useEffect, useState } from "react"

const useProduct = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch('https://cryptic-everglades-64697.herokuapp.com/product')
    .then(res => res.json())
    .then(data => setProduct(data));
  }, []);
  return [product, setProduct];
}

export default useProduct;
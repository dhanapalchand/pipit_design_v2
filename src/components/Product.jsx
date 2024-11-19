import { useState } from "react";
import { useEffect } from "react";
import ProductCard from "./ProductCard";
import '../css/product.css';

import Topbar from "./Topbar";
function Product() {
    const [arr, setArr] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selecetCat, setselectCat] = useState("");

    const [result, setresult] = useState([])
    useEffect(() => {
        if (selecetCat === "") {
            setresult(arr);
        }
        else {
            const result = arr.filter((item) => item.category == selecetCat)
            console.log(result)
            setresult(result);
        }

    }, [selecetCat])
    useEffect(() => {
        fetch("https://fakestoreapi.com/products").then((res) => {
            return res.json()

        }).then((json) => {
            setArr(json);
            setresult(json);
            // console.log(json);
            const c = json.map((item) => item.category)
            setCategories([...new Set(c)]);

        }).catch();
    }, []);

    // console.log("hello",arr); 
    console.log(selecetCat)
    // setCategories(k);


    return (
        <>
            <Topbar categories={categories} setselectCat={setselectCat} />
          
            <div style={{ display: 'flex', flexWrap: 'wrap' ,justifyContent: 'center'}}>
                {result.map((item,index) => (
                    <ProductCard key={index} item={item} />
                ))}
            </div>
        </>
    )
}
export default Product

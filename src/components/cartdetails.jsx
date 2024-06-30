// function cartdetails(){
//     return (
//         <>
//         cartpage
//         </>
//     )
// }
// export default cartdetails;

import React from 'react';
import { useDispatch } from 'react-redux';
import { decrementQuantity, incrementQuantity, itemsAdded,itemsDelete } from '../reducers/cartSlice';
import { toast } from 'react-toastify';
import '../css/cart.css';
import { CiSquareMinus } from "react-icons/ci";
import { CiSquarePlus } from "react-icons/ci";


function cartdetails(props) {
    
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(itemsDelete(props.item.id));
        toast.error(props.item.title+"was removed from cart successfully",{position:"bottom-right",autoClose:2000})
    };
    

    const handleIncrement = () => {
        dispatch(incrementQuantity(props.item.id));
    };

    const handleDecrement = () => {
       
       
                dispatch(decrementQuantity(props.item.id));
            
    };

    return (<>
    <div style={{display:"flex",flexDirection:"column"}} className='my-0 mx-0'>
     
             <div className="product-card-page">
             <div className="product-image-page">
            <img src={props.item.image} alt={props.item.title} />
            </div>
            <div className="product-info">
            <h2 className="product-title">{props.item.title}</h2> <div style={{display:"flex"}}>
            <div className="product-price mt-2 ml-4" style={{color:"#2874f0",fontWeight:"500"}} >₹{Math.round(props.item.quantity*props.item.price *100)/100}</div>
           
          <div></div>
            <button onClick={handleIncrement} className='btn ml-2 mb-3' style={{}}><CiSquarePlus style={{fontSize:"20px",fontWeight:"700"}} /></button> <div style={{color:"#2874f0",fontWeight:"500",marginTop:9}}>{props.item.quantity}</div>
            <button onClick={handleDecrement} className='btn  mb-3'><CiSquareMinus  style={{fontSize:"20px",fontWeight:"700"}} /></button>  </div>

            <button onClick={handleDelete} className='btn' style={{background:"#2874f0",color:"white",fontWeight:"500"}}>Remove from cart</button></div>
      
        </div>
        </div>
        
       
      
</>

    );
}

export default cartdetails;


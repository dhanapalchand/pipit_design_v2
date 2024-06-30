import { useSelector } from "react-redux";
import Cartdetails from './cartdetails';
import Slider from 'react-slick';
import { useEffect, useState } from "react";
import { BsCartX } from "react-icons/bs";
import { Link } from "react-router-dom";
function Cart(){


    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: false,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
              infinite: false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false
            }
          }
        ]
      };
  
      const[total,setTotal]=useState(0);
      const[totquantity,setTotquantity]=useState(0);
    const cartitems=useSelector((state)=>state.cart.items)
    useEffect(() => {
        const newTotal = cartitems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        const newQuantity =cartitems.reduce((accc, item) => accc +  item.quantity, 0);
        const roundedNumber = Math.round(newTotal * 100) / 100;
        console.log(newQuantity);
        setTotal(roundedNumber);
        setTotquantity(newQuantity);
       
      }, [cartitems]);
   
    
    console.log(cartitems)
    return(
      <div style={{ margin: '20px' }}>
      {cartitems.length === 0 ? (
      <div style={{ color: 'red',fontSize:'200%', fontWeight: 500, display: 'flex', justifyContent: 'center',flexDirection:'column', alignItems: 'center', height: '80vh' }}>< BsCartX style={{fontSize:'150%',fontWeight:'bolder'}} className="my-2"/>
      <div className="mb-2">No items found in cart</div>
      <button className="btn btn-primary" style={{height: '8vh'}} ><Link to="/Product" className="nav-link" style={{color:"white",fontWeight:700,padding:0}}>Continue Shopping</Link></button>
    </div>

      ) : (
        <>
          <Slider {...settings}>
            {cartitems.map((item, index) => (
              <Cartdetails key={index} item={item} />
            ))}
          </Slider>
          
         
          <div className="row" style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
          <h3 className="mt-4">Total Amount</h3>
          
         <div> Total Amount: ₹{total}<br></br></div>
        <div>  Total Quantity : {totquantity}</div>
       
        <div>  <button className="btn btn-danger mt-2">Continue to Payment !!</button></div>
          
            </div>

        
        </>
      )}
    </div>  
    )
}
export default Cart;
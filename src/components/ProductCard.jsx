import { useDispatch } from 'react-redux';
import { itemsAdded } from '../reducers/cartSlice';
import { toast } from 'react-toastify';
import { useState } from 'react';
import '../css/product.css';

function ProductCard(props) {
  const { title, description, price, image } = props.item || {};
  const dispatch = useDispatch();
  const [expand, setExpand] = useState(false);

  // Function to toggle description display
  const toggleDescription = () => {
    setExpand(!expand);
  };

  // Function to add item to cart
  const addItemToCart = () => {
    dispatch(itemsAdded(props.item));
    toast.success(`${title} was added to cart successfully`,{position:"bottom-right"});
  };

  return (
    <>
    <div>
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="product-info">
        <h2 className="product-title">{title}</h2>
        <p className={`product-description ${expand ? 'expanded' : ''}`} onClick={toggleDescription}>
          {description}
        </p>
        <div className="product-price">₹{price}</div>
        <button className="add-to-cart" onClick={addItemToCart}>Add to Cart</button>
      </div>
    </div>
    </div>
</>  );
}

export default ProductCard;

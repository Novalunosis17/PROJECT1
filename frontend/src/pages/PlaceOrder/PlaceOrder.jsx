import React, { useContext, useEffect, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {

  const {getTotalCartAmount, token,food_list,cartItems,url} = useContext(StoreContext)

  const [data,setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    baranggay:"",
    city:"",
    zipcode:"",
    province:"",
    phone:""
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  const placeOrder = async (event) => {
    event.preventDefault();
  
    let orderItems = [];
    food_list.forEach((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = { ...item, quantity: cartItems[item._id] };
        orderItems.push(itemInfo);
      }
    });
  
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 20,
    };
  
    try {
      const response = await axios.post(url + "/api/order/place", orderData, {
        headers: { token: token },
      });
  
      if (response.data.success) {
        alert("Order placed successfully! Please prepare payment upon delivery.");
        navigate('/myorders');
        // Optional: redirect or clear cart
      } else {
        alert("Error placing order.");
      }
    } catch (error) {
      console.error("Order placement error:", error);
      alert("Server error while placing order.");
    }
  }; 

  const navigate = useNavigate();
  
  useEffect(()=>{
    if (!token) {
      navigate('/cart')
    }
    else if(getTotalCartAmount()===0)
    {
      navigate('/cart')
    }
  },[token])

  return (
    <form onSubmit={placeOrder} className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='First name'/>
          <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Last name'/>
        </div>
        <input required name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Email Address'/>
        <input required name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='Street'/>
        <div className="multi-fields">
          <input required name='baranggay' onChange={onChangeHandler} value={data.baranggay} type="text" placeholder='Baranggay'/>
          <input required name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='City'/>
        </div>
        <div className="multi-fields">
          <input required name='zipcode' onChange={onChangeHandler} value={data.zipcode} type="text" placeholder='Zip code'/>
          <input required name='province' onChange={onChangeHandler} value={data.province} type="text" placeholder='Province'/>
        </div>
        <input required name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder='Phone #' />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
          <div className="cart-total-details">
                <p>Subtotal</p>
                <p>₱{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>₱{getTotalCartAmount()===0?0:20}</p>  
            </div>
            <hr />
            <div className="cart-total-details">
                <b>Total</b>
                <b>₱{getTotalCartAmount()===0?0:getTotalCartAmount()+20}</b>
            </div> 
          </div>
          <button type='submit'>PAY UPON DELIVERY</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder

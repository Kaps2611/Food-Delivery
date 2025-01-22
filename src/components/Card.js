import React, { useEffect, useRef, useState } from 'react'
import { useDispatchCart,useCart } from './ContextReducer';

export default function Card(props) {
  let dispatch = useDispatchCart();
  let data = useCart();
  const priceRef = useRef(); 
  let options = props.options;
  let priceOptions = Object.keys(options);
  const [qty,setQty ] = useState('1');
  const [size, setSize] = useState('');
  const handleAddToCart = async () =>{
    await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:finalPrice,qty:qty,size:size})
    console.log(data)
  }
  let finalPrice = qty*parseInt(options[size]);
  useEffect(()=>{
    setSize(priceRef.current.value)
  },[])
  return (
    <div>
      <div className="card mt-3 mr-3 bg-dark text-white " style={{ "width": "18rem", "maxHeight": "360px", borderInlineStartColor: "white",marginleft: "70px" }}>
        {/* <img src="https://images.unsplash.com/photo-1567234669003-dce7a7a88821?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" style={{ width: "100%" }} alt="..." /> */}
        <img src={props.foodItem.img} className="card-img-top" style={{ objectFit:"fill",height:"120px"}} alt="..." />

        <div className="card-body">
          <h5 className="card-title">{props.foodItem.name}</h5>
          {/* <p className="card-text">{props.foodDescription}</p> */}
          <div className='container w-100'>
            <select className='m-2 h-100  bg-success rounded' onChange={(e)=> setQty(e.target.value)}>
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                )
              })}
            </select>

            <select className='m-2 h-100  bg-success rounded' ref={priceRef} onChange={(e)=> setSize(e.target.value)}>
              {priceOptions.map((data)=>{
                return(
                  <option key={data} value={data}>{data}</option>

                )
              })}
            </select>
            <div className='d-inline h-100 fs-5'>
              {finalPrice}/-
            </div>
          </div>
          <hr></hr>

          <button className='btn btn-success jsutify-center ms-2 text-black' onClick={handleAddToCart}>Add to Cart</button>

        </div>
      </div>
    </div>
  )
}

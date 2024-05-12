import React from "react";
import "./cart.scss";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";
export default function Cart() {
  const cartProducts = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    dispatch(remove(id));
  };
  return (
    <>
      <div className="cart_page">
        {cartProducts.map((p) => (
          <div className="cart" key={p.id}>
            <img src={p.image} alt="" className="card-image" />
            <div className="cart-content">
              <h2 className="cart-title"> {p.title}</h2>
              <p className="cart-price"> Niara :{p.price}</p>
            </div>

            <button
              onClick={() => {
                removeFromCart(p.id);
              }}
            >
              Remove item
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

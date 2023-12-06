import { Backdrop, Card } from "@mui/material";
import styles from "./cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { toggleActions } from "../../../store/toggle-slice";
import { useState } from "react";

function Cart() {
  const [submited, setSubmited] = useState(false);
  const cartItem = useSelector((state) => state.cart.items);
  const dispatchFunc = useDispatch();
  const closeHandler = (event) => {
    if (event.target === event.currentTarget) {
      dispatchFunc(toggleActions.toggleShowCart());
    }
  };

  const isCartEmpty = cartItem.length === 0;

  const submithandler = () => {
    setSubmited(true);
  };

  return (
    <Backdrop open={true} sx={{ zIndex: 11 }} onClick={closeHandler}>
      <Card>
        <div className={styles.ttt}>
          <h1>My cart</h1>
        </div>
        <ul className={styles.main}>
          {cartItem.map((item) => (
            <CartItem
              key={item.id}
              item={{
                title: item.title,
                total: item.totalPrice,
                quantity: item.quantity,
                id: item.id,
              }}
            />
          ))}
        </ul>
        <div className={styles.actions}>
          <button onClick={closeHandler}>Exit</button>
          <button onClick={submithandler} disabled={isCartEmpty}>
            Submit
          </button>
          {submited && <p>Sent successful!</p>}
        </div>
      </Card>
    </Backdrop>
  );
}

export default Cart;

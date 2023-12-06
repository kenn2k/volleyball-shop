import { useDispatch } from "react-redux";
import styles from "./cartitem.module.css";
import { cartActions } from "../../../store/cart-slice";

function CartItem(props) {
  const { id, title, quantity, total } = props.item;
  const dispatchFunc = useDispatch();
  const incrementHandler = () => {
    dispatchFunc(
      cartActions.addToCart({
        id,
        title,
        total,
      })
    );
  };

  const decrementHandler = () => {
    dispatchFunc(cartActions.removeFromCart(id));
  };
  return (
    <li>
      <div className={styles.cardContainer}>
        <div className={styles.titleCost}>
          <h3>{title}</h3>
          <div className={styles.price}>${total.toFixed(2)}</div>
        </div>
        <div className={styles.details}>
          <div className={styles.quantity}>
            <span>x{quantity}</span>
            <div className={styles.actions}>
              <button onClick={incrementHandler}>+</button>
              <button onClick={decrementHandler}>-</button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default CartItem;

import { useDispatch } from "react-redux";
import styles from "./sneakersItem.module.css";
import { Grid } from "@mui/material";
import { cartActions } from "../../store/cart-slice";
function SneakersItem(props) {
  const dispatchFunc = useDispatch();
  const { title, price, image, id } = props;
  const formatted = `$${price.toFixed(2)}`;

  const addToCartHandler = () => {
    dispatchFunc(
      cartActions.addToCart({
        id,
        title,
        price,
      })
    );
  };
  return (
    <Grid item xs={6} md={3} lg={3} mb={2}>
      <div className={styles.card}>
        <li>
          <div className={styles.picture}>
            <img src={image} alt="" />
          </div>
          <div className={styles.text}>
            <p>{title}</p>
            {formatted}
          </div>
          <div className={styles.actions}>
            <button onClick={addToCartHandler}>Add to Cart</button>
          </div>
        </li>
      </div>
    </Grid>
  );
}

export default SneakersItem;

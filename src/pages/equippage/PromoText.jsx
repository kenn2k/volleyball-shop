import { useDispatch, useSelector } from "react-redux";
import Layer from "../../UI/Card/Layer";
import styles from "./promotext.module.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { toggleActions } from "../../store/toggle-slice";

function PromoText() {
  const quantity = useSelector((state) => state.cart.totalQuantity);
  const dispatchFunc = useDispatch();

  const openHandler = () => {
    dispatchFunc(toggleActions.toggleShowCart());
  };
  return (
    <section className={styles.promotext}>
      <div className={styles.sideCart}>
        <button className={styles.backdrop} onClick={openHandler}>
          <span className={styles.icon}>
            <ShoppingCartIcon />
          </span>
          <span className={styles.badge}>{quantity}</span>
        </button>
      </div>
      <div className={styles.wrapper}>
        <Layer />
        <div className={styles.content}>
          <img src="girl1.webp" alt="" />

          <div className={styles.text}>
            <h1>
              Revitalize your game with our elegant volleyball gear – stylish,
              functional, your path to success!
            </h1>
          </div>
          <img src="girl2.webp" alt="" />
        </div>
        <div className={styles.arrow}>
          <ArrowDownwardIcon />
        </div>
      </div>
    </section>
  );
}

export default PromoText;

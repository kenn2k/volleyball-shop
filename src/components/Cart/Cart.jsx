import { useSelector } from "react-redux";
import styles from "./cart.module.css";
import { Backdrop, Card } from "@mui/material";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <Backdrop open={true} sx={{ zIndex: 1 }}>
      <Card>fghf</Card>
    </Backdrop>
  );
}

export default Cart;

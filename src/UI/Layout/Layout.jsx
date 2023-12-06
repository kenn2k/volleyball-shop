import styles from "./layout.module.css";
import { Outlet, NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { toggleActions } from "../../store/toggle-slice";
import Cart from "../../pages/equippage/Cart/Cart";

function Layout() {
  const quantity = useSelector((state) => state.cart.totalQuantity);
  const dispatchFunc = useDispatch();
  const [nav, setNavbar] = useState(false);

  const navHandler = () => {
    setNavbar(!nav);
  };
  const setActive = ({ isActive }) => (isActive ? [styles.activity] : "");

  const openModalHandler = () => {
    dispatchFunc(toggleActions.toggleShowCart());
  };
  const visibility = useSelector((state) => state.toggle.showCart);

  return (
    <div className={styles.layout}>
      {visibility && <Cart />}
      <header>
        <div className={styles.appBar}>
          <div className={styles.wrapper}>
            <div onClick={navHandler} className={styles.burgerBtn}>
              {nav ? <CloseIcon /> : <MenuIcon />}
            </div>
            <h1>Sport</h1>
            <nav
              className={
                nav ? [styles.navbar, styles.active].join(" ") : [styles.navbar]
              }
            >
              <NavLink onClick={navHandler} className={setActive} to={`/`}>
                Homepage
              </NavLink>

              <div>
                <button className={styles.button} onClick={openModalHandler}>
                  <span className={styles.icon}>
                    <ShoppingCartIcon />
                  </span>
                  <span className={styles.badge}>{quantity}</span>
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;

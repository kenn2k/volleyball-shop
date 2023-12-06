import styles from "./footer.module.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
function Footer() {
  return (
    <section className={styles.footer} id="Contact">
      <div className={styles.container}>
        <div className={styles.inside}>
          <div className={styles.info}>
            <h1>Info</h1>
            <a href="#">Address</a>
            <a href="#">Promotions</a>
            <a href="#">Help</a>
            <a href="#">Returning the product</a>
            <a href="#">Delivery</a>
          </div>
          <div className={styles.info}>
            <h1>Category</h1>
            <a href="/equip">Equipment</a>
            <a href="#">Balls</a>
            <a href="#">Sneakers</a>
          </div>
          <div className={styles.info}>
            <h1>Contacts</h1>
            <a href="#">+153652131</a>
            <a href="#">vallshop@gmail.com</a>
          </div>
          <div className={styles.info}>
            <h1>Working Hours</h1>
            <p>
              <span>
                <AccessTimeIcon />
              </span>
              Mon - Fri: 8am - 7pm
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;

import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import styles from "./homepage.module.css";
import { useEffect } from "react";
function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className={styles.productRef}>
      <div className={styles.wrapper}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} lg={4}>
            <Link to={"/equip"}>
              <div className={styles.img}>
                <div className={styles.photo}>
                  <img
                    src="https://images.prom.ua/3524920988_w640_h640_rekomendovane-sporyadzhennya-dlya.jpg"
                    alt=""
                  />
                </div>
              </div>
            </Link>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Link to={"/balls"}>
              <div className={styles.img}>
                <div className={styles.photo2}>
                  <img
                    src="https://football-world.com.ua/uploads/wysiwyg/896b15e31be396f20345206f07814ccf22ce64ea.jpg"
                    alt=""
                  />
                </div>
              </div>
            </Link>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Link to={"/sneakers"}>
              <div className={styles.img}>
                <div className={styles.photo3}>
                  <img
                    src="https://www.ballgames.ru/img/volleyball-sneakers-h3.jpg"
                    alt=""
                  />
                </div>
              </div>
            </Link>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}

export default HomePage;

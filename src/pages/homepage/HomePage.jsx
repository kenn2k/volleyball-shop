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
                    src="https://cdn.leonardo.ai/users/9c3e42fb-d0b2-484e-ac4c-86cb3d95b25e/generations/14502f43-7dd0-425e-8264-6ca080bea505/Default_generate_girl_who_wears_sport_volleyball_equipment_kne_0.jpg"
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
                    src="https://cdn.leonardo.ai/users/9c3e42fb-d0b2-484e-ac4c-86cb3d95b25e/generations/848ac9b4-fea6-4f51-86eb-e9d1939ac019/Default_Many_sports_sneakers_for_volleyball_0.jpg"
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

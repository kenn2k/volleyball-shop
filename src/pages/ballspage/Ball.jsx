import styles from "./ball.module.css";
import BallItem from "./BallItem";
import { Grid } from "@mui/material";
import Category from "./category/Category";
import { useState } from "react";
import { useSelector } from "react-redux";

const BALLS = [
  {
    id: "1",
    title: "Mikasa MVA200",
    price: 50.99,
    image:
      "https://vsv-sport.com/wp-content/uploads/2021/06/mikasa-mva-200-volleyball-ball.jpg",
  },
  {
    id: "2",
    title: "Molten FIVB V5M5000",
    price: 45.75,
    image:
      "https://onlyballs.com.ua/image/cache/catalog/data/Molten/voleyball/item-thumbnail-821-1-1000x1000-800x800.jpg",
  },
  {
    id: "3",
    title: "Wilson AVP Official Beach",
    price: 39.99,
    image:
      "https://raketka.ua/image/cache/catalog/2023/06/04/Wilson%20OPTX%20AVP%20Official%20GB%20Size%205%20SS20%20WTH00020XB%202-900x900.jpg",
  },
  {
    id: "4",
    title: "Tachikara SV5W Gold Competition",
    price: 34.5,
    image:
      "https://gophersport.com/media/catalog/product/cache/6ea1bff88931c9308bfe8bc576b10d8e/g/-/g-61715-white-official-leather-volleyball-plp.jpg",
  },

  {
    id: "6",
    title: "Molten V5M4500",
    price: 47.8,
    image:
      "https://molten.com.au/cdn/shop/products/V5M4500Updated_900x.jpg?v=1602480732",
  },
  {
    id: "7",
    title: "Mikasa VLS300",
    price: 52.5,
    image:
      "https://onlyballs.com.ua/image/cache/catalog/data/Mikasa/1995.2000x1500-1000x1000-500x500.jpg",
  },
  {
    id: "8",
    title: "Tachikara SV18S",
    price: 36.99,
    image: "https://m.media-amazon.com/images/I/61MrXct+daL.jpg",
  },
  {
    id: "9",
    title: "Wilson Cast Away",
    price: 41.25,
    image:
      "https://m.media-amazon.com/images/I/71RSy4EN8xL._AC_UF1000,1000_QL80_.jpg",
  },

  {
    id: "11",
    title: "Mikasa V200W",
    price: 48.75,
    image: "https://images.prom.ua/3256755792_w640_h640_3256755792.jpg",
  },
  {
    id: "12",
    title: "Molten V58L-3",
    price: 42.99,
    image: "https://i.ebayimg.com/images/g/8BYAAOSwzZ5k6Xpd/s-l1200.jpg",
  },
  {
    id: "13",
    title: "Wilson AVP Quicksand",
    price: 37.5,
    image: "https://m.media-amazon.com/images/I/61BhO9P7ZoL.jpg",
  },
  {
    id: "14",
    title: "Tachikara SV5WSC",
    price: 45.25,
    image:
      "https://m.media-amazon.com/images/I/61sKP1rdxvL._AC_UF1000,1000_QL80_.jpg",
  },

  {
    id: "16",
    title: "Mikasa V330W",
    price: 49.99,
    image: "https://superliga.com.ua/imgs/bg41709.jpg",
  },
  {
    id: "17",
    title: "Molten V5M5000-3",
    price: 40.5,
    image:
      "https://cdn11.bigcommerce.com/s-irb16l/products/1090/images/5844/molten_flistatec_volleyball_v5m5000_3USA_480__42257.1393708052.500.659.jpg?c=2",
  },
  {
    id: "18",
    title: "Wilson AVP Ipanema",
    price: 35.75,
    image:
      "https://www.animasportiva.com/media/catalog/product/cache/3973fa71a3adb98a1c0ff4879f4665ab/W/T/WTH306202-0-1.jpg",
  },
  {
    id: "19",
    title: "Tachikara Sensi-Tec",
    price: 38.99,
    image: "https://m.media-amazon.com/images/I/817rpZSsdHL._AC_SL1500_.jpg",
  },
];

function Ball() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredBalls = BALLS.filter((ball) => {
    return selectedCategory === "All" || ball.title.includes(selectedCategory);
  });

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <section className={styles.products}>
      <div className={styles.sideFilter}>
        <Category onCategoryChange={handleCategoryChange} />
      </div>

      <div className={styles.wrapper}>
        <ul>
          <Grid container spacing={2}>
            {filteredBalls.map((ball) => (
              <BallItem
                id={ball.id}
                key={ball.id}
                title={ball.title}
                price={ball.price}
                image={ball.image}
              />
            ))}
          </Grid>
        </ul>
      </div>
    </section>
  );
}

export default Ball;

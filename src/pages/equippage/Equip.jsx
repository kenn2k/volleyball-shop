import styles from "./equip.module.css";
import EquipItem from "./EquipItem";
import { Grid } from "@mui/material";
const volleyballGear = [
  {
    id: "1",
    image:
      "https://otagosportsdepot.co.nz/cdn/shop/products/0c975df0dbded889f0dfbcb30fd4433af126739d_1024x.jpg?v=1571438689",
    price: 24.99,
    title: "Molten Volleyball Knee Pads",
  },
  {
    id: "2",
    image: "https://m.media-amazon.com/images/I/51vSOSDYXTL.jpg",
    price: 39.99,
    title: "Zamst Ankle Braces",
  },
  {
    id: "3",
    image:
      "https://m.media-amazon.com/images/I/81-Hl2amv6L._AC_UF1000,1000_QL80_.jpg",
    price: 89.99,
    title: "Wilson Volleyball Net",
  },
  {
    id: "4",
    image:
      "https://bluechipathletic.com/cdn/shop/products/adidas-duffle-bag-grey-front-63079ff2b34de_2000x.jpg?v=1661444091",
    price: 49.99,
    title: "Adidas Volleyball Bag",
  },
  {
    id: "5",
    image:
      "https://zabsportsapparel.com/cdn/shop/files/Af642d00f665947838f059c5a8281b341a.jpg?v=1695056389",
    price: 29.99,
    title: "Under Armour Volleyball Jersey",
  },
  {
    id: "6",
    image:
      "https://mcdavid.eu/cdn/shop/products/mcdavid-phantom-2-ankle-brace-4303-818058.jpg?v=1697008478",
    price: 44.99,
    title: "Mizuno Volleyball Ankle Braces",
  },
  {
    id: "7",
    image:
      "https://www.simplyhike.co.uk/cdn/shop/products/xlarge_clean_c5bb225b-f1fb-4dfe-8270-371edada1c6a.jpg?v=1648728984",
    price: 14.99,
    title: "Volleyball Socks",
  },
  {
    id: "8",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuv1eoxvLlfo_nFZ5L7z4fHjwJ3mztvFTHA&usqp=CAU",
    price: 9.99,
    title: "Referee Whistle",
  },

  // Добавьте другие предметы волейбольной экипировки по аналогии
];

function Equip() {
  return (
    <section className={styles.products}>
      <div className={styles.wrapper}>
        <ul>
          <Grid container spacing={2}>
            {volleyballGear.map((card) => (
              <EquipItem
                id={card.id}
                key={card.id}
                title={card.title}
                price={card.price}
                image={card.image}
              />
            ))}
          </Grid>
        </ul>
      </div>
    </section>
  );
}

export default Equip;

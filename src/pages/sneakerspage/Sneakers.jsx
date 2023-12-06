import styles from "./sneakers.module.css";
import SneakersItem from "./SneakersItem";
import { Grid } from "@mui/material";

const SNEAKERS = [
  {
    id: "vball_001",
    title: "Nike Air Zoom Hyperace",
    price: 129.99,
    image:
      "https://a.allegroimg.com/s600/11da77/7ef6582e4deca7a9726fd24f1253/NIKE-BUTY-DO-SIATKOWKI-AIR-ZOOM-HYPERACE-2.webp",
  },
  {
    id: "vball_002",
    title: "Crazyflight Bounce",
    price: 109.99,
    image:
      "https://fair.ua/image/cache/catalog/photo_prod/11327870/0_crazyflight-bounce-3-1200x1200.jpg",
  },
  {
    id: "vball_003",
    title: "Mizuno Wave Lightning Z5",
    price: 139.99,
    image: "https://content2.rozetka.com.ua/goods/images/big/125240519.jpg",
  },
  {
    id: "vball_004",
    title: "ASICS Gel Rocket 9",
    price: 79.99,
    image:
      "https://footballmall.com.ua/image/catalog/products/obuv/muzhska/puma/18_02/%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_2023-02-18_131548917.png",
  },
  {
    id: "vball_005",
    title: "Under Armour Block City 2.0",
    price: 89.99,
    image:
      "https://fair.ua/image/cache/catalog/photo_prod/11334137/0_ua-block-city-2-0-1200x1200.jpg",
  },
  {
    id: "vball_006",
    title: "New Balance 860v11",
    price: 119.99,
    image:
      "https://footballmall.com.ua/image/catalog/products/obuv/muzhska/puma/18_02/%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_2023-02-18_131548917.png",
  },
  {
    id: "vball_007",
    title: "Brooks Launch 7",
    price: 99.99,
    image: "https://content1.rozetka.com.ua/goods/images/big/176453115.jpg",
  },
  {
    id: "vball_008",
    title: "PUMA Rise XT 4",
    price: 69.99,
    image: "https://www.tradeinn.com/f/13693/136931343/puma-rise-xt-4.jpg",
  },
  {
    id: "vball_009",
    title: "Under Armour Charged Attack",
    price: 109.99,
    image:
      "https://alssports.vtexassets.com/arquivos/ids/802634-800-auto?v=637624132660430000&width=800&height=auto&aspect=true",
  },
  {
    id: "vball_010",
    title: "ASICS Gel Upcourt",
    price: 59.99,
    image:
      "https://raketka.ua/image/cache/catalog/2017/04/02/krossovkivolejbolnyeasicsgelupcourtb400n0143-900x900.jpg",
  },
  {
    id: "vball_011",
    title: "Nike React Hyperset",
    price: 149.99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8fHs3iV_GaPROYEVmZU1j7N3J9BLLq_UL_g&usqp=CAU",
  },
  {
    id: "vball_012",
    title: "Mizuno Wave Voltage",
    price: 129.99,
    image: "https://images.prom.ua/5005044121_w600_h600_5005044121.jpg",
  },
  {
    id: "vball_013",
    title: "Adidas Ligra 6",
    price: 79.99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL1_Qpp0K6qmPHIr3NOU4fIqBmiDYKTGtoHQ&usqp=CAU",
  },
  {
    id: "vball_014",
    title: "Under Armour",
    price: 119.99,
    image: "https://imgcentauro-a.akamaihd.net/1366x1366/96725457A3.jpg",
  },
  {
    id: "vball_015",
    title: "ASICS Upcourt four",
    price: 69.99,
    image:
      "https://raketka.ua/image/cache/catalog/2020/08/08/asicsnw202307322-900x900.jpg",
  },
  {
    id: "vball_016",
    title: "Nike Air Zoom Hyperattack",
    price: 159.99,
    image:
      "https://cdn11.bigcommerce.com/s-ob1gxw6h/images/stencil/1280x1280/products/1401/1493/attack-black-silver__62840.1561484729.jpg?c=2",
  },
];

function Sneakers() {
  return (
    <section className={styles.products}>
      {/* <div className={styles.sideFilter}>
        <Category onCategoryChange={handleCategoryChange} />
      </div> */}

      <div className={styles.wrapper}>
        <ul>
          <Grid container spacing={2}>
            {SNEAKERS.map((sneakers) => (
              <SneakersItem
                id={sneakers.id}
                key={sneakers.id}
                title={sneakers.title}
                price={sneakers.price}
                sneakers
                image={sneakers.image}
              />
            ))}
          </Grid>
        </ul>
      </div>
    </section>
  );
}

export default Sneakers;

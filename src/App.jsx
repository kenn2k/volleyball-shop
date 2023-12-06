import { Route, Routes } from "react-router-dom";
import Layout from "./UI/Layout/Layout";
import HomePage from "./pages/homepage/HomePage";
import EquipPage from "./pages/equippage/EquipPage";
import BallPage from "./pages/ballspage/BallPage";
import SneakersPage from "./pages/sneakerspage/SneakersPage";

function App() {
  return (
    //Сделать путь на корзину

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="equip" element={<EquipPage />} />
        <Route path="balls" element={<BallPage />} />
        <Route path="sneakers" element={<SneakersPage />} />
      </Route>
    </Routes>
  );
}

export default App;

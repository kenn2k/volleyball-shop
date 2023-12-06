import { useEffect } from "react";
import PromoText from "./PromoText";

import Equip from "./Equip";

function EquipPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <PromoText />
      <Equip />
    </div>
  );
}

export default EquipPage;

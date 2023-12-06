import { useEffect } from "react";

import Sneakers from "./Sneakers";

function SneakersPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Sneakers />
    </div>
  );
}

export default SneakersPage;

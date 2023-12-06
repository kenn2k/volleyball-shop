import { useEffect } from "react";

import Ball from "./Ball";

function BallPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Ball />
    </div>
  );
}

export default BallPage;

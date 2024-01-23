import { useEffect, useRef } from "react";
import useVisiblity from "../hook/visibility";

export default function PaginationCompoment({ cbOnVisible, children }) {
  const visRef = useRef(null);
  const isVisible = useVisiblity(visRef);

  useEffect(() => {
    if (isVisible === true) {
      cbOnVisible();
    }
  }, [isVisible]);

  return (
    <div className="App">
      {children}
      <div ref={visRef}></div>
    </div>
  );
}

import { useState, useEffect } from "react";
import { WindowSizeObj } from "../utils/types";

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState<WindowSizeObj>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (windowSize.width) {
    return windowSize.width < 576
      ? "XS"
      : windowSize.width >= 576 && windowSize.width < 768
      ? "S"
      : windowSize.width >= 768 && windowSize.width < 992
      ? "M"
      : windowSize.width >= 992 && windowSize.width < 1200
      ? "L"
      : windowSize.width >= 1200 && windowSize.width < 1400
      ? "XL"
      : "XXl";
  }

  return undefined;
}

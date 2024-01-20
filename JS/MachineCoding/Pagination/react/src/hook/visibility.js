import { useState, useMemo, useEffect } from "react";
export default function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(
        ([entry]) => {
          setIntersecting(entry.isIntersecting);
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.1
        }
      ),
    [ref]
  );

  useEffect(() => {
    try {
      observer.observe(ref.current);
    } catch (error) {}
    return () => observer.disconnect();
  }, []);

  return isIntersecting;
}

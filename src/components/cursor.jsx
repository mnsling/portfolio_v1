import { useEffect, useRef, useState } from "react";

const CursorLens = () => {
  const cursorRef = useRef(null);

  const mousePos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);

  // Only enable on desktop (Tailwind lg: ≥1024px)
  const [isDesktop, setIsDesktop] = useState(false);

  // Watch viewport width (≥1024px) and toggle <html>.custom-cursor
  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    const mq = window.matchMedia("(min-width: 1024px)");

    const apply = (isLgUp) => {
      setIsDesktop(isLgUp);
      const html = document.documentElement;
      if (isLgUp) {
        html.classList.add("custom-cursor");
      } else {
        html.classList.remove("custom-cursor");
      }
    };

    // initial
    apply(mq.matches);

    // respond to resize
    const onChange = (e) => apply(e.matches);
    mq.addEventListener?.("change", onChange);

    return () => {
      mq.removeEventListener?.("change", onChange);
      document.documentElement.classList.remove("custom-cursor");
    };
  }, []);

  // Animation loop only when desktop
  useEffect(() => {
    if (!isDesktop) {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      return;
    }
    if (typeof window === "undefined") return;

    // Start centered
    currentPos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    mousePos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const animate = () => {
      const speed = 0.15; // Increased speed (from 0.03 to 0.15) so the red dot feels snappy and responsive

      currentPos.current.x += (mousePos.current.x - currentPos.current.x) * speed;
      currentPos.current.y += (mousePos.current.y - currentPos.current.y) * speed;

      const node = cursorRef.current;
      if (node) {
        // Updated offset: -4px because the dot width/height is now 8px (halved to center it perfectly)
        node.style.transform = `translate(${currentPos.current.x - 4}px, ${currentPos.current.y - 4}px)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isDesktop]);

  // Don't render at all on tablet/mobile
  if (!isDesktop) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-50 hidden lg:block"
      style={{
        width: "8px", // Clean, subtle dot size
        height: "8px",
        borderRadius: "50%",
        backgroundColor: "#EF4444", // Tailwind's vibrant red-500
        boxShadow: "0 0 12px rgba(239, 68, 68, 0.6)", // Gives it a clean neon/cyberpunk glow
        top: 0,
        left: 0,
        transform: "translate(-9999px, -9999px)",
      }}
    />
  );
};

export default CursorLens;
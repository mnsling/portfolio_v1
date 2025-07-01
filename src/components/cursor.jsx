import { useEffect, useRef } from "react";

const CursorLens = () => {
  const cursorRef = useRef(null);
  const mousePos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const currentPos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      const speed = 0.03; // smaller = slower, smoother

      currentPos.current.x += (mousePos.current.x - currentPos.current.x) * speed;
      currentPos.current.y += (mousePos.current.y - currentPos.current.y) * speed;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${currentPos.current.x - 50}px, ${currentPos.current.y - 50}px)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-50"
      style={{
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        backdropFilter: "invert(1) contrast(2) brightness(1.2)",
        WebkitBackdropFilter: "invert(1) contrast(2) brightness(1.2)",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        border: "1px solid rgba(255, 255, 255, 0.4)",
      }}
    ></div>
  );
};

export default CursorLens;

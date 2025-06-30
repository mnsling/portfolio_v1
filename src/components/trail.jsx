import { useEffect, useState } from "react";

const WaterRipple = () => {
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newRipple = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };

      setRipples((prev) => [...prev, newRipple]);

      // Remove ripple after animation finishes
      setTimeout(() => {
        setRipples((prev) =>
          prev.filter((ripple) => ripple.id !== newRipple.id)
        );
      }, 600); // same as animation duration
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className={`
            absolute 
            w-8 h-8 
            rounded-full 
            border border-black
            opacity-30 
            animate-waterRipple
          `}
          style={{
            left: ripple.x,
            top: ripple.y,
            transform: "translate(-50%, -50%)",
          }}
        ></div>
      ))}
    </div>
  );
};

export default WaterRipple;

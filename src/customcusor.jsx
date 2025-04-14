import { useEffect } from "react";
import './customcursor.css';

const CustomCursor = () => {
  useEffect(() => {
    const circle = document.querySelector(".cursor-circle");

    const handleMouseMove = (e) => {
      if (circle) {
        circle.style.transform = `translate(${e.clientX - 24}px, ${e.clientY - 24}px)`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <div className="cursor-circle"></div>;
};

export default CustomCursor;

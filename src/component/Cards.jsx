import React, { useState, useEffect } from "react";

function Cards() {
  const [count, setCount] = useState(15);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setCount(0);
      } else {
        setCount(15);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [0]);

  return (
    <div>
      <p>Counter: {count}</p>
      <p>Scroll up or down to update the counter!</p>
    </div>
  );
}

export default Cards;

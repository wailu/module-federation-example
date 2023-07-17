import React, { useEffect } from "react";

const Duck = () => {
  useEffect(() => {
    const id = setInterval(() => console.log("quack"), 1000);
    return () => clearInterval(id);
  }, []);

  return <div>I'm a duck</div>;
};

export default Duck;

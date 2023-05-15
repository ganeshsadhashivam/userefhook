import React from "react";
import { useRef, useEffect } from "react";
const Focus = () => {
  const inputElementRef = useRef();

  useEffect(() => {
    inputElementRef.current.focus();
    inputElementRef.current.style.backgroundColor = "lightskyblue";
  }, []);
  return (
    <div>
      <h1>useRefhook()</h1>
      <input type="text" ref={inputElementRef} />
    </div>
  );
};

export default Focus;

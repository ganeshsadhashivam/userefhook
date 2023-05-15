import React, { useEffect, useState, useRef } from "react";

const Counter = () => {
  //   const [count, setCount] = useState(0);

  //   const handleClick = () => {
  //     setCount((prev) => prev + 1);
  //   };
  //   useEffect(() => {
  //     setCount((prev) => prev + 1);
  //   });

  const countRef = useRef(0);

  const [searchterm, setSearchTerm] = useState("");
  useEffect(() => {
    countRef.current = countRef.current + 1;
  });
  return (
    <div>
      {/* {count} */}
      {/* <button onClick={handleClick}> click me</button> */}
      {countRef.current}
      <input
        type="text"
        value={searchterm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default Counter;

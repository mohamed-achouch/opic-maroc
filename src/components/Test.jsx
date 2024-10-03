import React, { useState } from "react";
import { useSpring ,animated } from "@react-spring/web";
const Test = () => {
  const springs = useSpring({
    from: { y: 0 },
    to: { y: 100 },
  })
  return (
    <animated.div
    style={{
      width: 80,
      height: 80,
      background: '#ff6d6d',
      borderRadius: 8,
      ...springs,
    }}
    />
  );
};

export default Test;

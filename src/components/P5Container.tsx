import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import p5 from "p5";

type Props = { children: any };

/**
 * P5Component
 *
 */ 
const P5Container = (props: Props) => {
  const p5Ref = useRef<p5 | null>(null);
  const divRef = useRef<HTMLDivElement | null>(null);
  
  const [p5Instance, setP5Instance] = useState({});
  
  const Sketch = (p) => {};

  useEffect(() => {
    if(divRef.current && p5Ref.current == null) {
      const instance = new p5(Sketch, divRef.current);
      p5Ref.current = instance;
      setP5Instance(instance);
    }
  }, []);

  return (
    <div ref={divRef}>
      {React.cloneElement(props.children, { p5: p5Instance })}
    </div>
  );
};

export default P5Container;

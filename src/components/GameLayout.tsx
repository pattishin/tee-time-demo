import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import p5 from "p5";

type Props = {p5: any };

/**
 * GameLayout
 *
 */ 
const GameLayout = (props: Props) => {
  const { p5 } = props;

  let levels;
  let button;
  let x = 100;
  let y = 100;

  let move = false;

  let character = { x: 0, y: 0 };
  let gridSize = 20;

  function moveCharacter(x, y) {
    p5.fill(235, 255, 0);
    p5.circle(x, y, gridSize);
  }

  p5.setup = () => {
    //load and save the songs folder as JSON
    //levels = loadJSON("/levels");
    console.log("setup canvas");
    p5.createCanvas(window.innerWidth/2, window.innerHeight/2);
    p5.stroke(255); // Set line drawing color to white
    p5.frameRate(30);

    button = p5.createButton("Click me");

    button.mouseClicked(() => {
      console.log('clicked');
      move = !move;
    });
  }

  p5.draw = () => {
    p5.background(0); // Set the background to black

    if(move) {
      y = y - 1;
      x = x - 1;
      if (x < 0) x = 400;
      if (y < 0) y = 400;

      moveCharacter(x,y);
    }
  }

  p5.keyPressed = () => {
    console.log(p5.key);
  };

  return (
    <div id="gameArena"></div>
  );
};

export default GameLayout;

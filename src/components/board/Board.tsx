import React, { useState } from 'react';
import { Cell } from './cell/Cell.tsx';
import './cell/cell.css';
import './board.css';

export const Board = () => {
  const [isColor,setIsColor] = useState<"black" | "white" | null>(null);
  const [count, setCount] = useState<number>(0)
  const array: number[] = [];
  for (let num = 1; num <= 16; num++) {
    array.push(num);
  }


  return (
    <>
      <div className="container">
        {array.map((num) => (
          <Cell id={`cell_${num}`} count={count} setCount={setCount} isColor={isColor} setIsColor={setIsColor} />
        ))}
      </div>
    </>
  );
};
export default Board;

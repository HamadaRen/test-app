import React, { useEffect, useState } from 'react';
import './cell.css';
import styled from 'styled-components';

type CellProps = {
  id: string;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  setIsColor: React.Dispatch<React.SetStateAction<"black" | "white" | null>>
  isColor: "black" | "white" | null;
};
export const Cell = ({ id, count, setCount, isColor, setIsColor }: CellProps) => {
  [isColor,setIsColor] = useState<"black" | "white" | null>(null);

  const countUp = () => {
    setCount(count + 1)
  }

  const handleSelect = () => {
    if(isColor === null){
      countUp()
      {count % 2 === 0 ? setIsColor('white') : setIsColor('black')}
    }else{
      alert('そこに置くことはできません')
    }
  }
  useEffect (() => {
    if(id === '6' || id === '11'){
      setIsColor('white')
    }else if(id === '7' || id === '10'){
      setIsColor('black')
    }
  },[id])


  return (
    <SButton $isColor={isColor} onClick={handleSelect} >
      {id}
    </SButton>
  );
};
export default Cell;

const SButton = styled.button<{$isColor: "black" | "white" | null}>`
  background: ${(props) => props.$isColor === "black" ? "black": props.$isColor === "white" ?  "white" : "#008000"};
  border: 3px solid #000;
  height: 25%;
  width: 25%;
  cursor: pointer;
`;

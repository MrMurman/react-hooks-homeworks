import { useState } from "react";

export const HomeWork1 = () => {

  const [result, setResult] = useState<number>()

  const randomize = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  } 

  const rollDice1_6 = () => setResult(randomize(1, 6)) 

  return <div>
    <h2>Симулятор игральной кости</h2>
    <div>
      <span>
        <p>Кость 1-6</p>
        <button onClick={rollDice1_6}>Бросок</button>
        <p>Результат: {result}</p>
      </span>
    </div>
  </div>;
};

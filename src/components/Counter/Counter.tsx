"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";

interface CounterProps {
  initialCount?: number;
}

function Counter({ initialCount = 99 }: CounterProps) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className={styles.counter}>
      <button className={styles.btn} onClick={decrement}>
        -
      </button>
      <span className={styles.count}>{count}</span>
      <button className={styles.btn} onClick={increment}>
        +
      </button>
      <h1 className="bg-blue-800 hidden md:block">
        testing if display sizes work...
      </h1>
    </div>
  );
}

export default Counter;

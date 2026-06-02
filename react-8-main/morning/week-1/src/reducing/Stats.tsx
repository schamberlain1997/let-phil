import React from "react";
import ProblemCard from "../extras/ProblemCard";

export const Stats = () => {
  const nums = [4, 9, 2, 10, 7];

  const total = nums.reduce((sum, val) => sum + val, 0);

  const max = nums.reduce((a, b) => Math.max(a, b), -Infinity);

  const average = nums.reduce((sum, val) => sum + val, 0)/nums.length;


  return (
    <ProblemCard
      title="Reduce 10 — Reduce + render summary stats"
      method="reduce"
      question="Use reduce() to compute: total, max, and average. Then render them."
      dataPreview={nums}
    >
      <div>
        <p>{total}</p>
        <p>{max}</p>
        <p>{average}</p>
      </div>
    </ProblemCard>
  );
};

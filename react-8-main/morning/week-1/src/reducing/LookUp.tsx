import React from "react";
import ProblemCard from "../extras/ProblemCard"

export const LookUp = () => {
  const users = [
    { id: 101, name: "Taylor" },
    { id: 102, name: "Jordan" },
  ];
 
  
  const lookup = users.reduce<Record<number, string>>((acc, u) =>{
    acc[u.id] = u.name;
    return acc;
  }, {});

  return (
    <ProblemCard
      title="Reduce 08 — Build a lookup object"
      method="reduce"
      question="Use reduce() to convert the array into an object: { [id]: name }."
      dataPreview={users}
    >
    
      <div>
        {JSON.stringify(lookup)}
      </div>
    </ProblemCard>
  );
};

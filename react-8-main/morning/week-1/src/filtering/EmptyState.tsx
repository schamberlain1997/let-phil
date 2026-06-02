import React from "react";
import ProblemCard from "../extras/ProblemCard";

export const EmptyState = () => {
  const items = ["Apple", "Banana"];
  const searchTerm = "zzzz";

  const searchedItems = items.filter(item => item.includes(searchTerm))

  const result = searchedItems.length > 0 ? searchedItems : ["No Results Found"]
  
  return (  
    <ProblemCard
      title="Filter 09 — Empty state handling"
      method="filter"
      question='Filter by searchTerm. If no results, show "No results found".'
      dataPreview={{ items, searchTerm }}
      
      
    >{result}</ProblemCard>
  );
};

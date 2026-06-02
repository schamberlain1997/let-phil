import ProblemCard from "../extras/ProblemCard";

export const CaseInsensitive = () => {
  const names = ["Ava", "liam", "Noah", "MIA", "Zoe"];

  const filteredNames = names.filter((name) => name.includes("a") || name.includes("A"))

  return (
    <ProblemCard
      title="Filter 05 — Case-insensitive filtering"
      method="filter"
      question='Render only names that include the letter "a" (case-insensitive).'
      dataPreview={names}
    >
      {filteredNames.map((name) => (
        <div>{name}</div>
      ))}
    </ProblemCard>
  );
};

import ProblemCard from "../extras/ProblemCard";

export const RenderObjects = () => {
  const users = [{ name: "Alice" }, { name: "Bob" }];
  return (
    <ProblemCard
      title="Map 04 — Render objects"
      method="map"
      question="Render each user's name in a <p>."
      dataPreview={users}
    >
    {users.map((user) => {
      const name = user.name
      return <p>{name}</p>
    })}
    </ProblemCard>
  );
};

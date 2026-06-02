import ProblemCard from "../extras/ProblemCard";

// users.filter(() => somevalue === value)

export const AdminsOnly = () => {
  const users = [
    { id: 1, name: "Alex", isAdmin: true },
    { id: 2, name: "Casey", isAdmin: false },
    { id: 3, name: "Robin", isAdmin: true },
  ];

  const filteredUsers = users.filter((user) => user.isAdmin)

  return (
    <ProblemCard
      title="Filter 03 — Filter objects by property"
      method="filter"
      question="Render only the admins."
      dataPreview={users}
    >
      {filteredUsers.map((user) => (
        <>
        <div>ID: {user.id}</div>
        <div>Name: {user.name}</div>
        </>
      ))}
    </ProblemCard>
  );
};

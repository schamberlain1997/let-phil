import ProblemCard from "../extras/ProblemCard";

export const MultipleConditions = () => {
  const users = [
    { id: 1, name: "Chris", active: true, age: 17 },
    { id: 2, name: "Pat", active: true, age: 22 },
    { id: 2, name: "Shelly", active: false, age: 28 },
    { id: 2, name: "Charmaine", active: false, age: 62 },
    { id: 3, name: "Morgan", active: true, age: 30 },
  ];
  
const filteredUsers = users.filter((user, index)=> user.active === true && user.age > 18 )


  return (
    <ProblemCard
      title="Filter 07 — Multiple conditions"
      method="filter"
      question="Render users who are active AND age > 18."
      dataPreview={users}
    >{filteredUsers.map((user)=>(
      <>
      <div>ID: {user.id}</div>
      <div>Name: {user.name}</div>  
      <div>Age: {user.age}</div>
      </>))}
    </ProblemCard>
  );
};

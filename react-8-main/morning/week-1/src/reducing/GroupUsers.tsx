import React from 'react'
import ProblemCard from '../extras/ProblemCard';

export const GroupUsers = () => {

  interface User {
    id: number;
    name: string;
    role: string;
  }

  interface GroupedUser {
    [key: string]: string[]
  }

  const users: User[] = [
    { id: 1, name: "Ava", role: "admin" },
    { id: 2, name: "Noah", role: "user" },
    { id: 3, name: "Mia", role: "user" },
  ];



  const groupBy = (by: string, users:User[]) => {
    return users.reduce((acc:GroupedUser, user:User) => {
          const key = user[by as keyof User];
          acc[key] = acc[key] || [];
          acc[key].push(`${user.id} / ${user.name} / ${user.role}`);
      return acc;
    }, {} as GroupedUser)
  }

const grouped = groupBy('role', users)

  return (
    <ProblemCard
      title="Reduce 06 — Group items"
      method="reduce"
      question="Use reduce() to group users by role. (Example: { admin: [...], user: [...] })"
      dataPreview={users}
    >
     <div>
  {Object.entries(grouped).map(([role, users]) => (
    <div key={role}>
      <strong>{role}:</strong>
      <ul>
        {users.map((userStr, index) => (
          <li key={index}>{userStr}</li>
        ))}
      </ul>
    </div>
  ))}
</div>
    </ProblemCard>
  );
}

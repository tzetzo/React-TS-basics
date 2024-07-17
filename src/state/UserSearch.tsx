import { useState } from "react";

const users = [
  { name: "Sarah", age: 20 },
  { name: "Alex", age: 20 },
  { name: "Michael", age: 20 },
];

const UsserSearch: React.FC = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<undefined | { name: string; age: number }>();

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });

    setUser(foundUser);
  };

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Find User</button>
      <div>
        {user?.name}
        {user?.age}
      </div>
    </div>
  );
};

export default UsserSearch;

import { useEffect } from "react";
import { useState } from "react";

const UsersData = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) throw new Error("Failed to Fetch users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchUsers();
  }, []);
  console.log(users);

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{`${user.id}: ${user.name}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersData;

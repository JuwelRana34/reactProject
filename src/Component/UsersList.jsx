// UsersList.js
import  { useEffect, useState } from "react";
import {Fatchuser } from "./Fatchuser"; // Adjust according to your project structure

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const usersList = await Fatchuser();
        setUsers(usersList);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    
    getUsers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.name} - {user.email}
        </li>
      ))}
    </ul>
  );
};

export default UsersList;



import { useAppContext } from "../../context/DbContext";

// style
import "./UserPage.css";

export const UserPage = () => {
  const { users, loading, events, setActiveUser, activeUser } = useAppContext();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>UserPage</h1>
      <div>Welkom, {activeUser ? activeUser.name : "Gast"}!</div>
      <ul>
        {users.map((user) => (
          <div key={user.id} onClick={() => setActiveUser(user)}>
            {user.name}
          </div>
        ))}
      </ul>
    </div>
  );
};

import "./ChooseUser.css";
import { useAppContext } from "../../../context/DbContext";

export const ChooseUser = ({ setChange }) => {
  const { users, loading, events, categories, activeUser, setActiveUser } =
    useAppContext();

  if (loading) {
    return <div>Loading...</div>;
  }

  const clickFn = (u) => {
    setActiveUser(u);
    setChange(false);
  };
  return (
    <>
      <h1>Je bent niet ingelogd</h1>
      <p>Kies 1 van de volgende users:</p>
      <ul>
        {users.map((user) => (
          <div key={user.id} onClick={() => clickFn(user)}>
            {user.name}
          </div>
        ))}
      </ul>
    </>
  );
};

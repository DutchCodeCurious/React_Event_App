import "./ChooseUser.css";
import { useAppContext } from "../../../context/DbContext";
import { useState } from "react";
import { AddUser } from "../../../components/AddUser/AddUser";
export const ChooseUser = ({ setChange }) => {
  const { users, loading, events, categories, activeUser, setActiveUser } =
    useAppContext();
  const [add, setAdd] = useState(false);

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
      <div className="add_section">
        <button onClick={() => setAdd(true)}>Add User</button>
        {add ? <AddUser /> : null}
      </div>
    </>
  );
};

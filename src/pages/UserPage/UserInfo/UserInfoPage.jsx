import "./UserInfoPage.css";
import { ChangeUserButton } from "./ChangeUserButton";
import { useAppContext } from "../../../context/DbContext";

export const UserInfoPage = ({ setChange }) => {
  const { users, loading, events, categories, activeUser, setActiveUser } =
    useAppContext();

  const userEvents = events.filter((event) => event.createdBy == activeUser.id);
  console.log(userEvents);

  return (
    <>
      <div className="user_info">
        <h1>{activeUser.name}</h1>
        <ChangeUserButton setChange={setChange} />
        <p>Welkom, {activeUser.name}!</p>
        <h2>Jouw events:</h2>
        <div className="list">
          <ul>
            {userEvents.map((event) => (
              <li key={event.id}>{event.title}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="user_actions">
        <ul>
          <li> add event</li>
        </ul>
      </div>
    </>
  );
};

import { NavLink } from "react-router-dom";
import { useAppContext } from "../../context/DbContext";

export const Header = () => {
  const { activeUser } = useAppContext();
  if (activeUser) {
    console.log(activeUser);
  }

  return (
    <div className="head">
      <div className="title">
        <NavLink to="/">
          <h1>WincEvents</h1>
        </NavLink>
      </div>
      <div className="nav-links-div">
        <ul className="list-nav-links">
          <li>
            <NavLink className="buttons-head" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="buttons-head" to="events">
              Events
            </NavLink>
          </li>
          <li>
            <NavLink className="buttons-head" to="/form">
              From
            </NavLink>
          </li>
          {activeUser ? (
            <li>
              <NavLink className="buttons-head" to="user">
                {activeUser.name}
              </NavLink>
            </li>
          ) : (
            <li>
              <NavLink className="buttons-head" to="/">
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}
export function AppContextProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [events, setEvents] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeUser, setActiveUser] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("http://localhost:3000/events")
      .then((response) => {
        setEvents(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("http://localhost:3000/categories")
      .then((response) => {
        setCategories(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const value = {
    users,
    setUsers,
    events,
    setEvents,
    categories,
    setCategories,
    loading,
    setLoading,
    activeUser,
    setActiveUser,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

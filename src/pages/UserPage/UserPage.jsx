import "./UserPage.css";
import { useAppContext } from "../../context/DbContext";
import { ChooseUser } from "./ChooseUser/ChooseUser";
import { UserInfoPage } from "./UserInfo/UserInfoPage";
import { useState } from "react";

export const UserPage = () => {
  const { users, loading, events, categories, activeUser, setActiveUser } =
    useAppContext();

  const [change, setChange] = useState(false);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!activeUser || change) {
    return <ChooseUser setChange={setChange} />;
  }

  if (activeUser) {
    return <UserInfoPage setChange={setChange} />;
  }
};

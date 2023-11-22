//style
import "./FormPage.css";
import { useAppContext } from "../../context/DbContext";

import AddForm from "../../components/AddForm/AddForm";

export const FormPage = () => {
  const { loading, activeUser } = useAppContext();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!activeUser) {
    return <div>Not logged in</div>;
  }

  return (
    <div>
      <h1>FormPage</h1>
      <AddForm />
    </div>
  );
};

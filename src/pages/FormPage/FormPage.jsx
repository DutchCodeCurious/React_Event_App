//style
import "./FormPage.css";
import { useAppContext } from "../../context/DbContext";

export const FormPage = () => {
  const { users, loading, events, categories } = useAppContext();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>FormPage</h1>
    </div>
  );
};
